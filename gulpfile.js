//imports
const gulp = require('gulp');
const cond = require('gulp-cond');
const eslint = require('gulp-eslint');
const inserLines = require('gulp-insert-lines');
const mocha = require('gulp-mocha');
const nodemon = require('gulp-nodemon');
const gutil = require('gulp-util');

//other libraries
const del = require('del');
const runSequence = require('run-sequence');
const webpack = require('webpack-stream');
const {argv} = require('yargs');
require('babel-core/register');

if(argv.prod){
    process.env.NODE_ENV = 'production';
}

let PROD = process.env.NODE_ENV === 'production';

//configuration
const src = 'src';
const config = {
    port: PROD ? 8080 : 3000,
    paths:{
        dir: PROD ? 'build' : 'dist',
        html: './public/index.html',
        js: src + '/**/*.js',
        entry: src + '/index.js',
        test: src + '/**/*.test.js'
    }
};


/******
 * TASKS
 ******/

 //clear contents of build and dist
 gulp.task('clean', ()=>{
     return del(['dist/**/*', 'build/**/*']);
 });

 //Linting
 gulp.task('lint',()=>{
     return gulp.src(config.paths.js)
     .pipe(eslint())
     .pipe(eslint.format())
 });

 //unit test runner
 /*
 gulp.task('test', () => {
     return gulp.src(config.paths.test, {read:false})
     .pipe(mocha());
 });
*/

//run server
gulp.task('server', ()=> {
    nodemon({
        script:'server.js'
    })
});

//tasks to run when certain files are changed
gulp.task('watch', () => {
    gulp.watch(config.paths.js, () => {
        runSequence('lint','test');
    });
});

/*
*copie html file from public folder to either the dist or build folder, 
*depending on the mode enviroment
*/
gulp.task('html', ()=>{
    return gulpp.src(config.paths.html)
    .pipe(cond(PROD, insertLines({
        before: /<\/head>$/,
        'lineBefore': '<link rel="stylesheet" href="bundle.css"/>'
    })))
    .pipe(gulp.dest(config.paths.dir));
});

/*
* build the entire web app into either the dist or build folder, 
* depending on the node enviroment
*/
gulp.task('build', () => {
    runSequence('clean', 'html');

    return gulp.src(config.paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(config.paths.dir));
});

/*
* default task , bundles the entire app and hosts it on an Express server
*/
gulp.task('default', (cb) => {
    runSequence('lint', /*'test',*/ 'build', 'server', 'watch', cb);
});