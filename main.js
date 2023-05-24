
var lastpositionx, lastpositiony;
canvas = document.getElementById("myCanvas");
ctx =canvas.getContext("2d");

color = "black";
line = 1;

var width = screen.width;

newWidth = screen.width - 70;
newHeight = screen.height - 300;

if(width < 992)
{
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}


    
canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e) {
    color = document.getElementById("color").value;
    line=document.getElementById("line").value;
    lastpositionx = e.touches[0].clientX - canvas.offsetLeft;
    lastpositiony = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e) {
    positionx = e.touches[0].clientX - canvas.offsetLeft;
    positiony = e.touches[0].clientY - canvas.offsetTop;

    
        ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line;
    ctx.moveTo(lastpositionx, lastpositiony);
    ctx.lineTo(positionx, positiony);
    ctx.stroke();
    
    
    lastpositionx = positionx;
    lastpositiony = positiony;
}



function limparArea() {
    ctx.clearRect(0,0, canvas.width, canvas.height);

}