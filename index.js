var randomNumber1=Math.ceil(6*Math.random());
var nameOfImage1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",nameOfImage1);
var randomNumber2=Math.ceil(6*Math.random());
var nameOfImage2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",nameOfImage2);
if(randomNumber1===randomNumber2)
document.querySelector("h1").innerHTML="Draw";
else if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="⛳Player 1 Wins";
else
document.querySelector("h1").innerHTML="Player 2 Wins⛳";
