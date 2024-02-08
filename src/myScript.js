const d1=document.getElementsByClassName("img1");
const d2=document.getElementsByClassName("img2");
const dice = ["images/dice1.png", "images/dice2.png","images/dice3.png",
"images/dice4.png","images/dice5.png","images/dice6.png"]
var  random1 = Math.floor(Math.random()*6)+1;
d1[0].srcset = dice[random1];

var random2 = Math.floor(Math.random()*6)+1;
d2[0].srcset = dice[random2];

var winnerHeading = document.getElementsByTagName("h1");
var winnerText = checkWinner(random1, random2); 
winner[0].textContent = winnerText;
if(winnerText === "Player 1 Wins!"){
    
}


function checkWinner(random1, random2){
    if(random1===random2){
        return "DRAW"
    }
    var result= random1>random2?"Player 1 Wins!":"Player 2 Wins!";
    return result;
}