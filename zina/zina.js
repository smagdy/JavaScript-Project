window.onload =function(){
	Body=document.getElementById("Body");
	var left_to_right=1;
	var right_to_teft=1;

	var imgs=[];

	function creat()
	{
		var img=document.createElement("img");
		img.setAttribute("src","images/small_right_L1.gif" );
		img.setAttribute("style","position:relative ;TOP:0px; LEFT:0px");

		var img1=document.createElement("img");
		img1.setAttribute("src","images/small_left_L1.gif" );
		img1.setAttribute("style","position:relative ;TOP:400px; LEFT:800px");


		Body.appendChild(img);
		Body.appendChild(img1);
	}

	creat();

	setInterval(function (){

		move();

	},150);
	setInterval(function(){
		creat();
	},2000);

	function move()
	
	{
		imgs=document.getElementsByTagName("img");

		for (var i = 0; i < imgs.length; i++) {
				if ( i%2 ==0 && left_to_right ==1) {
				imgs[i].style.left=parseInt(imgs[i].style.left)+10+"px";
				imgs[i].style.top=parseInt(imgs[i].style.top)+10+"px";
				if(parseInt(imgs[i].style.left)>600)
					{
						Body.removeChild(imgs[i]);
					}
			
				}

				else{
				imgs[i].style.left=parseInt(imgs[i].style.left)-10+"px";
				imgs[i].style.top=parseInt(imgs[i].style.top)-10+"px";
				if(parseInt(imgs[i].style.left)<0)
					{
						Body.removeChild(imgs[i]);
					}
				
				}

		}
	}
}