var templates = {


 topThreeTmpl: ['<article class="topThree">',
                '<h3><img src="<%= avatar %>"></h3>',
               "<p><%= bitter %></p>",
               '<h3><img src="<%= avatar %>"></h3>',
               "<p><%= bitter %></p>",
               '<h3><img src="<%= avatar %>"></h3>',
               "<p><%= bitter %></p>",
               '</article>'].join(""),
 bitterTmpl: ['<article class="bit" data-index="">',
               '<h3><img src="<%= avatar %>"></h3>',
               "<p><%= bitter %></p>",
              ' <button class="delete">Delete</button></article>'
              ].join("")


}

