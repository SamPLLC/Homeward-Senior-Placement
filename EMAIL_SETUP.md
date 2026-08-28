# Email Setup Instructions

The contact form sends submissions to `homewardseniors@gmail.com`.

By default it uses **FormSubmit** (no extra setup on Vercel). The first time someone submits the form, FormSubmit will email you a one-time activation link — click it to start receiving messages.

For a more professional setup later, you can switch to **Resend**:

## 1. Get a Resend API Key

1. Go to https://resend.com and sign up for a free account
2. Navigate to API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

## 2. Add API Key to Local Development

Create a `.env.local` file in the root of the project:

```
RESEND_API_KEY=re_your_api_key_here
```

## 3. Add API Key to Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add a new variable:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key
   - Environment: Production, Preview, and Development
4. Save and redeploy your site

## 4. Verify Domain (Optional)

For production use, you'll want to verify your domain in Resend to send from your own email address instead of `onboarding@resend.dev`.

## Testing

Once set up, test the contact form and you should receive emails at `homewardseniors@gmail.com`.


