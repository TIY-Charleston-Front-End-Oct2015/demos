angular
  .module('flickr')
  .controller('FlickrCtrl', function($scope, $ionicLoading, FlickrService, $window) {
    // helper functions for loading
    
     var showLoading = function() {
       $ionicLoading.show({
         template: '<i class="ion-load-b"></i>',
         noBackdrop: true
       });
     };

     var hideLoading = function() {
       $ionicLoading.hide();
     };

 showLoading();

    FlickrService.getFlickrData().then(function (data) {
      console.log(data);
      hideLoading();
      $scope.photos = data;
    });


    var randomPeep = function () {
      var peeps = ["ben", "max", "mike", "perry"];
      return peeps[$window.Math.floor($window.Math.random() * peeps.length - 1)];
    };

    $scope.peep = randomPeep();
  })
