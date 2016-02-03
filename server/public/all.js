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
// existing legacyCrowdApp module
var legacy = angular.module('legacyCrowdApp');

/* add creator controller with logic for manipulating the campaign creator UI
and handling user input campaign data within the $scope */
legacy.controller('creatorCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log('testing - helloWorld function within the creatorCtrl');
  };
});

// test service, creates the method testingMyService
legacy.service('data-service', function() {
  this.testingMyService(function() {
    console.log('This is my service!');
  });
});
// existing legacyCrowdApp module
var legacy = angular.module('legacyCrowdApp');

/* add createCampaign controller with logic for manipulating the campaign creator UI
and handling user input campaign data within the $scope */
legacy.controller('campaignViewerCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log('testing - helloWorld function within the campaignViewerCtrl');
  };
});
// existing legacyCrowdApp module
var legacy = angular.module('legacyCrowdApp');
legacy.controller('featuredCampaignCtrl', function() {
  var vm = this;
  // add logic and variables
});

// create a single campaign card to preview an image, name, location
legacy.directive('campaignCard', function() {
  return {
    template:
    '<div class="container cardContainer">' +
      /* temporary image and content, replace with campaign data stored in MongoDB */
      '<img class="img-square cardImg" src="images/legacy-phone-campaign.png" href="">' +
      '<h2 class="cardTitle">Metronome Technologies</h2>' +
      '<p class="cardBlurb">This campaign will build a new fast and affordable smartphone</p>' +
      '<a class="cardLocation" href="/#/campaign-viewer"><i class="fa fa-map-marker"></i> Irvine, California</a>' +
    '</div>'
  };
});

/* TO DO:

  - request image, cardTitle, cardBlurb, cardLocation
  - retrieve img url and other data from MongoDB for each individual campaign 
    -> populate card using mongoose
  - campaign data stored in JSON format within the MongoDB campaign object

*/
// injects homepage content into index.html
var legacy = angular.module('legacyCrowdApp');
legacy.controller('homepageCtrl', function($scope) {
  var subscribe = {
    emailsubscribe: "default",
    member: false
  };
  $scope.scrollTop = function() {
    $('html, body').animate({
      scrollTop: 0
    }, 700);
  };
});
legacy.controller('loginCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("testing - helloWorld function within the loginCtrl");
  };
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
// test ctrl

// existing legacyCrowdApp module
var legacy = angular.module('legacyCrowdApp');

legacy.controller('scrollCtrl', function($scope) {
  $scope.scrollTop = function() {
    $('html, body').animate({
      scrollTop: 0
    }, 700);
  };
});