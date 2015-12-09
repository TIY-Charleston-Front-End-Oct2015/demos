angular
  .module('favs')
  .controller('FavsController', function ($scope, FavsService, $stateParams) {
    var vm = this;
    vm.likePhoto = function (photo) {
      photo.likes === undefined ? photo.likes = 1 : photo.likes++;
      console.log(photo.likes);
      FavsService.addLikedPhoto(photo);
    };

    FavsService.getLikes().success(function (likedPhotos) {
      vm.likedPhotos = likedPhotos;
    });
    vm.deleteLike = function (photoId) {
      FavsService.deletePhoto(photoId);
    }
console.log($stateParams.favId);
    if($stateParams.favId) {
    FavsService.getSinglePhoto($stateParams.favId).success(function (likedPhoto) {
      vm.likedPhoto = likedPhoto;
      console.log('likedPhoto: ',likedPhoto);
    });
  }

    $scope.$on('like:deleted', function () {
      console.log('a like was deleted!!!');
      FavsService.getLikes().success(function (likedPhotos) {
        vm.likedPhotos = likedPhotos;
      });
    });

  });
