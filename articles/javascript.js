
var articles = [
  {
    id: 1,
    title: 'Breaking News: Cat does not give a damn',
    content: `When did cats take over the internet? Dogs are cuter. Dogs can be trained. Dogs are literally called ‘man’s best friend!’ So why are cats, the jerks of the domesticated animal family, the darlings of the world wide web? And don’t think I’m a feline hater, I’m actually the proud co-parent of Fatty the tuxedo cat. But if I’m being real, I’d choose dogs over cats every day of the week.
    And yet with one motivational poster, cats can melt my heart and make me yearn to rub their bellies. So as a very serious journalist, a la Bridget Jones’ Diary (in the first movie), I decided to go directly to the source of cute-spiration to find the answers the world needed. But in all seriousness, I wanted to uncover the reasoning (if any) why this animal has dominated the internet for the better part of the 21st century.`,
    thumbnail: 'http://peoplecancode-public.s3.amazonaws.com/cat.jpg',
    author: 'Jessica Piller',
    created_at: '06.12.2017'
  },
  
  {
    id: 2,
    title: 'Bring The Christmas Spirit into Your Living Room',
    content: `Christmas decorations should all be about magic. What better way to welcome the holidays than focusing on what truly matters and turning your home into a magical place of joy?
    We’ve compiled a collection of beautiful living rooms featuring charming Christmas decorations. We believe that transforming the core of your home — wherever that may be — into a cozy and colorful interior allows that magic to take place.
    Whether you have a fireplace with stockings, a decorated Christmas tree, a colorful lighting installation or a creative message on one of the walls, the living room is the focal point of many residences and should set the tone for the entire house.
    We hope the photos below will help to inspire you this holiday season. Prefer less traditional decorations?.`,
    thumbnail: 'https://1.bp.blogspot.com/-oNJNKb4Jak0/WDzkGVNmnBI/AAAAAAAAPNg/373zvE75FXkmMpRf9C2U0EU-5KK4kjAdACEw/s640/IMG_7342.png',
    author: 'Victoria Reman',
    created_at: '22.12.2017'
  },

  {
    id: 3,
    title: "Interior Design's Most Popular Projects of 2017",
    content: `Luckily for one New York couple of empty-nesters, Interior Design Hall of Fame members Gisue Hariri and Mojgan Hariri know a thing or two about family dynamics—after all, the sisters are now in their fourth decade of running Hariri & Hariri Architecture, having previously studied together at Cornell University. And they used that knowledge to settle the couple into a more compact home while, at the same time, expanding their horizons.
    In view of the High Line park and the Hudson River, an easy arm’s length from the foodie mecca of Chelsea Market, and a stone’s throw from the meatpacking district’s mayhem, Google has a new home. With space split between two Chelsea landmarks, National Biscuit Company buildings from 1898 and 1913, and revamped by Interior Architects, the search engine’s sales team enjoys impressive digs that are nevertheless decidedly understated. The goal here was to play against type by celebrating the low-tech and the local..`,
    thumbnail: 'https://d4qwptktddc5f.cloudfront.net/thumbs_hariri_and_hariri_new_york_apartment_kitchen.jpg.770x0_q95.jpg" width="270px" height ="170px',
    author: 'Mike Roth',
    created_at: '22.12.2017'
  }
];


function getUrlParam(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results==null){
  return null;
  }
  else{
  return results[1] || 0;
  }
}
  
class Articles{
  constructor(id, title, thumbnail, content, author, created_at){
    this.id = id
    this.title = title;
    this.thumbnail = thumbnail;
    this.content = content;
    this.author = author,
    this.created_at = created_at
}

publishArticle() {
  var articleHtml = "<a href=\"article.html?id=" + 
  this.id + "\"><article class='article' id='article' onClick=\"\">\n  <div id='author'>\n <h2 id='h2'>" + 
  this.title + "</h2>\n <p class='article-meta'><strong>Author:</strong>" + 
  this.author + ", <strong>Published:</strong>" + 
  this.created_at + "</p>\n <div id='img' class='image-wrapper'>\n<img src=\"" + 
  this.thumbnail + "\" width='270px' height='170px'>\n</div>\n  </div>\n   <div class='text-div line'>\n <p id='text' class='text'>" + 
  this.content + "</p>\n   </div>\n</article>\n</a>";

 return articleHtml;
}

static fetchArticle() {
  var urlParam = getUrlParam('id');
  var id = parseInt(urlParam, 10);
  var single = articles.filter(function (article) {
  
  return article.id === id;
  
})[0];

  var singleHtml = '<article id="' + 
  single.id + '" class="article">\n  <h2>' + 
  single.title + '</h2>\n  <p class="article-meta"><strong>Author:</strong> ' + 
  single.author + ', <strong>Published:</strong> ' + single.created_at + '</p>\n  \n   <div class="image-wrapper">\n<img src="' + 
  single.thumbnail + '" width="270px" height ="170px">\n</div>\n  <div class="">\n  <p class="text">' + 
  single.content + '</p>\n  </div>\n</article>';
  
 return singleHtml;
 }
}

  var mainDiv = document.getElementById('main');
  var allContent = ''
  articles.forEach((article) => {
    var newArticle = new Articles(article.id, article.title, article.thumbnail, article.content, article.author, article.created_at);
    allContent += newArticle.publishArticle();
  })
  mainDiv.innerHTML = allContent;


  function getwords() {
    text = words.value;
    document.getElementById("para").innerHTML += '<div class="all_text">'+'<br>'+'<img src="http://lorempixel.com/50/50">' +'<p class="comm">'+ text+ '</p></div>'
    document.getElementById("words").value = ""
  }

  function goBack() {
    window.history.back();
}

  
 
//    document.getElementById("article").addEventListener("click", function(){
//   window.location.href = "article.html?id='+article.id";
//   // document.querySelector("div").style.display = "block";
//   // document.getElementById("comment").style.display = "block";
//   // document.getElementById("demo1").style.display = "block";

//   // var article = new Articles(document.getElementById("author").innerHTML, document.getElementById("text").innerText, document.getElementById("comment").innerHTML);
//   // a = document.getElementById("demo1");
//   // a.innerHTML = article.getInfo();
//   // var b = document.getElementById("text");
// });



/*
document.getElementById("article1").addEventListener("click", function(){
  window.location.href = 'article.html?param1=name&param2=&id=article';
  function getUrlParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
    return null;
    }
    else{
    return results[1] || 0;
    }
  }
getUrlParam("id");



  // document.querySelector("div").style.display = "block";
  // document.getElementById("comment2").style.display = "block";
  // document.getElementById("demo2").style.display = "block";

  // var article1 = new Articles(document.getElementById("author1").innerHTML, document.getElementById("text1").innerText, document.getElementById("comment2").innerHTML);
  // c = document.getElementById("demo2");
  // c.innerHTML = article1.getInfo();
  // var d = document.getElementById("text1");
});



var all_text="";
function tion() {
  var x = document.getElementById("myTextarea").value;
  all_text += "<div class='all_text'><img src='https://picsum.photos/200/300/?random' alt='' width='50px'>"+ x + "</div>"
  document.getElementById("demo").innerHTML = all_text;  
}


var all_text2 = "";
function tion2() {
  var x = document.getElementById("myTextarea2").value;
  all_text2 += "<div class='all_text'><img class='commentImg' src='https://picsum.photos/200/300/?random' alt='' width='50px'>"+ x + "</div>"
  document.getElementById("demoP").innerHTML = all_text2;  
}

*/
