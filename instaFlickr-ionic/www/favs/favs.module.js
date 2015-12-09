angular
  .module('favs', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
      $stateProvider
        .state('tab.favs', {
          url: '/favs',
          views: {
            'tab-favs': {
          templateUrl: 'favs/views/list.html',
          controller: 'FavsController as favsCtrl'
          }
        }
        })
        .state('tab.fav-detail', {
          url: '/favs/:favId',
          templateUrl: 'favs/views/detail.html',
          controller: 'FavsController as favsCtrl'
        });

    });
