// // Author:- Satyajit Dash and Roushan Raj
// // Game Title:- Ball Rescue

let canvas=document.querySelector("canvas");
canvas.height=500;
canvas.width=1000;
let c =canvas.getContext("2d");

c.fillStyle="rgba(255,0,0,0.4)";
let x=Math.random()*canvas.width;
let y=100;
let pad_x=400;
let pad_dx=20;
let dx=3;
let dy=3;
let radius=30;
let innerHeight=500;
let innerWidth=900;
let newScore=0;


function drawBall{
    c.beginPath();
    c.arc(x,y,radius,0,Math.PI*2);
    c.fillStyle="red";
    c.stroke="red";
    c.fill();
    c.closePath();
    c.stroke();

}

function drawPad(){
    c.beginPath();
    c.rect(pad_x,canvas.height-pad_dx);
    c.fillstyle="red";
    c.closePath;
}
function collision{
    if(count<=(rem-rem/7) && speedup1==0){
        if(dy<0)
          dy-=0.5;
        else
          dy+=0.5;
        if(dx<0)
         dx-=0.5;
        else
          dx+=0.5;
        paddleWidth+=2;
        speedup1=1;
     }
/*** If count of total bricks decreases to 20
     Increase the speed of ball and increase paddleWidth***/
     if(count<=(rem-2*rem/7) && speedup2==0){
        if(dy<0)
          dy-=1;
        else
          dy+=1;
        if(dx<0)
          dx-=1;
        else
          dx+=1;


        paddleWidth+=3;
        speedup2=1;
     }

     if(count<=(rem-3*rem/7) && speedup3==0){
        if(dy<0)
          dy-=1;
        else
          dy+=1;
        if(dx<0)
          dx-=1;
        else
          dx+=1;

        paddleWidth+=4;
        speedup3=1;
     }

     if(count<=(rem-4*rem/7) && speedup4==0){

       if(dy<0)
         dy-=1;
       else
         dy+=1;
       if(dx<0)
         dx-=1;
       else
         dx+=1;
        paddleWidth+=5;
        speedup4=1;

     }

     if(count<=(rem-5*rem/7) && speedup5==0){

        if(dy<0)
          dy-=1;
        else
         dy+=1;
        if(dx<0)
          dx-=1;
        else
         dx+=1;
        paddleWidth+=6;
        speedup5=1;

     }

     if(count<=(rem-6*rem/7) && speedup6==0){

       if(dy<0)
         dy-=1;
       else
         dy+=1;
       if(dx<0)
         dx-=1;
       else
         dx+=1;
        paddleWidth+=7;
        speedup6=1;

     }



}








if(localStorage.hasOwnProperty('hs')){
    document.getElementById("highScore").innerHTML=parseInt(localStorage.getItem("hs"));
}