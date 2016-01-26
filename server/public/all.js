// create the legacyCrowdApp module
angular.module('legacyCrowdApp', []);
// existing legacyCrowdApp module
var legacy = angular.module('legacyCrowdApp');

/* add createCampaign controller with logic for manipulating the campaign creator UI
and handling user input campaign data within the $scope */
legacy.controller('campaignCreatorCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("testing - helloWorld function within the campaignCreatorCtrl");
  };
});

// test service, creates the method testingMyService
legacy.service('data-service', function() {
  this.testingMyService(function() {
    console.log("This is my service!");
  });
});
// inject homepage content into index.html
angular.module('legacyCrowdApp')
.directive('hompage', function() {
  return {
    template: "<div ng-view>" + "</div>" + "<h4>This is the directive for the top of the site.<h4>" + " " +
    "<h5>Insert Landing Page image, navbar, and content within this directive.</h5>"
  };
});
// existing legacyCrowdApp module
var legacy = angular.module('legacyCrowdApp');

/* add createCampaign controller with logic for manipulating the campaign creator UI
and handling user input campaign data within the $scope */
legacy.controller('loginCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("testing - helloWorld function within the loginCtrl");
  };
});