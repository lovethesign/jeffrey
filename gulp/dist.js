/**
 *
 *
 *
 *  DISTRIBUTION TASKS
 *
 *
 *
 */
var pkg = require('../package.json');
var path = require('path');
var rimraf = require('rimraf');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var helper = require('./util/helper');


// build and copy the result in the official versioned distribution folder (dist)
gulp.task('dist', function (done) {
    return runSequence('lint', 'dist:build', 'dist:clean-dist', 'dist:copy-dist', done);
});

// build all distribution artifacts in a tmp folder
gulp.task('dist:build', function (done) {
    return runSequence('dist:clean', ['dist:styles', 'dist:styles:src'], done);
});

gulp.task('dist:copy-dist', function () {
    return gulp.src(path.join('.tmp/dist', '/**/*'))
        .pipe(gulp.dest('dist'));
});

gulp.task('dist:clean-dist', function (done) {
    return rimraf('dist', done);
});

gulp.task('dist:clean', function (done) {
    return rimraf('.tmp/dist', done);
});

gulp.task('dist:styles', function () {
    return gulp.src('./src/styles/index.scss')
        .pipe(helper.sass())
        .pipe(autoprefixer('last 2 version'))
        .pipe(rename(pkg.name + '.css'))
        .pipe(gulp.dest(path.join('.tmp/dist', 'css')))
        // minified
        .pipe(rename(pkg.name + '.min.css'))
        .pipe(csso())
        .pipe(gulp.dest(path.join('.tmp/dist', 'css')));
});

gulp.task('dist:styles:src', function () {
    return gulp.src(['./src/styles/**/*', '!src/styles/index.scss'])
        .pipe(gulp.dest(path.join('./.tmp/dist', 'sass')));
});