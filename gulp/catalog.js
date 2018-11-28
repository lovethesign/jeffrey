/**
 *
 *
 *
 *  DISTRIBUTION TASKS
 *
 *
 *
 */
var path = require('path');
var rimraf = require('rimraf');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var helper = require('./util/helper');


// build and copy the result in the official versioned distribution folder (dist)
gulp.task('catalog', function (done) {
    return runSequence('lint', 'catalog:build', 'catalog:clean-dist', 'catalog:copy-dist', done);
});

// build all distribution artifacts in a tmp folder
gulp.task('catalog:build', function (done) {
    return runSequence('catalog:clean', ['catalog:styles'], done);
});

gulp.task('catalog:clean-dist', function (done) {
    return rimraf('dist', done);
});

gulp.task('catalog:copy-dist', function () {
    return gulp.src(path.join('.tmp/catalog', '/**/*'))
        .pipe(gulp.dest('catalog/build/'));
});

gulp.task('catalog:clean', function (done) {
    return rimraf('.tmp/catalog', done);
});

gulp.task('catalog:styles', function () {
    return gulp.src('./src/styles/jeffrey.scss')
        .pipe(helper.sass())
        .pipe(autoprefixer('last 2 version'))
        .pipe(rename('jeffrey' + '.css'))
        .pipe(gulp.dest(path.join('.tmp/catalog', 'css')))
        // minified
        //.pipe(rename('jeffrey' + '.min.css'))
        .pipe(csso())
        .pipe(gulp.dest(path.join('.tmp/catalog', 'css')));
});

// gulp.task('catalog:styles:src', function () {
//     return gulp.src(['./src/styles/**/*', '!src/styles/index.scss'])
//         .pipe(gulp.dest(path.join('./.tmp/catalog', 'sass')));
// });