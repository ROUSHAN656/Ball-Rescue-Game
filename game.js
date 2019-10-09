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
      
      
    
if(this.x+this.radius>this.innerWidth || this.x-this.radius < 0){
    this.dx=-this.dx;
}
if(this.y-this.radius < 0){
    this.dy=-this.dy;
}
//      increamenting score
     
    if((this.y+this.radius)>this.innerHeight){
            if((this.x>this.pad_x)&&(this.x<this.pad_x+100)){
                console.log("here")
                this.dy=-this.dy;
                this.newScore+=1;
                document.getElementById("score").innerHTML=this.newScore; 
                         
            }
            else{
            //  When game is over
            //    alert("over");
            //    alert("game over");
                this.x = Math.random()* this.canvas.width;
                this.y = 100;
                if(this.newScore>localStorage.getItem("hs")){
                localStorage.setItem("hs",this.newScore);
                }
                
                //console.log(localStorage.getItem("hs"));  
                this.newScore = 0;
                document.getElementById("score").innerHTML=this.newScore;
                // $("#gameOver").show();
                $("#agian").show;
                
               window.location.reload();                
            }
    }
    this.x+=this.dx;
    this.y+=this.dy;
    }
//     Using arrow keys
      
 this.move=function(e){
    
//  right key
    
           if(e===39){
               if(this.pad_x<800){
                   this.pad_x+=this.pad_dx;
               }
           }
    
// left key    
           if(e===37){
               if(this.pad_x>0){
               this.pad_x-=this.pad_dx;
               }
           }
           this.innerWidth=900;
           this.c1.fillRect(this.pad_x,475,100,20);
   }
}

}
// creating object
let obj=new canv();
$("#start").on('click',function(){
// calling run function
   run();

   $("#start").hide();
})
function run(){
   obj.animate();
   requestAnimationFrame(run);
}
document.addEventListener("keydown",function(event){
   obj.move(event.keyCode);
  })







