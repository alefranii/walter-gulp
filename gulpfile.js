/*dependencias*/
var gulp = require ('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

/*configuracion de la tarea 'walter' */
gulp.task('walter',function() {
	gulp.src('assets/js/*.js')
	.pipe(concat('todo.js'))
	.pipe(uglify())
	.pipe(gulp.dest('js/build'))
});