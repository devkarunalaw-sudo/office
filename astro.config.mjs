import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://karunalaw.ca",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
