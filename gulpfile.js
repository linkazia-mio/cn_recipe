var gulp = require('gulp');
var sass = require('gulp-sass');

//gulp sass
gulp.task('sass', function() {
    gulp.src('_scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
});

//Watch task
gulp.task('watch', ['sass'], function(){
    gulp.watch('_scss/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
