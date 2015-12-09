angular.module('flickr', [
  'ui.router',
  'underscore',
  'moment'
])
.config(function($stateProvider) {
  $stateProvider
    .state('tab.photos', {
      url: '/photos',
      views: {
        'tab-photos': {
          templateUrl: 'flickr/views/tab-photos.html',
          controller: 'FlickrCtrl'
        }
      }

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
