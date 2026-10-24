# US Digital Solutions marketing site

A responsive Next.js App Router marketing website for a software development partner. The example brand and project stories are placeholders; replace them with approved company information before launch.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS
- Framer Motion for subtle, reduced-motion-aware section reveals
- MDX blog posts with frontmatter
- Next.js server action and Resend for contact form delivery
- Cal.com embedded strategy-call booking with a post-booking confirmation page
- Optional Google Analytics 4, loaded only after analytics consent
- Vercel-ready sitemap, robots, metadata, and structured data

## Requirements

- Node.js 20.9 or newer
- npm
- A Resend account and verified sending domain for production contact email

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local` and set the values you want to use:

   ```env
   RESEND_API_KEY=re_your_key
   CONTACT_EMAIL=hello@yourcompany.com
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_CALENDAR_URL=https://cal.com/your-team/intro
   ```

   The contact action needs both `RESEND_API_KEY` and `CONTACT_EMAIL`. GA4 is disabled when its measurement ID is unset or left at the example value. The calendar link falls back to the example URL.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Visit [http://localhost:3000](http://localhost:3000).

5. Set `NEXT_PUBLIC_CALENDAR_URL` to your Cal.com event URL. The embedded scheduler redirects successful bookings to `/book-a-call/thank-you`. The thank-you page sends a GA4 `generate_lead` event only when the visitor has opted into analytics and a real measurement ID is configured.

## Contact form email

The server action validates the submitted fields and sends a plain-text message through Resend. Configure a verified sender domain before production and replace the example `onboarding@resend.dev` sender in `app/contact/actions.ts` with an address on that domain. Keep the API key server-side; do not prefix it with `NEXT_PUBLIC_`.

## Blog

Add `.mdx` files in `content/blog/`. Each post should include frontmatter for `title`, `description`, `date` (YYYY-MM-DD), `category`, `author`, and `readingTime`. The blog listing, static post routes, and sitemap are generated from those files.

## Brand and content

Update company details, service descriptions, testimonials, technologies, and project examples in `lib/site.ts`. Update `site.url` via `NEXT_PUBLIC_SITE_URL` and replace the example email, calendar URL, team profiles, and legal language with accurate company details. The sample testimonials and case studies are illustrative placeholders and should not be presented as real customer claims.

## Production build

```bash
npm run typecheck
npm run build
npm run start
```

## Deploy to Vercel

1. Push the project to a Git provider and import it in Vercel.
2. Set `RESEND_API_KEY`, `CONTACT_EMAIL`, and `NEXT_PUBLIC_SITE_URL` in the Vercel project environment variables. Set the optional GA4 and scheduling variables if needed.
3. Replace the sample Resend sender with your verified domain and update the example company content.
4. Deploy. Vercel detects Next.js automatically; the build command is `npm run build`.

## Accessibility and privacy notes

The site includes semantic landmarks, a keyboard skip link, visible focus states, responsive navigation, reduced-motion handling, and system dark-mode colors. Analytics loads only after a visitor opts in. Before launch, review the privacy notice and legal terms with counsel for your jurisdiction and actual data practices.
