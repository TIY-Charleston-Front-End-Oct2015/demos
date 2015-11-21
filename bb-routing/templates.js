module.exports = {
  book: [
    '<article>',
      '<img src="<%= cover %>">',
      '<h3><%= title %></h3>',
      '<h4><%= author %></h4>',
      '<p><%= description %></p>',
    '</article>'
  ].join(""),
  form: [
    '<input type="text" placholder="Title" name="title">',
    '<input type="text" placholder="description" name="description">',
    '<input type="text" placholder="cover" name="cover">',
    '<input type="text" placholder="author" name="author">',
    '<input type="submit" value="submit">'
  ].join('')
};
