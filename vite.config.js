import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detect if running on Vercel
const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  plugins: [react()],
  base: isVercel ? "/" : "/waretrace-frontend/", 
});
