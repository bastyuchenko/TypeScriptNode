/// <binding BeforeBuild='clean_node_modules' AfterBuild='add_node_modules' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var rimraf = require('rimraf');

gulp.task('clean_node_modules', function (cb) {
    return rimraf('./wwwroot/node_modules/', cb);
});

gulp.task('add_node_modules', function () {
    // place code for your default task here
    return gulp.src('node_modules/**/*').pipe(gulp.dest('./wwwroot/node_modules/'));
});