
(function () {
  "use strict";

  angular
    .module('flickrgram', [
      'ngRoute',
      'underscore',
      'moment',
      'flickr',
      'likes',
      'hopesAndDreams',
      'mtg-app.cards'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<h1>Welcome to flickrgram</h1><a href="#/photos">go to photos</a>',
          controller: 'MainController'
        })
        .when('/404', {
          template: '<h1> Sorry, page not found!</h1>'
        })
        .otherwise({ redirectTo: '/404'});
    });

  angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });
  angular
    .module('moment', [])
    .factory('moment', function ($window) {
      return $window.moment;
    });

})();
