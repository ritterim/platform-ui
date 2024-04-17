import path from 'node:path';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  build: {
    minify: true,
    css: {
      postcss: {
        plugins: [autoprefixer]
      }
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.ts')
      },
      // @ts-ignore
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'platform-ui.min.css';
          return assetInfo.name;
        },
      }
    },
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'PLATFORM_UI',
      fileName: (format) => `platform-ui.${format}.js`
    }
  }
});
