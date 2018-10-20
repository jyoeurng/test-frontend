var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var htmlreplace = require('gulp-html-replace');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
sass.compiler = require('node-sass');

// Compile css
gulp.task('sass', function () {
    return gulp.src('./src/scss/style.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./src/css'));
});

// Listen event from scss files
gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/*.scss', ['sass']);
});

// Minify css
gulp.task('minify-css', function () {
    return gulp.src(['./src/css/bootstrap.css', './src/css/fontawesome.css', './src/css/style.css'])
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(concat('main.css'))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./dist/css'));
});

// Minify js
gulp.task('minify-js', function () {
    return gulp.src(['./src/bootstrap.js', './src/js/script.js'])
            .pipe(uglify())
            .pipe(concat('main.js'))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./dist/js'));
});

// Move image to dist
gulp.task('move-img', function () {
    return gulp.src("./src/img/**.*")
            .pipe(gulp.dest('./dist/img'));
});

// Move font to dist
gulp.task('move-font', function () {
    return gulp.src("./src/fonts/**.*")
            .pipe(gulp.dest('./dist/fonts'));
});

// Put css and js in html
gulp.task('default', ['sass', 'minify-css', 'minify-js', 'move-img', 'move-font'], function () {
    return gulp.src('./src/index.html')
            .pipe(htmlreplace({
                'css': 'css/main.min.css',
                'js': 'js/main.min.js'
            }))
            .pipe(gulp.dest('dist/'));
});