"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ResumeModal({ className }: { className: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/75 px-4 py-6">
      <div className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-900">
            Resume Preview
          </p>

          <div className="flex items-center gap-3">
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

        <iframe
          src="/resume.pdf"
          title="Resume Preview"
          className="min-h-0 flex-1 w-full"
        />
      </div>
    </div>
  );

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        View Resume
      </button>

      {mounted && open ? createPortal(modalContent, document.body) : null}
    </>
  );
}