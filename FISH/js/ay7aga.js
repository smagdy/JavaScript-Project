/*window.onload =function(){*/
	game=document.getElementById("game");
	

	var imgs=[];
	var bigFish=[];

	function creatSmallFish()
	{
		
		var img=document.createElement("img");
		img.setAttribute("src","images/big_right_L1.png" );
		img.setAttribute("style","position:absolute ;TOP:0px; LEFT:0px ; width:50px ; hieght:50px");
		img.setAttribute("id","small1");

		var img1=document.createElement("img");
		img1.setAttribute("src","images/big_left_L1.png" );
		img1.setAttribute("style","position:absolute ;TOP:500px; LEFT:1000px  ; width:50px ; hieght:50px");
		img1.setAttribute("id","small2");

		var img2=document.createElement("img");
		img2.setAttribute("src","images/big_left_L1.png" );
		img2.setAttribute("id","small3" );
		img2.setAttribute("style","position:absolute ;TOP:0px; LEFT:1000px ; width:50px ; hieght:50px");


		game.appendChild(img);
		game.appendChild(img1);
		game.appendChild(img2);
	}

	function creatMidFish()
	{
		
		var img=document.createElement("img");
		img.setAttribute("src","images/small_right_L3.png" );
		img.setAttribute("style","position:absolute ;TOP:200px; LEFT:0px ; width:50px ; hieght:50px");
		img.setAttribute("id","mid1");

		var img1=document.createElement("img");
		img1.setAttribute("src","images/small_left_L3.png" );
		img1.setAttribute("style","position:absolute ;TOP:1000px; LEFT:50px  ; width:50px ; hieght:50px");
		img.setAttribute("id","mid2");

		var img2=document.createElement("img");
		img2.setAttribute("src","images/small_left_L3.png" );
		img2.setAttribute("id","other" );
		img2.setAttribute("style","position:absolute ;TOP:0px; LEFT:1000px  ; width:50px ; hieght:50px");
		img.setAttribute("id","mid3");


		game.appendChild(img);
		game.appendChild(img1);
		game.appendChild(img2);
	}

	function creatBigFish()
	{
		var img=document.createElement("img");
		img.setAttribute("src","images/big_left_L1.png" );
		img.setAttribute("style","position:absolute ;TOP:200; LEFT:0px");

		/*var img1=document.createElement("img");
		img1.setAttribute("src","images/small_left_L1.gif" );
		img1.setAttribute("style","position:absolute ;TOP:500px; LEFT:1000px");

		var img2=document.createElement("img");
		img2.setAttribute("src","images/small_left_L1.gif" );
		img2.setAttribute("id","other" );
		img2.setAttribute("style","position:absolute ;TOP:0px; LEFT:1200px");

*/
		game.appendChild(img);
		//game.appendChild(img1);
		//game.appendChild(img2);
	}


	setInterval(function (){

		move();

	},100);
	setInterval(function(){
		creatSmallFish();
	},3000);

	setInterval(function (){

		moveMid();

	},100);
	setInterval(function(){
		creatMidFish();
	},4000);

	function move()
	
	{
		imgs=document.getElementsByTagName("img");

		for (var i = 0; i < imgs.length; i++) {

			var l=get_random(-2,10);
			var t=get_random(-2,10);


				if (imgs[i].id="small1") {


					imgs[i].style.left=parseInt(imgs[i].style.left)+l+"px";
					imgs[i].style.top=parseInt(imgs[i].style.top)+t+"px";
				

					
			
				}

				else if(imgs[i].id=="small3")
				{
					imgs[i].style.left=parseInt(imgs[i].style.left)-l+"px";
					imgs[i].style.top=parseInt(imgs[i].style.top)-t+"px";

				/*	if(parseInt(imgs[i].style.left)>600)
						{
							game.removeChild(imgs[i]);
							i--;
						}*/
				}

				else if (imgs[i].id=="small2"){
				imgs[i].style.left=parseInt(imgs[i].style.left)-l+"px";
				imgs[i].style.top=parseInt(imgs[i].style.top)+t+"px";
				
				
				}
				if(parseInt(imgs[i].style.left)>1300)
						{
							game.removeChild(imgs[i]);
							i--;
						}

		}
	}
	function moveMid()
	
	{
		imgs=document.getElementsByTagName("img");

		for (var i = 0;imgs.length < imgs.length; i++) {

			var l=get_random(-2,10);
			var t=get_random(-2,10);


				if (imgs[i].id="mid1") {


					imgs[i].style.left=parseInt(imgs[i].style.left)+l+"px";
					imgs[i].style.top=parseInt(imgs[i].style.top)+t+"px";
				
/*
					if(parseInt(imgs[i].style.left)>600)
						{
							game.removeChild(imgs[i]);
							i--;
						}*/
			
				}

				else if(imgs[i].id=="mid3")
				{
					imgs[i].style.left=parseInt(imgs[i].style.left)+l+"px";
					imgs[i].style.top=parseInt(imgs[i].style.top)-t+"px";

				/*	if(parseInt(imgs[i].style.left)>600)
						{
							game.removeChild(imgs[i]);
							i--;
						}*/
				}

				else if (imgs[i].id=="mid2"){
				imgs[i].style.left=parseInt(imgs[i].style.left)+l+"px";
				imgs[i].style.top=parseInt(imgs[i].style.top)-t+"px";
				
				
				}

		}
	}


	function get_random(min,max)
	{
	    return Math.floor((Math.random())*(max-min)+min);
	}
		
//}