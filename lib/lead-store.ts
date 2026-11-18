import { randomUUID } from 'crypto';
import { mkdir, readFile, rename, unlink, writeFile } from 'fs/promises';
import path from 'path';
import type { LeadInput, StoredLead } from '@/lib/assessment';

export type Lead = StoredLead;

const dataDir = path.join(process.cwd(), 'data');
const dataFile = path.join(dataDir, 'leads.json');

let queue: Promise<unknown> = Promise.resolve();

function enqueue<T>(task: () => Promise<T>): Promise<T> {
  const run = queue.then(task, task);
  queue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function readLeads(): Promise<Lead[]> {
  try {
    const raw = await readFile(dataFile, 'utf8');
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is Lead => {
      return Boolean(item && typeof item === 'object' && 'id' in item && 'createdAt' in item);
    });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw error;
  }
}

function hostCannotKeepFiles(): boolean {
  return Boolean(
    process.env.VERCEL || process.env.NETLIFY || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.LAMBDA_TASK_ROOT,
  );
}

/** True only when this process can write the leads file. Serverless hosts are treated as unable to keep it. */
export async function leadStoreAvailable(): Promise<boolean> {
  if (hostCannotKeepFiles()) return false;
  const probe = path.join(dataDir, `.write-probe.${process.pid}`);
  try {
    await mkdir(dataDir, { recursive: true });
    await writeFile(probe, 'ok');
    await unlink(probe);
    return true;
  } catch {
    return false;
  }
}

export async function listLeads(): Promise<Lead[]> {
  const leads = await readLeads();
  return leads.sort((a, b) => (a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0));
}

export async function createLead(input: LeadInput): Promise<StoredLead> {
  return enqueue(async () => {
    const leads = await readLeads();
    const lead: Lead = {
      ...input,
      id: randomUUID(),
      createdAt: new Date().toISOString(),
    };
    leads.push(lead);
    await mkdir(dataDir, { recursive: true });
    const tmp = path.join(dataDir, `leads.${process.pid}.tmp`);
    await writeFile(tmp, `${JSON.stringify(leads, null, 2)}\n`, 'utf8');
    await rename(tmp, dataFile);
    return lead;
  });
}

export const LEADS_FILE = dataFile;
