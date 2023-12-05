let canvas=document.querySelector('canvas');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
let c = canvas.getContext("2d");


let mouse={
    x:undefined,
    y:undefined
}
window.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y=e.y;
    console.log(e.x, e.y);
})


let colr='black'; 
function animate(){
    c.clearRect(0,0,canvas.width, canvas.height);

    c.beginPath();
    c.arc(700, 500, 80, 0, Math.PI*2, false);
    c.fillStyle='black';
    c.fill();
    
    c.beginPath();
c.arc(mouse.x, mouse.y, 30, 0, Math.PI*2, false);
r=Math.sqrt((mouse.y-500)*(mouse.y-500)+(mouse.x-700)*(mouse.x-700));
if (r<110) {c.fillStyle='red'} else
c.fillStyle='green';    
c.fill();

    requestAnimationFrame(animate);

}

animate();

