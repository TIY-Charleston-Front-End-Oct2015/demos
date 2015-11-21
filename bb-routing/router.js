var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var FormView = require('./formView');
var Collection = require('./collection');
var ColView = require('./collectionView');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'homePage',
    'about': 'aboutPage',
    'addBook': 'addBook'

  },
  initialize: function (options) {
    // if(!this.layout) {
    //   this.layout = options.layout;
    // }
  },
  homePage: function () {
    console.log("you've made it to home!!");
    var collection = new Collection();
    collection.fetch().then(function () {
      $('#layout').html(new ColView({collection: collection}).render().el);
    })
  },
  aboutPage: function () {
    console.log("you've made it to the about page");
  },
  addBook: function () {
    // render form view pass router instance so can navigate
    $('#layout').html(new FormView({router: this}).render().el);
  }




})
