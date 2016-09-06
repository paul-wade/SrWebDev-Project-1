var gulp = require('gulp');
var gulpPug = require('gulp-pug');
var gulpStylus = require('gulp-stylus');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

gulp.task('views', function buildHTML() {
    return gulp.src('views/*.pug')
        .pipe(gulpPug()).pipe(gulp.dest('dist'));
});

gulp.task('styleSheets', function () {
    return gulp.src('styles/*.styl')
        .pipe(gulpStylus())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('lint', function () {
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('test', function () {
    return gulp.src('./tests/*.spec.js').pipe(mocha({reporter: 'nyan'}));
});

gulp.task('scripts', function () {
});

gulp.task('default', ['views', 'styleSheets', 'lint','test', 'scripts']);