(function() {
  'use strict';

  angular
    .module('hopesAndDreams',[
      'ngRoute',
      'underscore'
    ])
    .config(function($routeProvider){
      $routeProvider
      .when('/dreams',{
        templateUrl: 'dreams/views/shopper/list.html',
        controller: 'DreamsController'
      })
      .when('/dreams/:dreamId', {
        templateUrl: 'dreams/views/shopper/detail.html',
        controller: 'DreamsController'
      })
      .when('/dreams/:dreamId/review',{
        templateUrl: 'dreams/views/shopper/review.html',
        controller: 'DreamsController'
      })
      .when('/cart',{
        templateUrl: 'dreams/views/shopper/cart.html',
        controller: 'CartController'
      })
      .when('/checkout',{
        templateUrl: 'dreams/views/shopper/receipt.html',
        controller: 'CartController'
      })
      .when('/admin/add',{
        templateUrl: 'dreams/views/admin/add.html',
        controller: 'AdminController'
      })
      .when('/admin',{
        templateUrl: 'dreams/views/admin/list.html',
        controller: 'AdminController',
      })
      .when('/admin/:dreamId',{
        templateUrl: 'dreams/views/admin/detail.html',
        controller: 'AdminController'
      })
      .when('/admin/:dreamId/edit',{
        templateUrl: 'dreams/views/admin/edit.html',
        controller: 'AdminController'
      });
    });

    angular
      .module('underscore',[])
      .factory('_',function($window){
        return $window._;
      });

}());
