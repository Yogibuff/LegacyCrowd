// front end routes for homepage
var app = angular.module('legacyCrowdApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/views/homepage.html",
      controller: "homepageCtrl",
      controllerAs: "home"
    })
    .when("/campaign-creator", {
      templateUrl: "app/views/campaign-creator.html",
      controller: "creatorCtrl",
      controllerAs: "creator"
    })
    .when("/campaign-viewer", {
      templateUrl: "app/views/campaign-viewer.html",
      controller: "campaign-viewerCtrl",
      controllerAs: "viewer"
    });
    // .otherwise({
    //   redirectTo: '/app/views/custom-404.html'
    // });
});
// create the legacyCrowdApp module
//angular.module('legacyCrowdApp', []);
// Posts a new created campaign to the database
app.controller('creatorCtrl', function($http, $scope) {
  function createCampaign() {
    $http({
      method: 'POST',
      url: '/data'
    })
    .then(function(response) {
      vm.message = 'Added successfully';
    });
  }
});
// Retrieves a specific campaign for the full list of campaign details in campaign-viewer.html
app.controller('campaignViewerCtrl', function($scope, $http) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/data'
  })
  .success(function(data) {
    vm.campaigns = data;
    console.log("Campaign data retrieved from Mongo database.");
  })
  .error(function(data) {
    console.log('Error. Campaign-viewer angular data request failed.');
  });
});
var app = angular.module('legacyCrowdApp');
app.controller('homepageCtrl', function($scope, $http) {
  var subscribe = {
    emailsubscribe: "default",
    member: false
  };
  var vm = this;
  
  // http service for database request, returns a promise with campaign data
  $http({
    method: 'GET',
    url: '/data'
  })
  .success(function(data) {
    vm.campaigns = data;
    console.log("Campaign data retrieved from Mongo database.");
  })
  .error(function(data) {
    console.log("Error. Homepage angular data request failed.");
  });
});
// switches between login, lost password, and register options within the Login Modal
app.controller('loginCtrl', function($scope) {
  $scope.showLogin = function() {
    console.log('showLogin function fired');
    $scope.login = true;
    $scope.lost = false;
    $scope.register = false;
  };
  $scope.showLost = function() {
    console.log('showLost function fired');
    $scope.login = false;
    $scope.lost = true;
    $scope.register = false;
  };
  $scope.showRegister = function() {
    console.log('showRegister function fired');
    $scope.login = false;
    $scope.lost = false;
    $scope.register = true;
  };
});
app.controller('scrollCtrl', function($scope) {
  // scroll page to top in 0.8 sec
  $scope.scrollTop = function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  };
  $scope.scrollToHero = function() {
    // scroll to video hero in 1 second
    $('html, body').animate({
      scrollTop: $("#video-hero").offset().top
    }, 1000);
  };
  $scope.scrollToCampaigns = function() {
    // scroll to campaigns in 0.8 sec
    $('html, body').animate({
      scrollTop: 700
    }, 800);
  };
});