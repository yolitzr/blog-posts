const express = require("express");
const app = express();

// register view engine
app.set('view engine', 'ejs')

// listen for request
app.listen(3000)

app.get('/', (req, res) => {
  const posts = [
    {title: 'Post de prueba 1', preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, id velit? Sint explicabo sit dolor iusto deleniti eligendi molestias soluta at'},
    {title: 'Post de prueba 2', preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, id velit? Sint explicabo sit dolor iusto deleniti eligendi molestias soluta at'},
    {title: 'Post de prueba 3', preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, id velit? Sint explicabo sit dolor iusto deleniti eligendi molestias soluta at'},
    {title: 'Post de prueba 4', preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, id velit? Sint explicabo sit dolor iusto deleniti eligendi molestias soluta at'}
  ];
  res.render('index', {
    title: 'Home',
    posts
  })
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  })
});

app.get('/posts/create', (req, res) => {
  res.render('create', {
    title: 'Create a Post'
  })
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Create a Post'
  })
})