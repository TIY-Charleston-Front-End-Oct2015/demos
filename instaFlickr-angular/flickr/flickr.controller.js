(function () {
  "use strict";
angular
  .module('flickr')
  .controller('FlickrController', function ($scope, FlickrService, LikeService, $routeParams) {

    FlickrService.getFlickrData().then(function (photos) {
      $scope.photos = photos;
    });
    $scope.$on('like:added', function () {
      console.log('a like was added!!!!');
    })

    $scope.likePhoto = function (photo) {
      photo.likes === undefined ? photo.likes = 1 : photo.likes++;
      console.log(photo.likes);
      LikeService.addLikedPhoto(photo);
    };
    console.log('photo id: ', $routeParams.flickrId);
    // if($routeParams.flickrId) {
    // LikeService.getSinglePhoto($routeParams.flickrId).success(function (likedPhoto) {
    //   $scope.likedPhoto = likedPhoto;
    //   console.log('likedPhoto: ',$scope.likedPhoto);
    // });
  // }

  });

})();
