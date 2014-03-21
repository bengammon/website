// include gulp.
var gulp = require('gulp');

// include plugins.
var prefix = require('gulp-autoprefixer'),
    sass = require('gulp-ruby-sass'),
    exec = require('child_process').exec;

// compiles Sass into CSS.
gulp.task('styles', function () {
    gulp.src('src/css/styles.scss')
        .pipe(sass({ sourcemap: false }))
        .pipe(prefix('last 1 version', '> 1%', 'ie 8'))
        .pipe(gulp.dest('src/css/'));

    gulp.src('src/css/guide.scss')
        .pipe(sass({ sourcemap: false }))
        .pipe(prefix('last 1 version', '> 1%', 'ie 8'))
        .pipe(gulp.dest('src/css/'));
});

// set up files that should be watched for changes that trigger a task to run.
gulp.task('watch', ['jekyll-watch'], function() {
    // changes to Sass files should run the Sass to CSS compilation task
    gulp.watch('src/css/**/*.scss', ['styles']);
});

// default task is to be used when developing.
gulp.task('default', ['styles', 'watch']);

gulp.task('dist', ['styles', 'jekyll-build'])

gulp.task('jekyll-build', function () {
    return exec('jekyll build -d dist', function (err, stdout, stderr) {
        console.log(stdout);
    });
});

gulp.task('jekyll-watch', function () {
    return exec('jekyll serve -w --drafts --future', function (err, stdout, stderr) {
        console.log(stdout);
    });
});
