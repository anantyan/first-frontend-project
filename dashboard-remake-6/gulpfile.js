// script memanggil source npm
var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer'),
    obfuscator = require('gulp-javascript-obfuscator'),
    browserSync = require('browser-sync'),
    // uncss = require('postcss-uncss'),
    runSequence = require('run-sequence');

// script untuk compiler css
gulp.task('css', function () {
  return gulp.src('./source/assets/css/**/*.css')
    .pipe(postcss([
      precss(),
      autoprefixer(),
      // uncss({
      //   html: ['*.html','public/*.html']
      // })
    ]))
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./public/assets/css'))
});

// script untuk compiler js
gulp.task('js', function () {
  return gulp.src('./source/assets/js/**/*.js')
    .pipe(obfuscator({
      "compact": true,
      "controlFlowFlattening": true,
      "controlFlowFlatteningThreshold": 0.75,
      "deadCodeInjection": true,
      "deadCodeInjectionThreshold": 0.4,
      "debugProtection": false,
      "debugProtectionInterval": false,
      "disableConsoleOutput": true,
      "identifierNamesGenerator": 'hexadecimal',
      "log": false,
      "renameGlobals": false,
      "rotateStringArray": true,
      "selfDefending": true,
      "stringArray": true,
      "stringArrayEncoding": 'base64',
      "stringArrayThreshold": 0.75,
      "transformObjectKeys": true,
      "unicodeEscapeSequence": false
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./public/assets/js'))
});

// script untuk menjalankan browser-sync & output compiler css, js
gulp.task('sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })

  // script watch gulpjs
  gulp.watch('./source/assets/css/**/*.css', ['css']);
  gulp.watch('./source/assets/js/**/*.js', ['js']);

  gulp.watch('./public/assets/css/**/*.css').on('change',browserSync.reload);
  gulp.watch('./public/assets/js/**/*.js').on('change',browserSync.reload);
  gulp.watch('./public/*.html').on('change',browserSync.reload);
});

// script untuk menjalankan
gulp.task('compile', function () {
  runSequence(
    'css',
    'js',
    'sync'
  )
});