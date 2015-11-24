
(function () {
  "use strict";

  angular
    .module('flickrgram', [
      'ngRoute',
      'underscore',
      'moment'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<h1>Welcome to flickrgram</h1><a href="#/photos">go to photos</a>',
          controller: 'MainController'
        })
        .when('/photos', {
          templateUrl: 'views/photos/list.html',
          controller: 'PhotosController'
        })
        .when('/photos/:photoId', {
          templateUrl: 'views/photos/detail.html',
          controller: 'PhotosController'
        })
        .when('/likes', {
          templateUrl: 'views/likes/list.html',
          controller: 'PhotosController'
        })
        .when('/likes/:likePhotoId', {
          templateUrl: 'views/likes/detail.html',
          controller: 'PhotosController'
        });
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
