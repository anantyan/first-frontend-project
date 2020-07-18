var
  gulp = require('gulp'),
  gulpSass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  runSequence = require('run-sequence')
;

gulp.task('css', function() {
  return gulp.src('./source/assets/scss/**/*.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('./public/assets/css'))
});

gulp.task('js', function() {
  return gulp.src('./source/assets/js/**/*.js')
    .pipe(gulp.dest('./public/assets/js'))
});

gulp.task('sync', function() {
  browserSync.init({
    server:{
      baseDir:"./public/"
    }
  })
  gulp.watch('./source/assets/scss/**/*.scss',['css']);
  gulp.watch('./source/assets/js/**/*.js',['js']);

  gulp.watch('./public/assets/css/**/*.css').on('change',browserSync.reload);
  gulp.watch('./public/assets/js/**/*.js').on('change',browserSync.reload);
  gulp.watch('./public/*.html').on('change',browserSync.reload);
});

gulp.task('run', function() {
  runSequence(
    'css',
    'js',
    'sync'
  )
});