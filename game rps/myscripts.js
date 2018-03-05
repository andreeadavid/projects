
var rock = "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-016-512.png";
var paper = "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-005-512.png";
var scissors = "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-009-512.png";
var choices = [rock, paper, scissors];

var user =  choices[Math.floor(Math.random()*3)];
var computer = choices[Math.floor(Math.random()*3)];
var img = document.getElementById("img");
var imgComp = document.getElementById("img-comp");
var result = document.getElementById("result");

function play(user, computer){
    var win = "User wins!";
    var lose = "Computer wins!";
    var draw = "The result it'a draw!";
    var r = choices[0];
    var p = choices[1];
    var s = choices[2];      

  if (user === computer) {
         return draw;
  }else if (user === r && computer === s || user === p && computer === r || user === s && computer === p) {
        return  win ;
  }else{
        return lose;
  }
}

// game.append("User choice: " + '\"' + user + '\"'  + '\n' +  "Computer choice: " + '\"' + computer + '\"' +  '\n' +'\n'+ play(user, computer));
img.src = user;
imgComp.src = computer;
result.append( play(user, computer));
