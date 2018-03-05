'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    browserSync.init(['*.html', './static/**/*'], {
        server: {
            baseDir: './'
        },
        port: 4000,
        ui: {
            port: 4001
        }
    });
});


gulp.task('default', ['browser-sync'], function () {
    gulp.watch('./static/**/*');
});