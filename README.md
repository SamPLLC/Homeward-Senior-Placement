# Homeward Senior Placement

Public site and lead funnel for Homeward Senior Placement, a senior living placement practice based in Farmington Hills and serving Oakland County, Michigan.

## Run locally

```bash
npm install
```

Create `.env.local` in this folder:

```bash
LEAD_INBOX_PASSWORD=choose-a-password
```

There is no default password. Pick one before you open the inbox. Do not commit `.env.local`.

```bash
npm run dev
```

Open [http://127.0.0.1:3005](http://127.0.0.1:3005).

- Short family assessment: [http://127.0.0.1:3005/start](http://127.0.0.1:3005/start)
- City pages: [http://127.0.0.1:3005/areas](http://127.0.0.1:3005/areas)
- Lead inbox: [http://127.0.0.1:3005/inbox](http://127.0.0.1:3005/inbox)

## Where leads are stored

Submissions are written to `data/leads.json`. That file is gitignored because it contains family names, phone numbers, and emails. It stays on disk across `npm run dev` and `npm run start` restarts.

This project does not include a database. On a host with a persistent disk, the JSON file is the inbox. On Vercel’s serverless filesystem, files do not survive new deployments or new instances. For a public launch, run the app somewhere with a persistent disk, or copy `data/leads.json` off the server on a schedule.

Optional email copies of each lead use `RESEND_API_KEY`. See `EMAIL_SETUP.md`. The inbox does not depend on email.

## Owner placeholders

Phone and email already published on the site:

- Phone: (248) 996-4637
- Email: homewardseniors@gmail.com
- Advisor name used on the assessment: Sam Pitu (`BUSINESS_OWNER` in `lib/business.ts`)

Still blank on purpose:

- `BUSINESS_LICENSE` in `lib/business.ts` — add a real Michigan license or credential before publishing one. Leave it empty to hide it. Do not invent a number.
- `LEAD_INBOX_PASSWORD` — set this in the environment. There is no shared default.
