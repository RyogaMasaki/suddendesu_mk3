var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('process_sass', function() {
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('process_js', function () {
	gulp.src(['js/**/*.js', '!js/advert.js'])
		.pipe(concat('suddendesu.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
	gulp.src(['js/greetz', 'dist/js/suddendesu.min.js'])
		.pipe(concat('suddendesu.min.js'))
		.pipe(gulp.dest('dist/js'));
	return gulp.src('js/advert.js')
		.pipe(gulp.dest('dist/js'));
});

gulp.task('build', ['process_sass','process_js'], function() {
	gulp.src('twig/**/*.twig')
		.pipe(gulp.dest('dist/twig'));

	gulp.src('img/**/*')
		.pipe(gulp.dest('dist/img'));

	gulp.src('fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	return gulp.src('theme.yml')
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['process_sass'], function() {
	gulp.watch('scss/**/*.scss', ['process_sass']);

});
