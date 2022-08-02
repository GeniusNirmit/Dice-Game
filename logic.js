//Generating random variable for first player.
var random1=Math.floor(Math.random()*6)+1;
var randomnumber1="dice"+random1+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",randomnumber1);

//Generating random variable for second player.
var random2=Math.floor(Math.random()*6)+1;
var randomnumber2="dice"+random2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",randomnumber2);

//Conditionals for the winning position.
if(random1>random2)
{
  document.getElementById("Main_Line").innerHTML="Player 1 wins";
  document.querySelector("h1").style.fontSize="7rem";
  document.querySelector("h1").style.paddingBottom="100px";
}
else if(random1<random2)
{
  document.getElementById("Main_Line").innerHTML="Player 2 wins";
  document.querySelector("h1").style.fontSize="7rem";
  document.querySelector("h1").style.paddingBottom="100px";
}
else
{
  document.getElementById("Main_Line").innerHTML="Match Draw";
  document.querySelector("h1").style.fontSize="7rem";
  document.querySelector("h1").style.paddingBottom="100px";
}
