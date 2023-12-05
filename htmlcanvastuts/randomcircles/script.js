    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let c = canvas.getContext('2d');

    c.fillStyle="rgba(255, 0, 0, 0.1)";
    c.fillRect(100, 100, 100, 100);

    c.beginPath();
    c.moveTo(50,300);
    c.lineTo(300,100);
    c.lineTo(200, 100)
    c.strokeStyle= "red";
    c.stroke();
    
    let color=['red', 'blue', 'green', 'yellow'];
    for (let i = 0; i < 300; i++) {
        let x=Math.random()*window.innerWidth;
        let y=Math.random()*window.innerHeight;
        console.log(`X=${x} Y=${y}`);
        c.beginPath();
        c.arc(x, y, 30, 0, Math.PI*2, false);
        let r=(Math.trunc(Math.random()*10));
        if(r>3){
            c.strokeStyle='black';
        }
        else{
            c.strokeStyle=color[r];
        }
        c.stroke();
    }
   

    console.log(canvas);
