var gulp = require('gulp'),
	exec = require('child_process').exec;

gulp.task('default', ['jekyll-watch'], function() {
  
});

gulp.task('dist', ['jekyll-build'])

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