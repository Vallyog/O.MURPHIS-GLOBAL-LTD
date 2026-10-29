"use client";

import { useState, type FormEvent } from "react";
import { potentialServices, company } from "@/lib/site-config";
import { Icon } from "@/components/icon";

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

    if (!company.formEndpoint) {
      setSubmission({
        status: "error",
        message:
          "Enquiries are not connected yet. Please contact the company directly once verified contact details are available.",
      });
      return;
    }

    setSubmission({ status: "loading" });

    try {
      const response = await fetch(company.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!response.ok) {
        setSubmission({
          status: "error",
          message:
            "We couldn’t send your enquiry just now. Please try again later.",
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
      </div>
      <div className="form-row">
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
        <label className="form-field">
          <span>Area of interest <span aria-hidden="true">*</span></span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service area
            </option>
            {potentialServices.map((service) => (
              <option value={service.title} key={service.title}>
                {service.title} (subject to confirmation)
              </option>
            ))}
            <option value="Other">Other / not listed</option>
          </select>
        </label>
      </div>
      <label className="form-field">
        <span>Tell us about your project <span aria-hidden="true">*</span></span>
        <textarea
          name="message"
          placeholder="A little about your project, location and timing..."
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
          <>
            Send project enquiry 
          </>
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
      <p className="form-privacy-note">
        Your details will only be sent when an enquiry service is configured.
      </p>
    </form>
  );
}
