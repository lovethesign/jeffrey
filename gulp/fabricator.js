const gulp = require('gulp');
var assemble = require('fabricator-assemble');
const gutil = require('gulp-util');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const named = require('vinyl-named');

const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var imagemin = require('gulp-imagemin');

const webpack = require('webpack-stream');
const webpackConfig = require('../webpack.config.js');

const config = {
	dev: gutil.env.dev,
	src: {
		scripts: {
			fabricator: './fabricator/assets/fabricator/scripts/fabricator.js',
			toolkit: './fabricator/assets/toolkit/scripts/toolkit.js',
			common: './fabricator/assets'
		},
		styles: {
			fabricator: 'fabricator/assets/fabricator/styles/fabricator.scss',
			toolkit: 'fabricator/assets/toolkit/styles/toolkit.scss'
		},
		images: 'fabricator/assets/toolkit/images/**/*',
		views: 'fabricator/toolkit/views/*.html'
	},
	dest: 'docs'
};

gulp.task('clean', function () {
	return gulp.src(config.dest, {read: false})
		.pipe(clean({force: true}));
});

gulp.task('scripts', function() {
    return gulp.src(`${config.src.scripts.common}/*/*/*.js`)
        .pipe(named())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(`${config.dest}/assets/scripts`))
});

gulp.task('styles:fabricator', function () {
	gulp.src(config.src.styles.fabricator)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix('last 1 version'))
		.pipe(gulpif(!config.dev, csso()))
		.pipe(rename('f.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dest + '/assets/fabricator/styles'))
		.pipe(gulpif(config.dev, reload({stream:true})));
});

gulp.task('styles:toolkit', function () {
	gulp.src(config.src.styles.toolkit)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix('last 1 version'))
		.pipe(gulpif(!config.dev, csso()))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dest + '/assets/toolkit/styles'))
		.pipe(gulpif(config.dev, reload({stream:true})));
});

gulp.task('images', ['favicon'], function () {
	return gulp.src(config.src.images)
		.pipe(imagemin())
		.pipe(gulp.dest(config.dest + '/assets/toolkit/images'));
});

gulp.task('favicon', function () {
	return gulp.src('./fabricator/favicon.ico')
		.pipe(gulp.dest(config.dest));
});

gulp.task('styles', ['styles:fabricator', 'styles:toolkit']);

// assemble
gulp.task('assemble', function (done) {
	assemble(
		{
			layout: 'default',
			layouts: 'fabricator/views/layouts/*',
			layoutIncludes: 'fabricator/views/layouts/includes/*',
			views: ['fabricator/views/**/*', '!fabricator/views/+(layouts)/**'],
			materials: 'fabricator/materials/**/*',
			data: 'fabricator/data/**/*.{json,yml}',
			docs: 'fabricator/docs/**/*.md',
			keys: {
				materials: 'materials',
				views: 'views',
				docs: 'docs'
			},
			helpers: {},
			logErrors: config.dev,
			onError: function(error) {},
			dest: 'docs'
	});
	done();
});

gulp.task('serve', function () {

	browserSync({
		server: {
			baseDir: config.dest
		},
		notify: false,
		logPrefix: 'FABRICATOR'
	});

	gulp.task('assemble:watch', ['assemble'], reload);
	gulp.watch('fabricator/**/*.{html,md,json,yml}', ['assemble:watch']);

	gulp.task('styles:fabricator:watch', ['styles:fabricator']);
	gulp.watch('fabricator/assets/fabricator/styles/**/*.scss', ['styles:fabricator:watch']);

	gulp.task('styles:toolkit:watch', ['styles:toolkit']);
	gulp.watch('fabricator/assets/toolkit/styles/**/*.scss', ['styles:toolkit:watch']);

	gulp.task('scripts:watch', ['scripts'], reload);
	gulp.watch('fabricator/assets/{fabricator,toolkit}/scripts/**/*.js', ['scripts:watch']);

	gulp.task('images:watch', ['images'], reload);
	gulp.watch(config.src.images, ['images:watch']);

});

gulp.task('fabricator', ['clean'], function(done) {
	const tasks = [
		'scripts',
		'styles',
		'images',
		'assemble',
		'serve'
	];

	runSequence(tasks, done);
});