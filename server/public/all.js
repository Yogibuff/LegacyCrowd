// angular.module('legacyCrowdApp', [ngRoute]);
// create the legacyCrowdApp module
angular.module('legacyCrowdApp', []);

// angular.module('legacyCrowdApp'
//   .config(['$routeProvider', function($routeProvider) {
//     $routeProvider
//       .when("/homepage", {
//         templateUrl: "app/homepage/homepage.html",
//         controller: "homepageController",
//         controllerAs: "homepage"
//       });
//   }]));
// injects homepage content into index.html
var legacy = angular.module('legacyCrowdApp');
legacy.controller('homepageCtrl', function() {
  vm = this;
  // add logic and variables
});

legacy.directive('navbar', function() {
  return {
    template: 
    '<!-- BEGIN Navbar -->' +
    '<div id="nav-menu" class="navbar navbar-inverse" role="navigation">' +
     '<div class="container-fluid" id="nav-container">' +
        '<div class="navbar-header">' +
          '<div>' +
            '<a href="#"><img id="nav-logo" src="../../images/legacy-crowd-logo.png"></a>' +
          '</div>' +
          '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-dropdown">' +
            '<span class="sr-only">Toggle navigation</span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
          '</button>' +
        '</div>' +
        '<div class="collapse navbar-collapse navbar-dropdown">' +
          '<ul class="nav navbar-nav navbar-right">' +
            '<li>' +
              '<a href="#">Start Funding</a>' +
            '</li>' +
            '<li>' +
              '<a href="">Make Campaign</a>' +
            '</li>' +
            '<li>' +
              '<a href="">Active Campaigns</a>' +
            '</li>' +
            '<li>' +
              '<a href="">How It Works</a>' +
            '</li>' +
          '</ul>' +
        '</div> <!-- close .navbar-collapse -->' +
      '</div> <!-- close .container-fluid -->' +
    '</div> <!-- close .navbar -->'
  };
});

legacy.directive('header', function() {
  return {
    template: '<div id="header">' +
      '<h3 id="subtitle">Crowdfunded Capital for the Future</h3>' +
      '<br>' +
      '<h1 id="title">Invest Ahead of the Curve</h1>' +
      '<br>' +
      '<br>' +
      '<button id="learn-more">Learn More</button>' +
      '<button id="create-account">Create Account</button>' +
      '<br>' +
    '</div> <!-- close #header -->'
  };
});

legacy.directive('homepage', function() {
  return {
    template: '<div navbar>' + '</div>' + ' ' + '<div header>' + '</div>'
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
// existing legacyCrowdApp module
var legacy = angular.module('legacyCrowdApp');
legacy.controller('featuredCampaignCtrl', function() {
  vm = this;
  // add logic and variables
});

// create a single campaign card to preview an image, name, location
legacy.directive('campaignCard', function() {
  return {
    template:
    '<div class="container cardContainer">' +
      /* temporary image and content, replace with campaign data stored in MongoDB */
      '<img class="img-square cardImg" src="images/legacy-phone-campaign.png">' +
      '<h2 class="cardTitle">Metronome Technologies</h2>' +
      '<p class="cardBlurb">This campaign will build a new fast and affordable smartphone</p>' +
      '<a class="cardLocation" href=""><i class="fa fa-map-marker"></i> Irvine, California</a>' +
    '</div>'
  };
});

// chain campaignCards, creating a row of 4 campaign cards for homepage
// legacy.directive('featuredCards', function() {
//   return {
//     template: '<div campaign-card>' + '</div>' + '<div campaign-card>' + '</div>' + 
//       '<div campaign-card>' + '</div>' + '<div campaign-card>' + '</div>'
//   };
// });

// chain campaignCards, creating a column of 2 campaign cards for homepage
legacy.directive('featuredCards', function() {
  return {
    template: '<div class="col-sm-2 cards">' + ' ' + '<div campaign-card>' + '</div>' + ' ' + 
      '<div campaign-card>' + '</div>' + ' ' + '</div>'
  };
});

// chain featuredCards, creating 2 rows of 4 campaign cards for homepage
legacy.directive('topCampaigns', function() {
  return {
    template: '<div class="col-sm-12" id="topCampaignsContainer">' + ' ' + '<div featured-cards>' + '</div>' + ' ' + '<div featured-cards>' + '</div>' + 
      ' ' + '<div featured-cards>' + '</div>' + ' ' + '<div featured-cards>' + '</div>' + ' ' + '</div>'
  };
});