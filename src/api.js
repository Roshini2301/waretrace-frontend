const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export function authHeaders() {
  const token = localStorage.getItem('token');
  return token ? { 'Authorization': 'Bearer ' + token } : {};
}

export async function signup(data) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function login(data) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function getStatus() {
  const res = await fetch(`${API_BASE}/cards/status`, {
    headers: { 'Content-Type': 'application/json', ...authHeaders() }
  });
  return res.json();
}

export async function getMissing() {
  const res = await fetch(`${API_BASE}/cards/status`, {
    headers: { 'Content-Type': 'application/json', ...authHeaders() }
  });
  return res.json();
}

export async function registerCard(payload) {
  const res = await fetch(`${API_BASE}/cards/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(payload)
  });
  return res.json();
}
