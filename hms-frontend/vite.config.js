import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth": "http://localhost:8080",
      "/admin": "http://localhost:8080",
      "/doctor": "http://localhost:8080",
      "/patient": "http://localhost:8080"
    }
  }
});