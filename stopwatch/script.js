
const inputs=document.querySelectorAll("input");
const edateinput=document.getElementById("edate");
const submt=document.getElementById("submit");
let target=new Date();
submt.addEventListener("click",function(){
    target= new Date(edateinput.value);
})

function clock(){
    const present= new Date();
    diff=target.getTime()-present.getTime();
    days=Math.floor(diff/86400000)
    diff=diff-(days*86400000);

    hours=Math.floor(diff/ 3600000);
    diff=diff-(hours*3600000);

    minutes=Math.floor(diff/60000);
    diff=diff-(minutes*60000);

    seconds=Math.floor(diff/1000);
    inputs[1].value=seconds;
    inputs[2].value=minutes;
    inputs[3].value=hours;
    inputs[4].value=days;

}
setInterval(clock,1000);

clock();
