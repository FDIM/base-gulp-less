"use strict";

var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();


gulp.task('build-less', function () {
    return gulp.src("./less/**/*.main.less")
		.pipe(less())
		.pipe(rename(function(path){
			path.basename = path.basename.replace('.main','');
		}))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
})

gulp.task('serve',['build-less'], function(){
    browserSync.init({
        server: "./"
    });
  
    gulp.watch("./*.html").on('change', browserSync.reload);
  
    gulp.watch('less/**/*', ['build-less']);
});

gulp.task('watch',['build-less'], function(){
    gulp.watch('less/**/*', ['build-less']);
});