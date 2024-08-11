let arr = ["Rock","Paper","Scissor"]
var rbtn= "";
var player;
var bot
var u=0
var c=0
var count = 0
var user = prompt("Enter your name:")
// if(user==""){
//   alert("Enter your name first")
//   // user = prompt("Enter your name")
// }
// user = prompt("Enter your name")
document.getElementById("user1").innerHTML = `${user}`


function radiobtn(e){
     rbtn = e.target.value
    alert(`You clicked on ${rbtn}`)
}

function displayshow(e){
  if(count==10){
    // if(u>c){
    //   document.getElementById("output1").innerHTML= `${user} win the game`
    // }
    // else{
    //   document.getElementById("output1").innerHTML= `Bot win the game`
    // }
    alert("restart the game")
  }
  else{
    count = count + 1
    var a = Math.floor(Math.random()*3)
    player = rbtn.toLowerCase()
    bot = arr[a].toLowerCase()
    alert(`Bot has selected ${arr[a]}`)

    rules();
  }
}

function rules(){
  // count = count + 1
  if(player=="rock" && bot=="scissor"){
        u=u+1
        document.getElementById("usr").innerHTML = u;
        document.getElementById("output").innerHTML = `${user} Wins`
}
  if(player=="rock" && bot=="paper"){
        c=c+1;
        document.getElementById("cpt").innerHTML = c;
        document.getElementById("output").innerHTML = "Bot Wins"
}
if(player=="paper" && bot=="rock"){
        u=u+1
        document.getElementById("usr").innerHTML = u;      
        document.getElementById("output").innerHTML = `${user} Wins`
}
if(player=="paper" && bot=="scissor"){
        c=c+1;
        document.getElementById("cpt").innerHTML = c;
        document.getElementById("output").innerHTML = "Bot Wins"
}
if(player=="scissor" && bot=="rock"){
        c=c+1;
        document.getElementById("cpt").innerHTML = c;      
        document.getElementById("output").innerHTML = "Bot Wins"
}
if(player=="scissor" && bot=="paper"){
        u=u+1
        document.getElementById("usr").innerHTML = u;       
        document.getElementById("output").innerHTML = `${user} Wins`
}
  if(player == bot){
        c=c+1    
        u=u+1
        document.getElementById("cpt").innerHTML = c; 
        document.getElementById("usr").innerHTML = u;         
        document.getElementById("output").innerHTML = "Draw"
    }

    if(count==10){
     if(u>c){
      document.getElementById("output1").innerHTML= `${user} win the game`
    }
    else{
      document.getElementById("output1").innerHTML= `Bot win the game`
    }
  }
}

function saaf(e){
u = 0
c = 0 
count = 0
document.getElementById("usr").innerHTML = u; 
document.getElementById("cpt").innerHTML = c; 
document.getElementById("output").innerHTML = ""
// alert("Game Reseted Successfully")
}

function refresh(){
location.reload()
}
