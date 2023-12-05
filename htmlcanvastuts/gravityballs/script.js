let canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let c = canvas.getContext('2d');

let colorstore=['red', 'blue', 'green', 'yellow', 'orange']

function Circle(x, y, radius, dy,color){
    this.x=x;
    this.y=y;
    this.dy=dy;
    this.radius=radius;
    this.gravity=0.2;
    this.friction=1.5;
    this.clr=color;

    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0, Math.PI*2,false);
        c.fillStyle=this.clr;
        c.fill();
        c.strokeStyle='black';
        c.stroke();
    }
    this.update=function(){
        if(this.y+this.radius>canvas.height){//same old collision
            if(this.dy>0)//had to do this because ball kept going below window/canvas since dy kept one increasing ig
            this.dy=-this.dy+this.friction;//increases downward velocity constantly
        else this.dy=0;//as soon as dy goes 0, it stops at zero. doesnot go negative
        }
        else{
            this.dy+=this.gravity;//
        }
        this.y+=this.dy;
        this.draw();
        }
    }

    circlearray=[];
    for( let i=0; i<100; i++){
        radius=Math.random()*30+20;
        let x=Math.random()*window.innerWidth-2*radius+radius;
        let y=Math.random()*window.innerHeight-2*radius+radius;
        let color=colorstore[Math.trunc(Math.random()*4)];
    
        circle=new Circle(x,y, radius, 2, color);
        circlearray.push(circle);   
        
    };
function animate(){
    c.clearRect(0,0,innerWidth, innerHeight);
    for( let i=0; i<100; i++){
        circlearray[i].update();     
    }
    requestAnimationFrame(animate);
}

animate();