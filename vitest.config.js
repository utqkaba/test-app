import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // React Testing Library için gerekli
    globals: true, // test(), expect() global olarak tanınsın
    setupFiles: "./src/setupTests.js", // opsiyonel (RTL için)
  },
});
