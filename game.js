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

if(localStorage.hasOwnProperty('hs')){
    document.getElementById("highScore").innerHTML=parseInt(localStorage.getItem("hs"));
}