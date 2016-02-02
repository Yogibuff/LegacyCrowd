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

// temporary - chain campaignCards, creates a column of 2 of the same campaign cards for initial setup
legacy.directive('featuredCards', function() {
  return {
    template: '<div class="col-xs-2 col-md-3 cards">' + ' ' + '<div campaign-card>' + '</div>' + ' ' + 
      '<div campaign-card>' + '</div>' + ' ' + '</div>'
  };
});

// chain featuredCards, creates 2 rows of 4 campaign cards for homepage
legacy.directive('topCampaigns', function() {
  return {
    template: '<div class="row" id="topCampaignsContainer">' + ' ' + '<div featured-cards>' + '</div>' + ' ' + '<div featured-cards>' + '</div>' + 
      ' ' + '<div featured-cards>' + '</div>' + ' ' + '<div featured-cards>' + '</div>' + ' ' + '</div>'
  };
});

/* TO DO:
  - remove featuredCards directive
  - place 8 single "campaignCard" templates into the 'topCampaigns' directive
  - pull image, cardTitle, cardBlurb, cardLocation from MongoDB for each individual campaign 
    -> populate card using the featuredCampaignCtrl
  - campaign data stored in JSON format within the MongoDB schema db.user.campaign.attribute
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
    template:
  '<h1>Start Building Your Project!</h1>' +
  '<br>' +
  '<h4>Add an Image, Set a Goal, and include Important Details</h4>' +
  '<br>'
  };
});

legacy.directive('build', function() {
  return {
    template:
  '<div id="build-campaign">' +
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
    '</div> <!-- close #build-campaign -->'
  };
});

// test service, creates the method testingMyService
legacy.service('data-service', function() {
  this.testingMyService(function() {
    console.log('This is my service!');
  });
});
// injects homepage content into index.html
var legacy = angular.module('legacyCrowdApp');
legacy.controller('homepageCtrl', function($scope) {
  $scope.showLogin = function() {
    console.log('showLogin function fired');
    $scope.login = true;
    $scope.lost = false;
    $scope.register = false;
  };
});

legacy.directive('navbar', function() {
  return {
    template: 
    '<!-- Navbar -->' +
    '<div id="nav-menu" class="navbar navbar-fixed-top navbar-inverse" role="navigation">' +
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
      '<button id="create-account" ng-click="showLogin()" data-toggle="modal" data-target="#login-modal">Create Account</button>' +
      '<br>' +
    '</div> <!-- close #header -->'
  };
});

legacy.directive('homepage', function() {
  return {
    template: '<div navbar>' + '</div>' + ' ' + '<div header>' + '</div>'
  };
});

// navbar transparent at page top, change to black background on scroll
$(function() {
  $(window).scroll(function() {
    var navbar = $("#nav-menu"),   
        scroll = $(window).scrollTop();
    if (scroll >= 10) {
        navbar.attr('style', 'background-color: rgba(17, 17, 17, 0.9) !important');
    }
    else {
        navbar.attr('style', 'background-color: transparent !important');
    }
  });
});
// existing legacyCrowdApp module
var legacy = angular.module('legacyCrowdApp');

/* add createCampaign controller with logic for manipulating the campaign creator UI
and handling user input campaign data within the $scope */
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

legacy.directive('loginModal', function() {
  return {
    template:
      '<!-- Login Modal -->' +
      '<div id="login">' +
        '<div id="login-modal" class="modal fade" tabindex="-1" role="dialog" style="display: none;">' +
          '<div class="modal-dialog">' +
            '<div class="modal-content">' +
              '<div class="modal-header" align="center">' +
                '<img id="login-logo" src="../../images/legacy-crowd-logo.png">' +
                '<button type="button" class="close" data-dismiss="modal">' +
                  '<span class="glyphicon glyphicon-remove"></span>' +
                '</button>' +
              '</div>' +
              '<div id="login-container">' +
              '<login-form>' +
              '</login-form>' +
              '<lost-password>' +
              '</lost-password>' +
              '<register>' +
              '</register>' +
            '</div> <!-- close .modal-content -->' +
          '</div> <!-- close .modal-dialogue -->' +
        '</div> <!-- close #login-modal -->' +
      '</div> <!-- close #login -->'
  };
});

legacy.directive('loginForm', function() {
  return {
    template: 
      '<!-- Login Form -->' +
        '<form id="login-form" ng-hide="!login" ng-show="login">' +
          '<div class="modal-body">' +
            '<div id="div-login-msg"> <!-- success/fail msg -->' +
              '<div id="icon-login-msg" class="glyphicon glyphicon-chevron-right"></div>' +
              '<span id="text-login-msg">Type your username and password.</span>' +
            '</div>' +
            '<input id="login-username" class="form-control" type="text" placeholder="Username" ng-model="login.username" required>' +
            '<input id="login-password" class="form-control" type="password" ng-model="login.password" placeholder="Password" required>' +
            '<div class="checkbox">' +
              '<label>' + 
                '<input type="checkbox">Remember me</input>' +
              '</label>' + 
            '</div>' + 
          '</div>' + 
          '<div class="modal-footer">' + 
            '<div>' + 
              '<button type="submit" class="btn btn-primary btn-lg btn-block">Login</button>' + 
            '</div>' + 
            '<div>' + 
              '<button id="login-lost-btn" type="button" class="btn btn-link" ng-click="showLost()">Lost Password?</button>' + 
              '<button id="login-register-btn" type="button" class="btn btn-link" ng-click="showRegister()">Register</button>' + 
            '</div>' + 
          '</div> <!-- close .modal-footer -->' + 
        '</form> <!-- close #login-form -->'
  };
});

legacy.directive('lostPassword', function() {
  return {
    template: 
      '<!-- Lost Password Form -->' +
        '<form id="lost-form" ng-hide="!lost" ng-show="lost">' +
          '<div class="modal-body">' +
            '<div id="div-lost-msg"> <!-- success/fail msg -->' +
              '<div id="icon-lost-msg" class="glyphicon glyphicon-chevron-right"></div>' +
              '<span id="text-lost-msg">Enter your e-mail to recover your password.</span>' +
            '</div>' +
            '<input id="lost-email" class="form-control" type="text" placeholder="e-mail" required>' +
          '</div>' +
          '<div class="modal-footer">' +
            '<div>' +
             '<button type="submit" class="btn btn-primary btn-lg btn-block">Send</button>' +
            '</div>' +
            '<div>' +
              '<button id="lost-login-btn" type="button" class="btn btn-link" ng-click="showLogin()">Log In</button>' +
              '<button id="lost-register-btn" type="button" class="btn btn-link" ng-click="showRegister()">Register</button>' +
            '</div>' +
          '</div>' +
        '</form> <!-- close #lost-form -->'
  };
});

legacy.directive('register', function() {
  return {
    template: 
      '<!-- Register Form -->' +
        '<form id="register-form" ng-hide="!register" ng-show="register">' +
          '<div class="modal-body">' +
            '<div id="div-register-msg"> <!-- success/fail msg -->' +
              '<div id="icon-register-msg" class="glyphicon glyphicon-chevron-right"></div>' +
              '<span id="text-register-msg">Register an account.</span>' +
            '</div>' +
            '<input id="register-username" class="form-control" type="text" placeholder="Username" required>' +
            '<input id="register-email" class="form-control" type="text" placeholder="E-Mail" required>' +
            '<input id="register-password" class="form-control" type="password" placeholder="Password" required>' +
          '</div>' +
          '<div class="modal-footer">' +
            '<div>' +
              '<button type="submit" class="btn btn-primary btn-lg btn-block">Register</button>' +
            '</div>' +
            '<div>' +
              '<button id="register-login-btn" type="button" class="btn btn-link" ng-click="showLogin()">Log In</button>' +
              '<button id="register-lost-btn" type="button" class="btn btn-link" ng-click="showLost()">Lost Password?</button>' +
            '</div>' +
          '</div>' +
        '</form> <!-- close #register-form -->'
  };
});