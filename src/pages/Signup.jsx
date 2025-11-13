import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setSuccess("");

    try {
      const res = await fetch("https://waretrace-backend.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // ✅ Do NOT auto-login — show success and redirect to login
      setSuccess("Account created successfully! Please log in.");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setErr(error.message || "Something went wrong.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Join our platform today</p>

        {err && <div style={styles.error}>{err}</div>}
        {success && <div style={styles.success}>{success}</div>}

        <form onSubmit={submit} style={styles.form}>
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>

        <p style={styles.switchText}>
          Already have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #bbdefb, #e3f2fd)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Inter', sans-serif",
  },
  card: {
    background: "#fff",
    padding: "45px 40px",
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  title: {
    fontSize: "26px",
    fontWeight: "600",
    color: "#0d47a1",
    marginBottom: "5px",
  },
  subtitle: {
    color: "#607d8b",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    transition: "border 0.3s",
  },
  button: {
    background: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "5px",
    transition: "background 0.3s, transform 0.2s",
  },
  error: {
    background: "#ffebee",
    color: "#d32f2f",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
    fontWeight: "500",
  },
  success: {
    background: "#e8f5e9",
    color: "#2e7d32",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
    fontWeight: "500",
  },
  switchText: {
    marginTop: "18px",
    color: "#546e7a",
    fontSize: "14px",
  },
  link: {
    color: "#1976d2",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
