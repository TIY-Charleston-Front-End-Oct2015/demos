module.exports = {
  book: [
    '<article>',
      '<img src="<%= cover %>">',
      '<h3><%= title %></h3>',
      '<h4><%= author %></h4>',
      '<p><%= description %></p>',
    '</article>'
  ].join("")
};
