var root = 'https://jsonplaceholder.typicode.com';

$.ajax({
  url: root +  '/posts/6',
  method: 'GET',
  success: function(response) {
  $("body").append('<div class="container">' +'<h4 class="heading">'+ response.id + '&nbsp&nbsp'+ response.userId + '&nbsp&nbsp' + response.title + '</h4>' + '<p class="text">'+ response.body +'</p>'+'</div>');
  console.log(response)
 }
});

$.ajax({
  url: root + '/posts',
  method: 'POST',
  data:{
  title: 'explicabo et eos deleniti nostrum ab id repellendus',
  body: 'animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure',
  userId: 38
},
 success: function(response) {
  $('body').append('<div class="container"'+ '<h4>' + response.userId + '&nbsp&nbsp' + '</h4>' + '<p class="text">' + response.title + '</p>' + '<p class="text">' + response.body + '</p>')
  console.log(response);
 }
});


$.ajax({
  url: root + '/posts/6',
  method: 'PUT',
  data:{
  userId: 1,
  title: "in quibusdam tempore odit est dolorem",
  body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
},
 success: function(response) {
  $('body').append('<div class="container"'+ '<h4>' + response.id + '&nbsp&nbsp' + response.userId + '&nbsp&nbsp' + response.title + '</h4>' + '<p class="text">' + response.body + '</p>')
  console.log(response);
 }
});

$.ajax({
  url: root + '/posts/6',
  method: 'DELETE',
  success: function(response) {
  console.log(response); 
 }
});


$.ajax({
 url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9d664baa3d334c7ab4456a7ee7b1461a',
 method: 'GET',
 success: function(response) {

   if(response.articles.length !== 0) {
     response.articles.forEach(function(article) {
       $( "body" ).append( '<div class="page">' +'<div class="blog">' + '<div class="blog title">' + article.title+ '</div>' + '<div class="blog content">' + article.description + article.urlToImage+ '</div>' + '</div></div>' )
     })
   }
 }
});

   
   
   
   
   
   