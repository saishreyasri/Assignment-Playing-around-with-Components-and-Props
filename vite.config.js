import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or '@vitejs/plugin-vue' for Vue projects
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(), // or vue()
    viteImagemin({
      // Configuration for image optimization (optional)
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80, // Ad
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
          {
            removeEmptyAttrs: false,
          },
        ],
      },
    }),
  ],
  assetsInclude: ['**/*.JPG', '**/*.jpg'], // Add this line to include image files
});