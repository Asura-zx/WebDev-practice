//instead of lines, i could create fill circles and to seemingly increase stroke size by rotating through position x=rcos@ and y=rsin@ where r is distance from center(center of screen)
let canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let c=canvas.getContext('2d');


X=canvas.width/2;
Y=canvas.height/2; 
let colorstore=['red', 'black', 'green', 'blue', 'brown']

function Circle(x, y, radius, lwrarc,darc,color){
    this.x=x;
    this.y=y;
    this.lwrarc=lwrarc;
    this.upperarc=lwrarc+Math.PI/4;
    this.darc=darc;
    this.radius=radius;
    this.fillcolor=color;

    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,this.lwrarc, this.upperarc,false);
        c.strokeStyle=color;
        c.stroke(); 
    }
    this.update=function(){
        //interaction
        this.lwrarc+=this.darc;
        this.upperarc+=this.darc;
        this.draw();


    }

}

circlearray=[];

for( let i=0; i<20; i++){
    let x=X;
    let lwrarc=Math.random()*2*Math.PI;
    let darc=Math.random()*0.03;
    let y=Y;
    let color=colorstore[Math.trunc(Math.random()*4)];

    circle=new Circle(x,y, (i+20)*7, lwrarc,darc, color);
    circlearray.push(circle);
    circle.draw();  
 
    
}


function animate(){
        c.fillStyle='rgba(255,255,255,0.55)';
        c.fillRect(0,0,innerWidth, innerHeight);


for( let i=0; i<20; i++){
    circlearray[i].update();  

}
    requestAnimationFrame(animate);

}
animate();