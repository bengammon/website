// include gulp.
var gulp = require('gulp');

// include plugins.
var connect = require('gulp-connect');

// spins up a local web server
gulp.task('connect', connect.server({
    root: ['src'],
    host: '*'
}));

// default task is to be used when developing.
gulp.task('default', ['connect']);
