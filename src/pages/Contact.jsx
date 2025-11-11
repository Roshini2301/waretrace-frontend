import React, { useState } from "react";

/**
 * Professional Contact page
 * - Two-column layout on wide screens (info + form)
 * - Single column on small screens
 * - Subtle blue accents, neutral typography (no heavy blue)
 * - Accessible labels and success aria-live region
 * - Basic client-side validation + simulated submit (replace with API)
 */

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const accent = "#1f6fbf"; // subtle blue accent
  const neutralText = "#22303f";

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate sending (replace with real API call)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 900);
  };

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        {/* Left: contact info */}
        <aside style={styles.info}>
          <div style={styles.logoRow}>
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="1" y="4" width="22" height="16" rx="3" stroke={accent} strokeWidth="1.5" />
              <circle cx="8.5" cy="11.5" r="1.6" fill={accent} />
              <rect x="12.5" y="9" width="6" height="4" rx="0.8" fill={accent} opacity="0.15" />
            </svg>
            <div style={{ marginLeft: 12 }}>
              <div style={{ color: accent, fontWeight: 700, fontSize: 18 }}>WareTrace</div>
              <div style={{ color: "#6b7785", fontSize: 13 }}>IoT · RFID · Analytics</div>
            </div>
          </div>

          <h2 style={{ ...styles.h2, marginTop: 28 }}>Get in touch</h2>
          <p style={{ color: "#556270", lineHeight: 1.6 }}>
            Questions about WareTrace, integrations, or pricing? Send us a message — we typically respond within one business day.
          </p>

          <div style={styles.contactItems}>
            <div style={styles.contactItem}>
              <strong style={styles.contactLabel}>Email</strong>
              <a href="mailto:roshinimuragandam@waretrace.example" style={styles.contactValue}>
                roshinimuruganandam@waretrace.com
              </a>
            </div>

            <div style={styles.contactItem}>
              <strong style={styles.contactLabel}>Phone</strong>
              <div style={styles.contactValue}>+91 (9360821950) </div>
            </div>

            <div style={styles.contactItem}>
              <strong style={styles.contactLabel}>Office</strong>
              <div style={styles.contactValue}>Warehouse Tech Park, Suite 300</div>
            </div>
          </div>

          <div style={{ marginTop: 22 }}>
            <small style={{ color: "#93a0ad" }}>
              For urgent issues call the support number. For product demos, request a meeting and we'll schedule a walkthrough.
            </small>
          </div>
        </aside>

        {/* Right: form */}
        <main style={styles.formCard}>
          <h3 style={styles.formTitle}>Send us a message</h3>
          <p style={styles.formSubtitle}>Tell us how we can help — we’ll get back shortly.</p>

          {submitted && (
            <div role="status" aria-live="polite" style={styles.toast}>
              ✅ Your message was sent — thank you!
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <label style={styles.label}>
              Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                style={{ ...styles.input, borderColor: errors.name ? "#e06a6a" : "#e6eef6" }}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "err-name" : undefined}
              />
              {errors.name && <div id="err-name" style={styles.error}>{errors.name}</div>}
            </label>

            <label style={styles.label}>
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                style={{ ...styles.input, borderColor: errors.email ? "#e06a6a" : "#e6eef6" }}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "err-email" : undefined}
              />
              {errors.email && <div id="err-email" style={styles.error}>{errors.email}</div>}
            </label>

            <label style={styles.label}>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Briefly describe your request or question..."
                style={{ ...styles.textarea, borderColor: errors.message ? "#e06a6a" : "#e6eef6" }}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "err-message" : undefined}
              />
              {errors.message && <div id="err-message" style={styles.error}>{errors.message}</div>}
            </label>

            <div style={styles.row}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  ...styles.submit,
                  background: loading ? "#9bbbe0" : accent,
                  cursor: loading ? "default" : "pointer"
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <button
                type="button"
                onClick={() => setForm({ name: "", email: "", message: "" })}
                style={styles.reset}
              >
                Reset
              </button>
            </div>

            <div style={{ marginTop: 12, color: "#7b8a96", fontSize: 13 }}>
              By contacting us you agree to our <a style={{ color: accent, textDecoration: "underline" }}>privacy policy</a>.
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

/* Styles (CSS-in-JS) */
const styles = {
  page: {
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    background: "#fbfdff", // nearly white with a cool tint
    minHeight: "100vh",
    padding: "48px 20px",
    color: "#24333a", // dark slate (not pure black)
  },
  wrapper: {
    maxWidth: 1120,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "420px 1fr",
    gap: 28,
  },
  info: {
    background: "#ffffff",
    borderRadius: 12,
    padding: 28,
    boxShadow: "0 6px 20px rgba(31, 111, 191, 0.06)",
    minHeight: 320,
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
  },
  h2: {
    fontSize: 20,
    margin: 0,
    color: "#1f4f7a",
  },
  contactItems: {
    marginTop: 18,
    display: "grid",
    gap: 12,
  },
  contactItem: {
    background: "#fbfdff",
    borderRadius: 8,
    padding: 12,
  },
  contactLabel: {
    display: "block",
    fontSize: 13,
    color: "#5f6f7a",
    marginBottom: 6,
  },
  contactValue: {
    color: "#233a52",
    fontSize: 15,
    textDecoration: "none",
  },

  /* Form card */
  formCard: {
    background: "#ffffff",
    borderRadius: 12,
    padding: 28,
    boxShadow: "0 6px 22px rgba(31, 111, 191, 0.06)",
  },
  formTitle: {
    margin: 0,
    fontSize: 22,
    color: "#1f4f7a",
  },
  formSubtitle: {
    marginTop: 8,
    marginBottom: 18,
    color: "#6b7b85",
    fontSize: 14,
  },
  toast: {
    background: "#eef7ee",
    color: "#1f6f3a",
    padding: "10px 14px",
    borderRadius: 8,
    marginBottom: 14,
    fontWeight: 600,
  },

  label: {
    display: "block",
    marginBottom: 12,
    fontSize: 14,
    color: "#344955",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 8,
    border: "1px solid #e6eef6",
    fontSize: 15,
    marginTop: 8,
    outline: "none",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 8,
    border: "1px solid #e6eef6",
    fontSize: 15,
    marginTop: 8,
    resize: "vertical",
    minHeight: 140,
    boxSizing: "border-box",
  },
  error: {
    marginTop: 8,
    color: "#c14444",
    fontSize: 13,
  },
  row: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    marginTop: 8,
  },
  submit: {
    border: "none",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 15,
  },
  reset: {
    border: "1px solid #dbeaf9",
    background: "#fff",
    padding: "10px 16px",
    borderRadius: 8,
    color: "#1f4f7a",
    cursor: "pointer",
    fontWeight: 600,
  },

  /* Responsive */
  "@media (max-width: 920px)": {
    wrapper: {
      gridTemplateColumns: "1fr",
    },
  },
};

/* Small responsive helper — injected inline because we're using CSS-in-JS:
   Adapt wrapper to single column on narrow viewports. */
(function injectResponsive() {
  if (typeof window === "undefined") return;
  const css = `
    @media (max-width: 920px) {
      .contact-wrapper-responsive { grid-template-columns: 1fr !important; }
    }
  `;
  const s = document.createElement("style");
  s.appendChild(document.createTextNode(css));
  document.head.appendChild(s);
})();
