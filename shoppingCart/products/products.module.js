(function () {
  "use strict";
  angular
    .module('myAzon.products', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/products', {
          templateUrl: 'products/views/list.html',
          controller: 'ProductsController'
        })
        .when('/products/:prodId', {
          templateUrl: 'products/views/show.html',
          controller: 'ProductsController'
        });

    });



})();
