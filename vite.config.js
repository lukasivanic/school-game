import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: "jsx",
      // enable type checking for .jsx files
      // you can also add other file extensions here
      // such as .tsx, .ts, etc.
      enableJsx: true,
    },
    react(),
  ],
});
