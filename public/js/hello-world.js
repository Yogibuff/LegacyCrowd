// Hello World test directive
angular.module('legacyCrowdApp')
.directive('helloWorld', function() {
  return {
    template: "This is the directive for the top of the site." + " " +
    "Insert Landing Page image, navbar, and content within this directive."
  };
});