import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Тот самый',
    template: 'index.html',
      favicon: './public/favicon.png',
  },
  output: {
    // Указываем базовый путь для всех ресурсов
    assetPrefix: 'https://life-awesome.github.io/tot-samyy-tattoo/',

    // Настройка путей выходных файлов
    distPath: {
      root: 'dist',
      js: 'static/js',
      css: 'static/css',
    },

    // Имена файлов с hash
    filename: {
      js: '[name].[contenthash:8].js',
      css: '[name].[contenthash:8].css',
      image: '[name].[hash:8].[ext]',
    },
  },
});
