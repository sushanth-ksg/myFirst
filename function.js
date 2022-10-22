let n1 = Math.floor((Math.random()*6))+1
let n2 = Math.floor((Math.random()*6))+1
if(n1==1)
document.getElementById("a").setAttribute("src",'images/dice1.png')
else if(n1==2)
document.getElementById("a").setAttribute("src",'images/dice2.png')
else if(n1==3)
document.getElementById("a").setAttribute("src",'images/dice3.png')
else if(n1==4)
document.getElementById("a").setAttribute("src",'images/dice4.png')
else if(n1==5)
document.getElementById("a").setAttribute("src",'images/dice5.png')
else
document.getElementById("a").setAttribute("src",'images/dice6.png')
if(n2==1)
document.getElementById("b").setAttribute("src",'images/dice1.png')
else if(n2==2)
document.getElementById("b").setAttribute("src",'images/dice2.png')
else if(n2==3)
document.getElementById("b").setAttribute("src",'images/dice3.png')
else if(n2==4)
document.getElementById("b").setAttribute("src",'images/dice4.png')
else if(n2==5)
document.getElementById("b").setAttribute("src",'images/dice5.png')
else
document.getElementById("b").setAttribute("src",'images/dice6.png')
if(n1==n2)
document.getElementById("r").innerHTML="DRAW !!";
else if(n1>n2)
document.getElementById("r").innerHTML="Player 1 WON";
else
document.getElementById("r").innerHTML="player 2 WON";