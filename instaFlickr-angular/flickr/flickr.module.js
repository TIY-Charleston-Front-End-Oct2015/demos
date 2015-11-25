
(function () {
  "use strict";

  angular
    .module('flickr', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/flickr', {
          templateUrl: 'flickr/views/list.html',
          controller: 'FlickrController'
        })
        .when('/flickr/:flickrId', {
          templateUrl: 'flickr/views/detail.html',
          controller: 'FlickrController'
        })
        .otherwise({ redirectTo: '/404'});
    });


})();
