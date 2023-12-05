let canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let ctx=canvas.getContext("2d");

var first=false;

function Circle(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    
    let draw=function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 30, 0, Math.PI*2, false);
        ctx.fillStyle='brown';
        ctx.fill;
    }
}

let circle=Circle(500, 500, 0, 0);
circle.draw();