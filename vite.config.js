import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change the "base" to your repo name when deploying to GitHub Pages
// Example: https://username.github.io/repo-name/
export default defineConfig({
  plugins: [react()],
  base: "waretrace-frontend", 
});
