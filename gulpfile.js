var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    concat = require('gulp-concat'),
    print = require('gulp-print');

var server = 'server/app.js';  

var libraries = [
  'client/bower_components/angular/angular.min.js',
  'client/bower_components/angular-route/angular-route.min.js'
];
var angular = [
  'client/app/**/*.module.js',
  'client/app/**/*.js'
];

// check for modifications within client folder, when changes occur run 'build' task
gulp.watch(['client/**/.js', 'client/*.html'], ['build']);

// Test Node server, checks the server is running
gulp.task('default', function() {
  nodemon({
    script: server,
  }).on('start', function(){
    console.log('Server running on port 3000. Gulp checked for client-side changes.');
  });
});

// concat angular files into all.js
gulp.task('angular', function() {
  return gulp.src(angular)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('server/public'));
});

// send all angular views (html files within the client folder) to server/public
gulp.task('views', function() {
  return gulp.src('client/**/*.html')
    .pipe(gulp.dest('server/public'));
});

// concat node_modules into vendor.js within server/public
gulp.task('concat', function() {
  return gulp.src(libraries) 
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('server/public'));
});

// build the index.html page using angular html files, the angular library, and all other libraries
gulp.task('build', ['angular', 'views', 'concat'], function() {
  return gulp.src(['client/index.html'])
    .pipe(gulp.dest('server/public'));
});