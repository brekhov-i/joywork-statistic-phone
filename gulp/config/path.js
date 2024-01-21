import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    jsWp: `${srcFolder}/js/*.js`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    scss: `${srcFolder}/scss/*.scss`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    vue: `${srcFolder}/js/vue/**/*.vue`
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    scss: `${srcFolder}/scss/**/*.scss`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    vue: `${srcFolder}/js/vue/**/*.vue`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ''
}

