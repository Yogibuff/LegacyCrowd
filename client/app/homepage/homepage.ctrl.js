// injects homepage content into index.html
var legacy = angular.module('legacyCrowdApp');
legacy.controller('homepageCtrl', function() {
  vm = this;
  // add logic and variables
});

legacy.directive('navbar', function() {
  return {
    template: 
    '<!-- BEGIN Navbar -->' +
    '<div id="nav-menu" class="navbar navbar-inverse" role="navigation">' +
     '<div class="container-fluid">' +
        '<div class="navbar-header">' +
          '<div class="navbar-brand hvr-bounce-to-top">' +
            '<a href="#"><img id="nav-logo" src="../../images/legacy-crowd-logo.png"></a>' +
          '</div>' +
          '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-dropdown">' +
            '<span class="sr-only">Toggle navigation</span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
          '</button>' +
        '</div>' +
        '<div class="collapse navbar-collapse navbar-dropdown">' +
          '<ul class="nav navbar-nav navbar-right">' +
            '<li>' +
              '<a href="#">Start Funding</a>' +
            '</li>' +
            '<li>' +
              '<a href="">Make Campaign</a>' +
            '</li>' +
            '<li>' +
              '<a href="">Active Campaigns</a>' +
            '</li>' +
            '<li>' +
              '<a href="">How It Works</a>' +
            '</li>' +
          '</ul>' +
        '</div> <!-- close .navbar-collapse -->' +
      '</div> <!-- close .container-fluid -->' +
    '</div> <!-- close .navbar -->'
  };
});

legacy.directive('header', function() {
  return {
    template: '<div id="header">' +
      '<h3 id="subtitle">Crowdfunded Capital for the Future</h3>' +
      '<br>' +
      '<h1 id="title">Invest Ahead of the Curve</h1>' +
      '<br>' +
      '<br>' +
      '<button id="learn-more">Learn More</button>' +
      '<button id="create-account">Create Account</button>' +
      '<br>' +
    '</div> <!-- close #header -->'
  };
});

legacy.directive('homepage', function() {
  return {
    template: '<div navbar>' + '</div>' + ' ' + '<div header>' + '</div>'
  };
});