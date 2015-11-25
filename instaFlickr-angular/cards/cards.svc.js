(function () {
  'use strict';

  angular
    .module('mtg-app.cards')
    .factory('CardsService', function ($http, _) {

      var baseUrl = 'https://api.deckbrew.com/mtg/cards';
      var apiUrl = 'https://tesseract-api.herokuapp.com/api/cards';
      return {
        getCards: getCards,
        getCard: getCard,
        searchCards: search,
        addCard: addCard
      };
      function addCard(card) {
        $http.post(apiUrl, card).then(function (res) {
          console.log(res);
        });
      }

      function getCards(params) {
        var params = params || {};
        return $http.get(baseUrl, {params: params}).then(function (cards) {
          return _.map(cards.data, function (el) {
            return {
              name: el.name,
              types: el.types,
              subtypes: el.subtypes,
              colors: el.colors,
              cost: el.cost,
              text: el.text,
              cardSet: el.editions[0].set,
              rarity: el.editions[0].rarity,
              multiverse_id: el.editions[0].multiverse_id,
              flavor: el.editions[0].flavor,
              image_url: el.editions[0].image_url
            };
          });
        });
      }

      function getCard(id) {
        return $http.get(baseUrl + '/' + id);
      }
      function search(query) {
        return $http.get(baseUrl + '/typeahead', {params: {q: query}}).then(function (cards) {
          return _.map(cards.data, function (el) {
            return {
              name: el.name,
              types: el.types,
              subtypes: el.subtypes,
              colors: el.colors,
              cost: el.cost,
              text: el.text,
              cardSet: el.editions[0].set,
              rarity: el.editions[0].rarity,
              multiverse_id: el.editions[0].multiverse_id,
              flavor: el.editions[0].flavor,
              image_url: el.editions[0].image_url
            };
          });
        });
      }



    });
})();
