import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
    css: true,
    // ✅ Coverage ayarları
    coverage: {
      provider: "v8", // veya "istanbul" da kullanılabilir
      reporter: ["text", "html"], // terminal + HTML raporu
      reportsDirectory: "./coverage", // çıktılar buraya yazılır
      exclude: ["src/setupTests.js"], // bu dosyayı kapsama dışı bırak
    },
  },
});
