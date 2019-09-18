let canvas=document.querySelector("canvas");
canvas.width=900;
canvas.height=500;

let c=canvas.getContext("2d");

 c.fillStyle="rgba(255,0,0,0.5)";
// c.fillRect(100,100,100,100);
// c.fillStyle="rgba(0,0,255,0.5)";
// c.fillRect(300,300,100,100);
// c.fillStyle="rgba(0,255,0,0.5)";
// c.fillRect(500,100,100,100);
// console.log(canvas);  

//line

// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(100,100);
// c.stroke();
// //c.beginPath();
// c.moveTo(100,600);
// c.lineTo(500,300);
// c.stroke();

//circle
// for(let i=0;i<3;i++){
//     let x=Math.random()* window.innerWidth;
//     let y=Math.random()* window.innerHeight;
// c.beginPath();
// c.arc(x,y,30,0,Math.PI*2,false);
// c.strokeStyle='red';
// c.stroke();
// }

let x=200;
let y=200;
let dx=4;
let dy=4;
let radius=30;
let innerHeight=500;
let innerWidth=900;
function animate(){
    c.clearRect(0,0,innerWidth,innerHeight); 
    requestAnimationFrame(animate);
    c.fillRect(0,475,100,20);
    c.beginPath();
    c.arc(x,y,radius,0,Math.PI*2,false);
    c.strokeStyle='red';
    c.stroke();
    
if(x+radius>innerWidth || x-radius < 0){
    dx=-dx;
}
if(y+radius>innerHeight || y-radius < 0){
    dy=-dy;
}

    x+=dx;
    y+=dy;
    // console.log('pop');
}


animate();