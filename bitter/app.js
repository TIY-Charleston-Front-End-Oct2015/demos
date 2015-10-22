// var albums = {
//   mason: [
//     "http://www.fillmurray.com/100/100",
//     "http://www.fillmurray.com/200/100",
//     "http://www.fillmurray.com/100/200"
//   ],
//   mia: [
//     "http://www.placehold.it/200/200",
//     "http://www.placehold.it/500/500",
//   ],
//   dustin: [
//     "photo1",
//     "photo2"
//   ]
// };
// function printPhotos(albumName) {
//   return albums[albumName];
// }
// albums.mia.forEach(function (el) {
//   $('body').prepend("<img class='miaphotos' src='" + el + "'>");
// });


var bitterData = [
  {
    avatar: "https://avatars1.githubusercontent.com/u/14340304?v=3&s=460",
    bitter: "It's this cold this far south, this early."
  },
  {
    avatar: "https://avatars3.githubusercontent.com/u/10393621?v=3&s=460",
    bitter: "Michigan lost to Michigan State!!!"
  },

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
  },
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
  },
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
  },
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
  },
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
  },
  {
    avatar: "http://www.fillmurray.com/100/100",
    bitter: "I love charleston, but i hate that joe riley is no longer mayor"
  }
];
$(document).ready(function () {
  // anything in here is dom ready!
 var bitterTemplate = _.template($('#bitterTmpl').html());
 console.log("bitter template: ", bitterTemplate);
  window.bitterHTML = "";

// we need to merge our data from bitterData with actual markup so that we can add to our html document
  _.each(bitterData, function (currVal, idx, arr) {
    bitterHTML += bitterTemplate(currVal);
      // console.log('bitterHTML: ', bitterHTML);
  });
// add giant string of markup to the DOM
$('.bitters').html(bitterHTML);

  $('form').on('submit', function (event) {
    event.preventDefault();
    console.log("submit happened!");

    var avatarUrl = $('input[name="avatar"]').val();
    var bitterText = $('input[name="bitter"]').val();
    console.log("avatarUrl", avatarUrl, "bitterText", bitterText);

    var newBitter = {
      avatar: avatarUrl,
      bitter: bitterText
    };
    bitterData.push(newBitter);
    var htmlForArticle = bitterTemplate(newBitter);
    // var htmlForArticle = "<article><h3><img src='" + avatarUrl + "'></h3><p>" + bitterText + "</p><button type='button' class='delete\'>Delete</button></article>";
    // console.log("htmlForArticle", htmlForArticle);



    $('.bitters').prepend(htmlForArticle);
    $('input[type="text"]').val('');

  });

var contactBitters = _.filter(bitterData, function (currItem, idx) {
  return idx < 3;
});
  _.each(contactBitters, function (currItem) {
    $('.contact').append(bitterTemplate(currItem));
  });

  $('.delete').click(function (event) {

    $(this).closest('article').remove();

  });


  $('nav a').on('click', function (event) {
    event.preventDefault();

      var clickedSection = "." + $(this).attr('rel');
      console.log(clickedSection);
      $(clickedSection).addClass('active-section');
      $(clickedSection).siblings('section').removeClass('active-section');

  });










});
