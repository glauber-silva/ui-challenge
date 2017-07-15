var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin');

    gulp.task('js', function(){
        gulp.src('src/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
    });

    gulp.task('css', function(){
        gulp.src('src/**/*.css')
        .pipe(minify())
        .pipe(gulp.dest('dist'));
    });

    gulp.task('images', function(){
        gulp.src('src/**/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist'));
    });

    gulp.task('default', ['js', 'css', 'images']);