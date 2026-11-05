"use client";

import { useState, type FormEvent } from "react";

type SubmissionState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; message: string };

export function QuoteForm() {
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setSubmission({ status: "loading" });

    try {
      const response = await fetch("/api/product-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!response.ok) {
        const result: unknown = await response.json();
        const message =
          typeof result === "object" &&
          result !== null &&
          "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "We couldn’t send your enquiry just now. Please try again later.";
        setSubmission({
          status: "error",
          message,
        });
        return;
      }

      form.reset();
      setSubmission({ status: "success" });
    } catch {
      setSubmission({
        status: "error",
        message:
          "We couldn’t connect to the enquiry service. Please try again later.",
      });
    }
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-field">
          <span>Your name <span aria-hidden="true">*</span></span>
          <input
            autoComplete="name"
            name="name"
            placeholder="Full name"
            required
            maxLength={120}
          />
        </label>
        <label className="form-field">
          <span>Phone number</span>
          <input
            autoComplete="tel"
            name="phone"
            placeholder="Optional"
            type="tel"
            maxLength={40}
          />
        </label>
      </div>
      <label className="form-field">
        <span>Email address <span aria-hidden="true">*</span></span>
        <input
          autoComplete="email"
          name="email"
          placeholder="you@company.com"
          type="email"
          required
          maxLength={254}
        />
      </label>
      <label className="form-field">
        <span>Tell us which products you need <span aria-hidden="true">*</span></span>
        <textarea
          name="message"
          placeholder="Product names or types, quantities, delivery location and timing..."
          required
          rows={4}
          maxLength={3000}
        />
      </label>
      <p className="form-required-note">* Required fields</p>
      <button
        className="button button--yellow form-submit"
        disabled={submission.status === "loading"}
        type="submit"
      >
        {submission.status === "loading" ? (
          <>
            Sending enquiry <span className="form-spinner" aria-hidden="true" />
          </>
        ) : (
          <>Send product enquiry</>
        )}
      </button>
      <div className="form-status" aria-live="polite" role="status">
        {submission.status === "success" && (
          <p className="form-status--success">
            Thank you. Your enquiry has been sent.
          </p>
        )}
        {submission.status === "error" && (
          <p className="form-status--error">{submission.message}</p>
        )}
      </div>
    </form>
  );
}
