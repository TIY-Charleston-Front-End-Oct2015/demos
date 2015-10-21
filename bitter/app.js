var bitterData = [
  {
    avatar: "http://www.fillmurray.com/100/100",
    bitter: "I love charleston, but i hate that joe riley is no longer mayor"
  },
  {
    avatar: "https://avatars2.githubusercontent.com/u/14876902?v=3&s=460",
    bitter: "I am bitter the Cubs are 0-3."
  },
  {
    avatar: "https://avatars1.githubusercontent.com/u/14340304?v=3&s=460",
    bitter: "It's this cold this far south, this early."
  },
  {
    avatar: "https://avatars3.githubusercontent.com/u/10393621?v=3&s=460",
    bitter: "Michigan lost to Michigan State!!!"
  }
];
$(document).ready(function () {
  // anything in here is dom ready!

  var bitterHTML = "";

  _.each(bitterData, function (currVal, idx, arr) {
    bitterHTML += "<article class='bit'>"
      + "<h3>"
      + "<img src='"
      + currVal.avatar
      + "'>"
      + "</h3>"
      + "<p>"
      + currVal.bitter
      + "</p>"
      + "<button class='delete'>Delete</button>"
      + "</article>";
      console.log('bitterHTML: ', bitterHTML);
  });

  $('.bitters').html(bitterHTML);

  $('form').submit(function (event) {
    event.preventDefault();
    console.log("submit happened!");

    var avatarUrl = $('input[name="avatar"]').val();
    var bitterText = $('input[name="bitter"]').val();
    console.log("avatarUrl", avatarUrl, "bitterText", bitterText);

    var htmlForArticle = "<article><h3><img src='" + avatarUrl + "'></h3><p>" + bitterText + "</p><button type='button' class='delete\'>Delete</button></article>";
    // console.log("htmlForArticle", htmlForArticle);



    $('.bitters').prepend(htmlForArticle);
    $('input[type="text"]').val('');

  });

  $('.delete').click(function (event) {

    $(this).closest('article').remove();

  });

  $('.homeNav').click(function (event) {
    event.preventDefault();
    $('.bitters').css('display', 'inline-block');
    $('.bitters').siblings('section').css('display', 'none');

  });
  $('.aboutNav').click(function (event) {
    event.preventDefault();
    $('.about').css('display', 'inline-block');
    $('.about').siblings('section').css('display', 'none');

  });
  $('.contactNav').click(function (event) {
    event.preventDefault();
    $('.contact').css('display', 'inline-block');
    $('.contact').siblings('section').css('display', 'none');

  })



});
