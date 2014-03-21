// include gulp.
var gulp = require('gulp');

// include plugins.
var connect = require('gulp-connect'),
    sass = require('gulp-ruby-sass');

// spins up a local web server
gulp.task('connect', connect.server({
    root: ['src'],
    host: '*'
}));

// compiles Sass into CSS.
gulp.task('styles', function () {
    gulp.src('src/css/styles.scss')
        .pipe(sass({ sourcemap: false }))
        .pipe(gulp.dest('src/css/'));
});

// set up files that should be watched for changes that trigger a task to run.
gulp.task('watch', function() {
    // changes to Sass files should run the Sass to CSS compilation task
    gulp.watch('src/css/**/*.scss', ['styles']);
});

// default task is to be used when developing.
gulp.task('default', ['styles', 'connect', 'watch']);
