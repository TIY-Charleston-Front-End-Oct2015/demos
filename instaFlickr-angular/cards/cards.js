(function () {
  'use strict';

  angular
    .module('mtg-app.cards', [
      'ngRoute',
      // 'mtg-app.auth'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/cards', {
          templateUrl: 'cards/views/list.html',
          controller: 'CardsCtrl',
          // resolve: {
          //   authenticated: function($q, $location, $auth) {
          //     var deferred = $q.defer();
          //
          //     if (!$auth.isAuthenticated()) {
          //       $location.path('/login');
          //     } else {
          //       deferred.resolve();
          //     }
          //
          //     return deferred.promise;
          //   }
          // }
        })
        .when('/cards/:cardId', {
          templateUrl: 'cards/views/show.html',
          controller: 'CardsCtrl'
        });
    });
})();
