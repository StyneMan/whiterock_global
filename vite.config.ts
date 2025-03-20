import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { ViteSitemap } from "vite-plugin-sitemap";
// import { createHtmlPlugin } from "vite-plugin-html";
// import { viteSSG } from 'vite-ssg/serialized-data';

const routes = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteSSG({ includedRoutes: () => routes }),
    // ViteSitemap({
    //   baseUrl: "https://yourdomain.com",
    //   routes,
    //   generateRobotsTxt: true,
    // }),
    // createHtmlPlugin({
    //   minify: true,
    //   inject: {
    //     data: {
    //       title: "Default Title",
    //       description: "Default Description",
    //     },
    //   },
    // }), 
  ],
});
