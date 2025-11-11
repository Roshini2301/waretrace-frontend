import axios from 'axios';

const BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000';

export async function signup({ name, email, password }) {
  try {
    const res = await axios.post(`${BASE}/api/auth/signup`, { name, email, password });
    return res.data;
  } catch (err) {
    return { message: err?.response?.data?.message || 'Signup failed' };
  }
}

export async function login({ email, password }) {
  try {
    const res = await axios.post(`${BASE}/api/auth/login`, { email, password });
    return res.data;
  } catch (err) {
    return { message: err?.response?.data?.message || 'Login failed' };
  }
}

export async function getMe(token) {
  try {
    const res = await axios.get(`${BASE}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (err) {
    return { message: err?.response?.data?.message || 'Failed' };
  }
}
