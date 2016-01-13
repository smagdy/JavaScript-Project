var dx=2;
var dy=2;
var x=0;
var y=0;
var index=0;
window.onload = function() {
	var canvas=document.getElementById("drawing"); 
	var context=canvas.getContext("2d"); 
	var background=new Image();
	background.src='image/body.png';
	context.drawImage(background,0,0,canvas.width, canvas.height);
	
	var img=new Array();
function drawimg(){
	img[index]=new Image();
	img[index].src='image/big_right.png';
    context.drawImage(img[index],x,y,20,20);
    index++;
    x+=dx;
    y+=dy;
    console.log(x);
    console.log(y);

    if (y>=100){dy=-1*dy;}
    else if (y<=0){dy=-1*dy;}
    else if (x>=100){dx=-1*dx;}
    else if (x<=0){dx=-1*dx;}
}
function removeimg()
{
	context.drawImage(background,0,0,canvas.width, canvas.height);
}
	setInterval(drawimg,100);
	setInterval(removeimg,195);
};
