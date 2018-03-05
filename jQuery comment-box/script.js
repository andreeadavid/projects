(function($) {
  var comments=[];
  var comment; 
  $(".comment-box__add-btn").on("click", addComment);  

  function addComment(e){
    var id = "comm"+ Math.floor(Math.random() * 1000) ;
    var email =  $(".email-field");
    var text = $(".comment-box__field");
 
     for(var i = 0; i < (id.length, email.length, text.length) ; i++){
        comment={
          "id": "<h4>" +  id + "<h4>",
           "email" : "<span class='email'>" + email.eq(i).val() + "</span>",
           "text" : "<p class='text'>" + text.eq(i).val() + "</p>" ,
         } 
      }

      comments.push(comment);
      e.preventDefault();
      displayComment();
    
   
    $(".comment__delete-btn").click(function(e) {
      var elm = $(this).parent().text().substr(0, $(this).parent().text().length-1);
           $(this).parent().remove();
           comments.splice(elm, 1);
       });
    }
 
      function displayComment(){
       var image = $("<img/>").attr("src", $(".image-field").val());
       var rem = $("<a class='comment__delete-btn'' href='#'>X</a>");
       var div = $("<div class='comment'></div");
       $(".comments").append(div);
       $(div).append(image); 
       $(div).append(rem);
       $(div).append(comment.id);
       $(div).append(comment.text);
       $(div).append(comment.email);
         
       
       $("input").val("");
       $("textarea").val("");
      } 	
   
 })(jQuery);