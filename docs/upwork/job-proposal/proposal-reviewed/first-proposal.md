Hi, read your post properly — you're refactoring existing codebases, shipping new backend/API work, and wiring AI agents (Claude/OpenAI) into automation flows for SME clients. That's the day-to-day reality of my current main project, so quick fit-check:
For the last 18 months I've been the engineer on an AI-powered fintech research platform — Python/FastAPI backend, React/Next.js frontend, Postgres (very comfortable with MySQL too), and LLM integration with Claude + OpenAI for the research assistant, sentiment analysis, and signal generation. 3,000+ hours of production code, real users, real iteration. So "review, refactor, optimize existing projects" isn't a foreign concept — it's most of what I actually do.
One question on your workflow: when you onboard a refactor project, do you usually have a prioritized list of pain points already from the founder, or is the first job to audit the codebase and surface them yourself? My estimating shifts a lot based on that.
Availability: 25-30 hrs/week, WIB (UTC+7), heavily async-friendly. I overlap with EU and US East mornings.
Happy to share a 5-min architecture walkthrough of the platform I'm working on if useful.
— Arisqi


answer:

Hi,
Appreciate the clear budget signal — that's actually useful, because the right answer for $3K-$5K isn't "the full MVP but cheaper," it's "a lean Phase 1 that ships and earns you real user feedback fast."
Here's what I'd actually deliver in that range:
Phase 1 MVP — $4,000 fixed (≈90 hrs at $45/hr), 4-5 weeks
In scope:
• Image upload (single image, web-only, drag-and-drop + file picker)
• OpenAI Vision integration (GPT-4o or GPT-5 Vision) with structured JSON output for your recommendation schema
• Personalized recommendations rendered in a clean results view
• User accounts (email + password — Clerk or Auth.js)
• Basic history (list of past uploads + results, per user)
• Stripe checkout for a single paid tier (one product, one price — multi-tier flows are Phase 2)
• Deployment to Vercel + managed Postgres (Supabase or Neon)
• Source code in your GitHub, all credentials in your accounts
Explicitly NOT in scope (Phase 2 candidates):
• Multi-image batch upload, image comparison
• Mobile app
• Multi-tier subscription pricing or trial flows
• Admin dashboard
• Custom fine-tuning, vector embeddings, or RAG layers
• SEO marketing pages beyond a single landing page
• Advanced computer vision (segmentation, custom models) — staying with OpenAI Vision as you specified
Stack: Next.js (App Router) + TypeScript + Tailwind, NestJS or Next.js API routes for the backend, Postgres, OpenAI API, Stripe, Vercel + managed DB. All MVP-grade, all things I've shipped before — no learning-curve risk.
Why $4,000 sits in the middle of your range: honest scoping. $3,000 fits a working prototype but not something you can put in front of paying users and trust — billing webhooks, error handling, decent upload UX, and deployment that doesn't crash on the first real user all live in the gap between "demo" and "MVP." $4,000 is the floor where I can deliver something you'd be comfortable charging real users for.
Payment structure: 3 milestones — 30% on kickoff after the NDA, 40% at functional demo (image upload + Vision + recommendations working end-to-end), 30% at final delivery (auth, billing, deployment, handoff). Reduces risk on both sides.
Happy to jump on a 20-min call this week to walk through architecture, see your detailed spec under NDA, and finalize the milestone breakdown. My week opens up Tuesday/Wednesday WIB — what works on your side?
— Arisqi
