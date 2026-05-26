import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: (() => {
    const coverage: any = {
      // Use a provider compatible with the installed Vitest types.
      provider: "v8",
      reporter: ["text", "lcov"],
      all: true,
      include: ["components/**/*.{ts,tsx}"],
    };

    return {
      environment: "jsdom",
      setupFiles: "./test/setup.ts",
      exclude: ["e2e/**"],
      include: ["components/**/*.test.{ts,tsx}"],
      globals: true,
      coverage,
    };
  })(),
});
