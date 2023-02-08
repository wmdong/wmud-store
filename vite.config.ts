import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      "@": "src",
      "@style": "src/static/style",
      // "@image": "src/static/image",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@style/common.scss";`
      }
    }
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: false,
      },
    },
  },
});
