// inisialisasi variabel
var 
  gulp = require('gulp'),
  // sass = require('gulp-sass'),
  // csso = require('gulp-csso'),
  // uglify = require('gulp-uglify'),
  runSequence = require('run-sequence'),
  browserSync = require('browser-sync')
;

// css
gulp.task('css', function(){
  return gulp.src('./resource/assets/css/**/*.css')
  // .pipe(sass())
  // .pipe(csso())
  .pipe(gulp.dest('./public/assets/css'))
});

// js
gulp.task('js', function(){
  return gulp.src('./resource/assets/js/**/*.js')
  // .pipe(uglify())
  .pipe(gulp.dest('./public/assets/js'))
});

// sync
gulp.task('sync', function() {
  browserSync.init({
    server:{
      baseDir:"./public/"
    }
  })
  gulp.watch('./reource/assets/css/**/*.css',['css']);
  gulp.watch('./resource/assets/js/**/*.js',['js']);

  gulp.watch('./public/assets/css/**/*.css').on('change',browserSync.reload);
  gulp.watch('./public/assets/js/**/*.js').on('change',browserSync.reload);
  gulp.watch('./public/*.html').on('change',browserSync.reload);
});

// package
gulp.task('run', function () {
  runSequence(
    'css',
    'js',
    'sync'
  );
});