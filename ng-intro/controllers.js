(function () {
  

  angular
    .module('books')
    .controller('MainController', function ($scope) {
      $scope.alertMe = function () {
      _.times(1000, function () {
          console.log("hello everyone!");
        })
      };
      $scope.msg = "this is a secret message";
    })
    .controller('BooksController', function ($scope, BooksService) {

      BooksService.getBooks().success(function (books) {
        console.log(books);
        $scope.warBooks = books;
      });



      // $scope.warBooks = [
      //   {
      //     title: "The Art of War",
      //     cover: "http://www.returnofkings.com/wp-content/uploads/2015/01/sun-tzu.jpg",
      //     description: "strategy stuff"
      //   },
      //   {
      //     title: "ng-Book",
      //     cover: "http://ecx.images-amazon.com/images/I/712vyspLr8L.jpg",
      //     description: "angular book"
      //   }
      // ];

      $scope.addBook = function (newBook) {
        console.log(newBook);
        BooksService.createBook(newBook);
      };

    });


})();
