$(document).ready(function () {
   bitterPage.init();
});

var bitterPage = {
  init: function() {
    bitterPage.styling();
    bitterPage.events();
  },
  events: function() {
    $('form').on('submit', function(event) {
      event.preventDefault();
      bitterPage.createNewBitter();
    });
    $('.bitters').on('click','.delete',function (event) {
      $(this).closest('article').remove();
    })
    $('nav a').on('click', function (event) {
      event.preventDefault();
      var element = this
      bitterPage.showActiveSection(element);
    })
  },
  styling: function() {
    bitterPage.loadBitters();
  },
  loadBitters: function() {
    var bitterHTML = "";
    _.each(bitterData, function (currVal, idx, arr) {
      bitterHTML += bitterPage.loadTemplate('bitterTmpl',currVal);
    });
    // add giant string of markup to the DOM
    $('.bitters').html(bitterHTML);
  },
  createNewBitter: function() {
    var avatarUrl = $('input[name="avatar"]').val();
    var bitterText = $('input[name="bitter"]').val();
    var newBitter = {
      avatar: avatarUrl,
      bitter: bitterText
    };
    bitterData.push(newBitter);
    var htmlForArticle = bitterPage.loadTemplate('bitterTmpl',currItem);
    $('.bitters').prepend(htmlForArticle);
    $('input[type="text"]').val('');
  },
  topThreeBitters: function() {
    var top3 = _.filter(bitterData, function (currItem, idx) {
      return idx < 3;
    });
    $('.contact').append(bitterPage.loadTemplate('bitterTmpl',currItem));
  },
  showActiveSection: function(clickedThingy) {
    var clickedSection = "." + $(clickedThingy).attr('rel');
    $(clickedSection).addClass('active-section');
    $(clickedSection).siblings('section').removeClass('active-section');
  },
  getTemplate: function(name) {
    return _.template(templates[name]);
  },
  loadTemplate: function(name, val) {
    var tmpl = bitterPage.getTemplate(name);
    return tmpl(val);
  },
}



