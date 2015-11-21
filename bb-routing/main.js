var $ = require('jquery');
var Router = require('./router');
var Backbone = require('backbone');
var Collection = require('./collection');
var ColView = require('./collectionView');
$(function () {

  new Router();
  Backbone.history.start();
});
