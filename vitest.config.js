import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // für React-Tests
    globals: true, // erlaubt describe(), expect() global
    include: ["tests/**/*.test.js?(x)"], // oder dein Wunschpfad
    setupFiles: "./tests/setup.js",
  },
});
