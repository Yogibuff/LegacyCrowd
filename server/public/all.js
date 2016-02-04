// create the legacyCrowdApp module
//angular.module('legacyCrowdApp', []);
// front end routes for homepage
var app = angular.module('legacyCrowdApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/app/views/homepage.html",
      controller: "homepageCtrl",
      controllerAs: "home"
    })
    .when("/campaign-creator", {
      templateUrl: "/app/views/campaign-creator.html",
      controller: "creatorCtrl",
      controllerAs: "creator"
    })
    .when("/campaign-viewer", {
      templateUrl: "/app/views/campaign-viewer.html",
      controller: "viewerCtrl",
      controllerAs: "viewer"
    });
    // .otherwise({
    //   redirectTo: '/app/views/custom-404.html'
    // });
});
// Posts a new created campaign to the database
app.controller('creatorCtrl', ['$http', function($http, $scope) {
  function createCampaign() {
    $http({
      method: 'POST',
      url: '/create'
    })
    .then(function(response) {
      vm.message = 'Added successfully';
    });
  }
}]);

// test service, creates the method testingMyService
app.service('data-service', function() {
  this.testingMyService(function() {
    console.log('This is my service!');
  });
});
// Retrieves a specific campaign for the full list of campaign details in campaign-viewer.html
app.controller('campaignViewerCtrl', ['$http', function($http, $scope) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/data'
  })
  .success(function(data) {
    vm.campaigns = data;
    console.log(data);
  })
  .error(function(data) {
    console.log('error, check campaignViewer controller.');
  });
}]);
var app = angular.module('legacyCrowdApp');
app.controller('homepageCtrl', ['$http', function($scope, $http) {
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
    console.log("Response from database. Status: " + res.status);
  })
  .error(function(data) {
    console.log("Front-end data request failed. Status: " + res.status + ' ' + res.statusText);
  });
}]);
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
  // scroll page to top in 700ms
  $scope.scrollTop = function() {
    $('html, body').animate({
      scrollTop: 0
    }, 700);
  };
});