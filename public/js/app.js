// create new legacyCrowdApp module
angular.module('legacyCrowdApp', [])

/* add createCampaign controller with logic for manipulating the campaign creator UI and handling 
user input campaign data within the $scope */
.controller('createCampaignCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("testing - helloWorld function within the createCampaignCtrl");
  };
});