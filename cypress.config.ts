import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3002',
    // env: {
    //   backendUrl: "http://localhost:8000"
    // },
  },
  // component: {
    // настройки для запуска компонентов React с помощью Webpack
    // devServer: {
    //   framework: 'react',
    //   bundler: 'webpack',
    // },
  // },
});
