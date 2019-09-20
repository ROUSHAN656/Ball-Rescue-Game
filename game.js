// Author:- Satyajit Dash and Roushan Raj
// Game Title:- Ball Rescue


let canvas=document.querySelector("canvas");
canvas.width=900;
canvas.height=600;
let c=canvas.getContext("2d");
c.fillStyle="teal";
let x= Math.random() * canvas.width;