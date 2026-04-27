"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-50 text-neutral-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-white opacity-60 blur-[120px]"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-6">
        <div className="text-lg font-medium tracking-tight">ContentBrain</div>
        <a href="#manifesto" className="text-sm text-neutral-500 transition-colors hover:text-neutral-900">
          Manifesto
        </a>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center px-6 pb-32 pt-20 md:pt-24">
        <div className="flex max-w-[720px] flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
            Accepting private beta applicants
          </div>

          <h1 className="text-balance font-serif text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            Turn LinkedIn content into predictable leads.
          </h1>

          <p className="mt-8 max-w-[55ch] text-pretty text-lg leading-relaxed text-neutral-600 md:text-xl">
            ContentBrain is a LinkedIn-first AI tool that learns your voice, helps you collect
            leads, and includes a publishing engine with a post scoring panel that checks your
            hook, formatting, and AI phrases before you hit publish.
          </p>

          <form onSubmit={handleSubmit} className="relative mt-12 w-full max-w-md">
            <label htmlFor="email" className="sr-only">
              Work email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your work email"
              className="w-full rounded-full border border-neutral-200 bg-white py-4 pl-6 pr-40 text-neutral-900 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all placeholder:text-neutral-400 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            />
            <button
              type="submit"
              className="absolute bottom-1.5 right-1.5 top-1.5 rounded-full bg-neutral-900 px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-700 hover:shadow-lg"
            >
              {submitted ? "You're in ✓" : "Request access"}
            </button>
          </form>

          <div className="mt-16 flex items-center gap-3 text-sm text-neutral-600">
            <div className="flex -space-x-2">
              <div className="flex size-7 items-center justify-center rounded-full border border-white bg-amber-100 text-[10px] font-medium text-neutral-900">
                AB
              </div>
              <div className="flex size-7 items-center justify-center rounded-full border border-white bg-emerald-100 text-[10px] font-medium text-neutral-900">
                CR
              </div>
              <div className="flex size-7 items-center justify-center rounded-full border border-white bg-violet-100 text-[10px] font-medium text-neutral-900">
                JW
              </div>
            </div>
            <span>Used by 142 teams to turn LinkedIn posts into booked calls.</span>
          </div>
        </div>

        <div className="relative mt-24 w-full max-w-4xl md:mt-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 rounded-full bg-white/40 blur-2xl"
          />

          <div className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] md:p-12">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-8">
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-600">
                  <span className="text-xs font-serif italic">CB</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">LinkedIn Draft: GTM Playbook</div>
                  <div className="mt-0.5 text-xs text-neutral-500">
                    Audience: B2B founders and marketers
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium tabular-nums">09:14:00 AM</div>
                <div className="mt-0.5 text-xs text-neutral-500">Draft started</div>
              </div>
            </div>

            <div className="relative pt-8">
              <div
                aria-hidden="true"
                className="absolute bottom-8 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-neutral-200 md:block"
              />

              <div className="relative mb-8 text-center">
                <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs font-medium text-neutral-900">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                  ContentBrain Scoring Panel
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
                <PanelCard
                  title="Hook"
                  time="09:14:12"
                  status="7.8/10 strength"
                  detail="Lead with a sharper outcome in line one"
                />
                <PanelCard
                  title="Formatting"
                  time="09:14:18"
                  status="Readable structure"
                  detail="Add one more line break before the CTA"
                  highlight
                />
                <PanelCard
                  title="AI Phrase Check"
                  time="09:14:24"
                  status="2 phrases flagged"
                  detail={`Replace "in today's fast-paced world"`}
                />
                <PanelCard
                  title="Lead Capture"
                  time="09:14:45"
                  status="CTA link attached"
                  detail="Route clicks to your lead form automatically"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function PanelCard({
  title,
  time,
  status,
  detail,
  highlight = false,
}: {
  title: string;
  time: string;
  status: string;
  detail: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xs font-medium uppercase tracking-wider text-neutral-500">{title}</div>
        <div className={`text-xs font-medium tabular-nums ${highlight ? "text-emerald-600" : "text-neutral-900"}`}>
          {time}
        </div>
      </div>
      <div className="mb-1 text-left text-sm font-medium">{status}</div>
      <div className="truncate text-left text-xs text-neutral-500">{detail}</div>
    </div>
  );
}
