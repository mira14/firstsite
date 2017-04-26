var gulp=require("gulp"),
	connect=require("gulp-connect"),
	opn=require("opn");
//local server

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port:8888
  });
  opn('http://localhost:8888');
});
 //work with html
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./app/css*.css')
    .pipe(connect.reload());
});
 //slegka
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css*.css'], ['css']);
});
 
gulp.task('default', ['connect', 'watch']);