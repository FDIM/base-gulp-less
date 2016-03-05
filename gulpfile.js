"use strict";

var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');

gulp.task('build-less', function () {
    return gulp.src("./less/**/*.main.less")
		.pipe(less())
		.pipe(rename(function(path){
			path.basename = path.basename.replace('.main','');
		}))
        .pipe(gulp.dest('./css'));
})

gulp.task('watch',['build-less'], function(){
    gulp.watch('less/**/*', ['build-less']);
});