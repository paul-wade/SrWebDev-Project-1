var gulp = require('gulp');
var gulpPug = require('gulp-pug');
var gulpStylus = require('gulp-stylus');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('views', function () {
    return gulp.src(['views/*.pug', '!views/layout.pug'])
        .pipe(gulpPug()).pipe(gulp.dest('dist'));
});

gulp.task('styleSheets', function () {
    return gulp.src('styles/*.styl')
        .pipe(gulpStylus())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('vendor', function () {
    return gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('lint', function () {
    return gulp.src(['js/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('test', function () {
    return gulp.src('./tests/*.spec.js').pipe(mocha());
});

gulp.task('scripts', function () {
    return gulp.src('js/*.js')
        .pipe(concat('app.js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['views', 'styleSheets', 'vendor', 'lint', 'test', 'scripts']);