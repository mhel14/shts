const { src, dest, task, watch, series } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const minifyCSS = require('gulp-clean-css');

const sass_src = './src/assets/styles/scss/**/*.scss';
const sass_dest = './src/assets/styles/css';

task('sass', () => (
  src(sass_src)
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(rename({suffix: '.min'}))
  // .pipe(changed(sass_dest))
  .pipe(dest(sass_dest))
));

// task('watch_scss', () => (
//   watch(sass_src, ['sass'])
// ));

task('default',function(){
  watch([sass_src, './src/assets/styles/scss/*.scss'], series('sass'));
});