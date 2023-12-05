let canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


let c = canvas.getContext('2d');

let colorstore=['red', 'blue', 'green', 'yellow', 'orange']

let mouse={
    x:undefined,
    y:undefined
}
window.addEventListener('mousemove', function(event){
    mouse.x=event.x;
    mouse.y=event.y;
})  

function Circle(x, y, radius, dx, dy,radiusstorage, color){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radiusstorage=radiusstorage;
    this.radius=radius;
    this.fillcolor=color;

    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0, Math.PI*2,false);
        c.fillStyle=this.fillcolor;
        c.strokeStyle='black';
        c.stroke(); 
        c.fill();
    }
    this.update=function(){

        if(this.x+this.radius>canvas.width || this.x-this.radius<0){
            this.dx=-this.dx;
        }
        if(this.y+this.radius>canvas.height || this.y-this.radius<0){
            this.dy=-this.dy;

        }
        this.x=this.x+this.dx;

        this.y=this.y+this.dy;

        //interaction
        let r= 50;
        if((mouse.x-this.x)<r && (mouse.x-this.x)>-r && (mouse.y-this.y)<r && (mouse.y-this.y)>-r){
            if(this.radius<40)
            this.radius+=2;

        }
        else if (this.radius > radiusstorage) {
            this.radius = Math.max(radiusstorage, this.radius - 1);
        }
        
        
        this.draw();


    }

}

circlearray=[];

for( let i=0; i<500; i++){
    radius=Math.random()*10;
    let x=Math.random()*window.innerWidth-2*radius+radius;
    let dx=Math.random()-0.5;
    let dy=Math.random()-0.5;
    let y=Math.random()*window.innerHeight-2*radius+radius;
    let color=colorstore[Math.trunc(Math.random()*4)];

    circle=new Circle(x,y, radius, dx, dy, radius, color);
    circlearray.push(circle);
    circle.draw();  
 
    
}


let frameflag=0;
const animeframe=5;
function animate(){
    if(frameflag%animeframe==0){
        
        c.clearRect(0,0,innerWidth, innerHeight);


for( let i=0; i<500; i++){
    circlearray[i].update();  

}
    }
    frameflag++;
    requestAnimationFrame(animate);
}

animate();