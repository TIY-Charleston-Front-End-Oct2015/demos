(function () {
  "use strict";
  angular
    .module('books')
    .factory('BooksService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/blakeShelton';

      var addBook = function (newBook) {
        $http.post(url, newBook).then(function (res) {
          console.log(res);
        });
      };

      var getBooks = function () {
        return $http.get(url);
      };

      return {
        createBook: addBook,
        getBooks: getBooks
      };

    });
})();
