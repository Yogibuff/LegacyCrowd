var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    concat = require('gulp-concat'),
    print = require('gulp-print');

var server = 'app.js';  

var libraries = [
  'client/bower_components/angular/angular.min.js',
  'client/bower_components/angular-route/angular-route.min.js'
];
var angular = [
  'client/app/**/*.module.js',
  'client/app/**/*.js'
];

// check for modifications within client folder, when changes occur run 'build' task
gulp.watch(['client/**/*.js', 'client/app/views/*.html', 'client/css/*.css', 'client/images/*'], ['build']);

// Run Node server, rebuilds any watched files that change
gulp.task('default', function() {
  nodemon({
    script: server,
  }).on('start', ['build']);
});

// concat angular files into all.js
gulp.task('angular', function() {
  return gulp.src('client/app/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/app'));
});

// send all angular views (html files within the client folder) to /public
gulp.task('views', function() {
  return gulp.src('client/app/**/*.html')
    .pipe(gulp.dest('public/app'));
});

// send CSS to /public/css
gulp.task('css', function() {
  return gulp.src('client/css/*.css')
    .pipe(gulp.dest('public/css'));
});

// send Images to /public/images
gulp.task('images', function() {
  return gulp.src('client/images/*/*')
    .pipe(gulp.dest('public/images'));
});

// concat node_modules into vendor.js within /public
gulp.task('concat', function() {
  return gulp.src(libraries) 
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/'));
});

// build the index.html page using angular html files, the angular library, and all other libraries
gulp.task('build', ['angular', 'views', 'css', 'images', 'concat'], function() {
  console.log('Server running on port 3000. Gulp checked for client-side changes.');
  return gulp.src(['client/index.html'])
    .pipe(gulp.dest('public/'));
});