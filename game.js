// getting the canvas

class canv{
   constructor(){
   this.canvas= /**@type{HTMLCanvasElement} */ (document.querySelector("canvas"));
   this.canvas.width=900;
   this.canvas.height=500;
   this.c1=this.canvas.getContext("2d");
   this.c1.fillStyle="rgba(255,0,0,0.5)";
   this.x=Math.random()* this.canvas.width;

   this.y=100;
   this.pad_x=400;
   this.pad_dx=20;
   this.dx=3;
   this.dy=3;
   this.radius=30;
   this.innerHeight=500;
   this.innerWidth=900;
   this.newScore=0;
      
// storing the high score in local storage
if(localStorage.hasOwnProperty('hs')){
    document.getElementById("highScore").innerHTML=parseInt(localStorage.getItem("hs"));
}

// function for the movements
  this.animate = function(){
       console.log(this.c1);
       this.c1.clearRect(0,0,this.innerWidth,this.innerHeight);
       // this.anim=this.animate;
       // requestAnimationFrame(this.anim);
       this.c1.fillRect(this.pad_x,480,100,20);
       this.c1.beginPath();
       this.c1.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
       this.c1.fillStyle="red";
       this.c1.fill();
       this.c1.strokeStyle='red';
       this.c1.stroke();     
      
      
    
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
                if(newScore>localStorage.getItem("hs")){
                localStorage.setItem("hs",newScore);
                }
                
                //console.log(localStorage.getItem("hs"));  
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







