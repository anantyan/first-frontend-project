// script memanggil source npm
var
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    obfuscator = require('gulp-javascript-obfuscator'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence')
;

// script untuk compiler css
gulp.task('css', function() {
    return gulp.src('./source/assets/css/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers:['> 1%'],
        cascade:false
    }))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./public/assets/css'))
});

// script untuk compiler js
gulp.task('js', function() {
    return gulp.src('./source/assets/js/**/*.js')
    .pipe(obfuscator({
        compact:true,
        sourceMap:true,
        stringArray:true,
        stringArrayEncoding:true,
        target:"browser"
    }))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./public/assets/js'))
});

// script untuk menjalankan browser-sync & output compiler css, js
gulp.task('sync', function() {
    browserSync.init({
        server:{
        baseDir:"./public/"
        }
    })
  
    // script watch gulpjs
    gulp.watch('./source/assets/css/**/*.css',['scss']);
    gulp.watch('./source/assets/js/**/*.js',['js']);

    gulp.watch('./public/assets/css/**/*.css').on('change',browserSync.reload);
    gulp.watch('./public/assets/js/**/*.js').on('change',browserSync.reload);
    gulp.watch('./public/*.html').on('change',browserSync.reload);
});

// script untuk menjalankan
gulp.task('run', function() {
    runSequence(
        'css',
        'js',
        'sync'
    )
});