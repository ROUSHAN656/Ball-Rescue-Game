let canvas=document.querySelector("canvas");
canvas.width=900;
canvas.height=500;

let c=canvas.getContext("2d");

 c.fillStyle="rgba(255,0,0,0.5)";
let x=Math.random()* canvas.width;
let y=100;
let pad_x=400;
let pad_dx=20;
let dx=3;
let dy=3;
let radius=30;
let innerHeight=500;
let innerWidth=900;
var newScore=0;
function animate(){
    c.clearRect(0,0,innerWidth,innerHeight); 
    requestAnimationFrame(animate);
    c.fillRect(pad_x,480,100,20);
    document.onkeydown=move;
    function move(e){
        if(e.keyCode==39){           
            if(pad_x<800){
                pad_x+=pad_dx;
            }
        }
        if(e.keyCode==37){
            if(pad_x>0){
            pad_x-=pad_dx;
            }
        }
        canvas.width=900;
        c.fillRect(pad_x,475,100,20);    
}
    c.beginPath();
    c.arc(x,y,radius,0,Math.PI*2,false);
    c.fillStyle="red";
    c.fill();
    c.strokeStyle='red';
    c.stroke();
    
if(x+radius>innerWidth || x-radius < 0){
    dx=-dx;
}
if(y-radius < 0){
    dy=-dy;
}
    if((y+radius)>innerHeight){
            if((x>pad_x)&&(x<pad_x+100)){
                console.log("here")
                dy=-dy;
                newScore+=1;
                document.getElementById("score").innerHTML=newScore;             
            }
            else{
            //    alert("over");
            //    alert("game over");
                x = Math.random()* canvas.width;
                y = 100;
                newScore = 0;
                document.getElementById("score").innerHTML=newScore;
                // $("#gameOver").show();
                $("#agian").show;
                
               window.location.reload();                
            }
    }
    x+=dx;
    y+=dy;
    }
    //animate();
$("#start").click(function(){
    animate();
    $("#start").hide();
})  
// $("#agian").click(function(){
//     animate();
// })







