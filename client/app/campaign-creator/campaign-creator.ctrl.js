// existing legacyCrowdApp module
var legacy = angular.module('legacyCrowdApp');

/* add createCampaign controller with logic for manipulating the campaign creator UI
and handling user input campaign data within the $scope */
legacy.controller('campaignCreatorCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log('testing - helloWorld function within the campaignCreatorCtrl');
  };
});

legacy.directive('goal', function() {
  return {
    template: '<h1>Start Building Your Project!</h1>' +
  '<br>' +
  '<h4>Add an Image, Set a Goal, and include Important Details</h4>' +
  '<br>'
  };
});

legacy.directive('build', function() {
  return {
    template:
'<div id="create">' +
  '<div ng-controller="campaignCreatorCtrl as creator">' +
  '<h1>Start Building Your Project!</h1>' +
  '<br>' +
  '<h4>Add an Image, Set a Goal, and include Important Details</h4>' +
  '<br>' +
    '<form novalidate>' +
      '<ul>' +
        '<li>' +
          '<label class="build-input">Project Image:</label><input ng-model="creator.imageUpload">' +
               '{{ creator.imageUpload }}' +
        '</li>' +
        '<li>' +
          '<label class="build-input">Funding Target:</label><input type="text" ng-model="creator.target">' +
           '{{ creator.target }}' +
        '</li>' +
        '<li>' +
          '<label class="build-input">Project Title:</label><input ng-model="creator.title">' +
            '{{ creator.title }}' +
        '</li>' +
        '<li>' +
          '<label class="build-input">Short Blurb:</label><input type="text" ng-model="creator.blurb">' +
            '{{ creator.blurb }}' +
        '</li>' +
        '<li>' +
          '<label class="build-input">Location:</label><input ng-model="creator.location">' +
            '{{ creator.location }}' +
        '</li>' +
        '<li>' +
          '<label class="build-input">Category:</label><input type="text" ng-model="creator.category">' +
            '{{ creator.category }}' +
        '</li>' +
        '<li>' +
          '<label class="build-input">Campaign Start Date:</label><input ng-model="creator.startDate">' +
            '{{ creator.startDate }}' +
        '</li>' +
        '<li>' +
          '<label class="build-input">Campaign End Date:</label><input type="text" ng-model="creator.endDate">' +
            '{{ creator.endDate }}' +
        '</li>' +
      '</ul>' +
    '</form>' +
  '</div> <!-- close campaignCreator Controller -->' +
'</div> <!-- close #create -->'
  };
});

// test service, creates the method testingMyService
legacy.service('data-service', function() {
  this.testingMyService(function() {
    console.log('This is my service!');
  });
});