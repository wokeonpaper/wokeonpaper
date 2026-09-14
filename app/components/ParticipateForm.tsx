"use client"

import { useState, type FormEvent } from "react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maeygvpl"

type Status = "idle" | "submitting" | "success" | "error"

export default function ParticipateForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="pf-success">
        <h2>Got it. Thank you.</h2>
        <p>
          We&apos;ll take a look and get back to you if we&apos;d like to publish it. No promises
          on timing &mdash; we&apos;re a small, cranky team.
        </p>
      </div>
    )
  }

  return (
    <form className="pf-form" onSubmit={handleSubmit}>
      {/* honeypot spam trap */}
      <input type="text" name="_gotcha" className="pf-hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value="New Woke on Paper contribution" />

      <label className="pf-field">
        <span>Name *</span>
        <input type="text" name="Name" required />
      </label>

      <label className="pf-field">
        <span>Pronouns</span>
        <input type="text" name="Pronouns" placeholder="e.g. she/her" />
      </label>

      <label className="pf-field">
        <span>Social media handle *</span>
        <input type="text" name="Social media handle" required placeholder="@yourhandle" />
      </label>

      <label className="pf-field">
        <span>Link to the original post *</span>
        <input type="url" name="Original post URL" required placeholder="https://" />
      </label>

      <label className="pf-field">
        <span>Text of the post *</span>
        <textarea
          name="Post text"
          required
          rows={5}
          placeholder="Copy the exact text of the post, if you can."
        />
      </label>

      <label className="pf-field">
        <span>Link to your profile photo *</span>
        <input
          type="url"
          name="Profile photo URL"
          required
          placeholder="https://... (link to your profile picture)"
        />
      </label>

      <label className="pf-checkbox">
        <input type="checkbox" name="Permission to publish" value="Yes" required />
        <span>
          I confirm that Woke on Paper can publish this post on the Woke on Paper website. *
        </span>
      </label>

      {status === "error" && (
        <p className="pf-error">
          Something went wrong sending this. Please try again, or email us directly at{" "}
          <a href="mailto:wokeonpaper@gmail.com">wokeonpaper@gmail.com</a>.
        </p>
      )}

      <button type="submit" className="hero-button" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit for review →"}
      </button>
    </form>
  )
}
