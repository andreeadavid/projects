(function($) {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'  
    })
    .then(function (response) {
      if(response.ok) {
        return response.json();
      }else if(!response.ok){
        throw new Error('An error occurred while processing your request. Please try again.');
      }
    })
    .then(getComments)
    .then(function (users) {
       displayUsers(users);
    })
    
    .catch(function (e) {
      $('body').append('<div class="error">' + '<strong>'+ 'Info! '+ '</strong>' + e.message + '</div>');
    })
   
     function getComments(users) {
      var post, commentPromises = [];
      users = users.slice(0, 6); // luam doar 5 post-uri
      for (var i = 0; i < users.length; i++) {
        post = users[i];
        post.comments = fetch( 'https://jsonplaceholder.typicode.com/users', {
          method: 'get'
        }).then(function(comments) {
            return comments.json(); });
      }
      return users;
    }
    
   function displayUsers(users) {
     users.forEach(function (currentUser){
       var bigContainer = $('#container');
       var container = $('<div class="comment page">');
       var page = $('<div class="blog">');
       var name = $('<p class="name">');
       var email = $('<p>');
       var address = $('<p>');
       var phone = $('<p>');
       page.appendTo(container)//div nou pt fiecare comment
       name.text(currentUser.name).appendTo(page);
       email.text(currentUser.email).appendTo(page);
       address.text(currentUser.address.city).appendTo(page);
       phone.text(currentUser.phone).appendTo(page);
       $(bigContainer).append(container);
      
       return bigContainer;
     });
   }
  })(jQuery);
  
  
  (function($) {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9d664baa3d334c7ab4456a7ee7b1461a', {
      method: 'get'
    })
    .then(function(response) {
      if(response.ok) {
        return response.json();
      }else if(!response.ok){
        throw new Error('An error occurred while processing your request. Please try again.');
      }
    })
    
     .then(function(object) {
       if(object.articles.length != 0){
      object.articles.forEach(function(article) {
       var secondContainer = $("#container-second");
       var container = $('<div class="page">');
       var blog = $('<div class="blog">');
       var title = $('<div class="blog title">');
       var description = $('<div class="blog content">');
       var author = $('<p>');
       var image = $('<p>');
       blog.appendTo(container);
       title.text(article.title).appendTo(blog);
       description.text(article.description).appendTo(blog);
       author.text(article.author).appendTo(description);
       image.text(article.urlToImage).appendTo(description);
       $(secondContainer).append(container);
        
       return secondContainer;
      })
    }
  })
    .catch(function (e) {
      $('body').append('<div class="error">' + '<strong>'+ 'Info! '+ '</strong>' + e.message + '</div>');
    })  
  })(jQuery);
  
  