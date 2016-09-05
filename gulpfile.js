var gulp = require('gulp');
var gulpPug = require('gulp-pug');
var gulpStylus = require('gulp-stylus');

gulp.task('views', function buildHTML() {
    return gulp.src('views/*.pug')
        .pipe(gulpPug()).pipe(gulp.dest('dist'));

});

gulp.task('styleSheets',function () {
    return gulp.src('styles/*.styl')
        .pipe(gulpStylus()).pipe(gulp.dest('dist'));
});

gulp.task('default', ['views','styleSheets']);