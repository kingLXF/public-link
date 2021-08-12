var can=document.getElementById("can");
var ctx=can.getContext("2d");
var ang=0;
var wdt=screen.availWidth;
var hgt=screen.availHeight;
var circle={
    x:wdt/2,
    y:hgt/2,
    r:hgt/2-hgt/14
}
function drawTaiji(){
var sinA=Math.sin(ang);
var cosA=Math.cos(ang);
ctx.beginPath();
ctx.arc(circle.x,circle.y,circle.r,0+ang,Math.PI+ang,true);
ctx.fillStyle="#ff0000";
ctx.fill();
ctx.strokeStyle="#ff0000";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(circle.x,circle.y,circle.r,0+ang,Math.PI+ang,false);
ctx.fillStyle="#000000";
ctx.fill();
ctx.strokeStyle="#000000";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(circle.x-circle.r/2+(1-cosA)*circle.r/2,circle.y-sinA*circle.r/2,circle.r/2,0+ang,Math.PI+ang,true);
ctx.fillStyle="#000000";
ctx.fill();
ctx.strokeStyle="#000000";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(circle.x+circle.r/2-(1-cosA)*circle.r/2,circle.y+sinA*circle.r/2,circle.r/2,0+ang,Math.PI+ang,false);
ctx.fillStyle="#ff0000";
ctx.fill();
ctx.strokeStyle="#ff0000";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(circle.x-circle.r/2+(1-cosA)*circle.r/2,circle.y-sinA*circle.r/2,circle.r/10,0,Math.PI*2,false);
ctx.fillStyle="#ff0000";
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(circle.x+circle.r/2-(1-cosA)*circle.r/2,circle.y+sinA*circle.r/2,circle.r/10,0,Math.PI*2,true);
ctx.fillStyle="#000000";
ctx.fill();
ctx.stroke();
ctx.closePath();

ang+=0.02;
}
setInterval(drawTaiji,50);

/*---------written by Xingfan,Liu----------
---------QQ:2482273676----------*/
