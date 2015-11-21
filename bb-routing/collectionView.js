var Backbone = require('backbone');
var BookView = require('./modelView');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  el: '#books',
  initialize: function () {},
  render: function () {
    this.addAll();
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  },
  addOne: function (bookModel) {
    var bookView = new BookView({model: bookModel});
    this.$el.append(bookView.render().el);
  }
});
