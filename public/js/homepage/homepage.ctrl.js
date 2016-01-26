// inject homepage content into index.html
angular.module('legacyCrowdApp')
.directive('hompage', function() {
  return {
    template: "<div ng-view>" + "</div>" + "<h4>This is the directive for the top of the site.<h4>" + " " +
    "<h5>Insert Landing Page image, navbar, and content within this directive.</h5>"
  };
});