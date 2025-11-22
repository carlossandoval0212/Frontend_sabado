import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Module Federation comentado temporalmente - descomentar cuando se instale @originjs/vite-plugin-federation
// import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    // Module Federation comentado temporalmente
    // federation({
    //   name: "equipo1",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./App": "./src/App.jsx",
    //   },
    //   shared: ["react", "react-dom", "react-router-dom"],
    // }),
  ],
  server: { 
    port: 5173,
    host: true
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

