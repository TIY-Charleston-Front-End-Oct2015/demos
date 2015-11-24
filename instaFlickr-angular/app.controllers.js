(function () {
  "use strict";

  angular
    .module('flickrgram')
    .controller('MainController', function ($scope) {

    })
    .controller('PhotosController', function ($scope, FlickrService, LikeService, $routeParams) {
    
      FlickrService.getFlickrData().then(function (photos) {

        $scope.photos = photos;
      });
      LikeService.getLikes().success(function (likedPhotos) {
        $scope.likedPhotos = likedPhotos;
      })
      $scope.likePhoto = function (photo) {
        LikeService.addLikedPhoto(photo);
      };
      if($routeParams.likePhotoId) {
      LikeService.getSinglePhoto($routeParams.likePhotoId).success(function (likedPhoto) {
        $scope.likedPhoto = likedPhoto;
        console.log('likedPhoto: ',$scope.likedPhoto);
      });
    }

      // FlickrService.getSinglePhoto($routeParams.photoId).success(function (photo) {
      //   $scope.singlePhoto = photo;
      // });
      // console.log('single', $scope.singlePhoto);
    });
})();
