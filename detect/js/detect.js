var dx=2;
var dy=2;
var x=50;
var y=50;
var index=0;
var A=[];
var B=[];
var C=[];
var type;
window.onload = function() {
	mouse();
	drawimg();
	detect();
	//setInterval(move,50);

};
function mouse(){
	var div=document.getElementById('game');
	var flag=false;
	var x1;
	var x2;
	div.addEventListener('mousemove',function(e){
		if(flag==false)
		{
			x1=e.clientX;
			flag=true;
		}
		else{
			x2=e.clientX;
			var dx=x2-x1;
			if(dx>0){
				div.style.cursor="url('image/my_fish_right.gif'),move";
				/*div.style.cursor.width='50px';
				div.style.cursor.height='50px';*/
			}
			else{
				div.style.cursor="url('image/my_fish.png'),move";
			}
			flag=false;
		}
	});
}
function drawimg(){
	var game=document.getElementById("game"); 
	var image=document.createElement('img');
	image.src='image/small_right.gif';
	image.style.position = "absolute";
    image.style.top =x;
    image.style.left =y;
	image.style.height='50px';
	image.style.width='50px';
	A.push(image);
	game.appendChild(image);
	}
	function move(){
    image.style.top = x;
    image.style.left =y;
    x+=10;
    y+=10;
}
function detect(){
		var game=document.getElementById("game"); 
		for(var i=0;i<A.length;i++)
		{
			A[i].addEventListener('mouseover',function(e){
				type=0;
				//sound play
				game.removeChild(this);
			});
		}
		for(i=0;i<B.length;i++)
		{
			B[i].addEventListener('mouseover',function(e){
				type=1;
				//sound play
				//game.removeChild(this);
			});
		}
		for(i=0;i<C.length;i++)
		{
			C[i].addEventListener('mouseover',function(e){
				type=2;
				//sound play
				game.removeChild(this);
			});
		}
}