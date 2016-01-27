// existing legacyCrowdApp module
var legacy = angular.module('legacyCrowdApp');

/* add createCampaign controller with logic for manipulating the campaign creator UI
and handling user input campaign data within the $scope */
legacy.controller('campaignCreatorCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log('testing - helloWorld function within the campaignCreatorCtrl');
  };
  $scope.layout = '<h1>Start Building Your Project!</h1>' +
  '<br>' +
  '<h4>Add an Image, Set a Goal, and include Important Details</h4>' +
  '<br>';
});

// test service, creates the method testingMyService
legacy.service('data-service', function() {
  this.testingMyService(function() {
    console.log('This is my service!');
  });
});