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

## Where leads go

Every assessment and contact submission is emailed to `homewardseniors@gmail.com` through FormSubmit. The family sees a success message only after FormSubmit accepts it. If that send fails, the page asks them to call (248) 996-4637.

`data/leads.json` is a local copy for machines that can write it. It is gitignored. The live site runs on Vercel, which does not keep that file. On a host that cannot store it, `/inbox` says leads are delivered by email and does not show an empty list.

Optional Resend copies, when `RESEND_API_KEY` is set, are sent only after the local file save. See `EMAIL_SETUP.md`. The FormSubmit email does not depend on that key or on the file.

## Owner placeholders

Phone and email already published on the site:

- Phone: (248) 996-4637
- Email: homewardseniors@gmail.com
- Advisor name used on the assessment: Sam Pitu (`BUSINESS_OWNER` in `lib/business.ts`)

Still blank on purpose:

- `BUSINESS_LICENSE` in `lib/business.ts` — add a real Michigan license or credential before publishing one. Leave it empty to hide it. Do not invent a number.
- `LEAD_INBOX_PASSWORD` — set this in the environment. There is no shared default.
