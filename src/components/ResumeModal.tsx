"use client";

import { useState } from "react";

export default function ResumeModal({ className }: { className: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        View Resume
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6">
          <div className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                Resume Preview
              </p>

              <div className="flex gap-3">
                <a
                  href="/api/resume"
                  className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-slate-800"
                >
                  Download
                </a>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  Close
                </button>
              </div>
            </div>

            <iframe src="/resume.pdf" title="Resume Preview" className="h-full w-full" />
          </div>
        </div>
      )}
    </>
  );
}