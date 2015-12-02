(function () {
  "use strict";
  angular
    .module('stateIntro', [
      'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'main.html'

        })
        .state('home.about', {
          url: '/about',
          templateUrl: 'about.html'
        })
        .state('home.about.contact', {
          url: '/contact',
          templateUrl: 'contact.html',
          controller: function ($scope, $state) {
            $scope.logMe = function () {
              console.log('hello from contact');
              $state.go('home.about');
            }
          }
        })
        .state('about', {
          url: '/about',
          templateUrl: 'about.html'
        })
    })

})();
