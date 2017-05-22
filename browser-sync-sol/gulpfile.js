var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var webappUrl = 'http://helloworld.local/';
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
      proxy: webappUrl,
      open: 'external'
    });
});

gulp.task('default', ['browser-sync'], function () {

});
