// injects homepage content into index.html
var legacy = angular.module('legacyCrowdApp');
legacy.controller('homepageCtrl', function() {
  vm = this;
  vm.header = "h3>Crowdfunded Capital for the Future</h3>" +
    "<br>" +
    "<h1>Invest Ahead of the Curve</h1>";
});

legacy.directive('homepage', function() {
  return {
    template: "<div ng-view>" + "</div>" + "<h4>This is the directive for the top of the site.<h4>" + " " +
    "<h5>Insert Landing Page image, navbar, and content within this directive.</h5>"
  };
});