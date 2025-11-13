import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://waretrace-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // ✅ Save token and user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ Notify header of login change
      window.dispatchEvent(new Event("authChange"));

      // ✅ Redirect to HOME (not scan)
      navigate("/");
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Sign in to your account</p>

        {err && <div style={styles.error}>{err}</div>}

        <form onSubmit={submit} style={styles.form}>
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Log In
          </button>
        </form>

        <p style={styles.switchText}>
          Don’t have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/signup")}>
            Create one
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
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
    maxWidth: "380px",
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
    background: "#e3f2fd",
    color: "#d32f2f",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
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
