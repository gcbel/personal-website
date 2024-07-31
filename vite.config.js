/* DEPENDENCIES */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/* EXPORT */
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
