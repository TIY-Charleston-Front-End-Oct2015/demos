(function () {
  "use strict";
  angular
  .module('likes')
  .controller('LikesController', function ($scope, LikeService, $routeParams) {


    LikeService.getLikes().success(function (likedPhotos) {
      $scope.likedPhotos = likedPhotos;
    });
    $scope.deleteLike = function (photoId) {
      LikeService.deletePhoto(photoId);
    }
console.log($routeParams.likeId);
    if($routeParams.likeId) {
    LikeService.getSinglePhoto($routeParams.likeId).success(function (likedPhoto) {
      $scope.likedPhoto = likedPhoto;
      console.log('likedPhoto: ',$scope.likedPhoto);
    });
  }

    $scope.$on('like:deleted', function () {
      console.log('a like was deleted!!!');
      LikeService.getLikes().success(function (likedPhotos) {
        $scope.likedPhotos = likedPhotos;
      });
    });

  });
})();
