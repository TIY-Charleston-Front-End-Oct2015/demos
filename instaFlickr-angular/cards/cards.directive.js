(function () {
  'use strict';

  angular
    .module('mtg-app.cards')
    .directive('mtgCard', function () {
      return {
        restrict: 'E',
        templateUrl: 'cards/views/card.directive.html',
        scope: {
          card: '=',
          action: '&',
          actionText: '@'
        }
      };
    });
})();
