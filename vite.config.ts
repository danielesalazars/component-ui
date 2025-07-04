import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const isProd = env.VITE_STAGE_MOD === 'prod';

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      federation({
        name: 'microfront',
        filename: 'remoteEntry.js',
        exposes: {
          './ComponentUIRemote': './src/App.tsx',
        },
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
          'react-router-dom': { singleton: true },
        },
      }),
    ],
    server: {
      port: 3100,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    build: {
      target: 'esnext',
      minify: isProd ? 'esbuild' : false, //false = No Minifica; true = Minifica;,
      cssCodeSplit: isProd, //true = separa CSS por modulos; false = unifica todo en un solo archivo CSS;
      sourcemap: !isProd,
      modulePreload: {
        polyfill: false,
      },
      rollupOptions: {
        output: {
          format: 'esm',
        },
      },
      commonjsOptions: {},
    },
    esbuild: isProd
      ? {
          drop: ['console', 'debugger'], // Solo elimina logs en producción
        }
      : undefined,
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        reporter: ['text', 'json', 'html'],
        exclude: ['node_modules/', 'dist/', '**/*.d.ts'],
      },
    },
  };
});
