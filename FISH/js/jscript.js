// JavaScript Document
 var eatSmallCounter = 0 ;
 var eatMidCounter = 0 ;///////////////
 var eatDcounter = 0; 
 var score =0, wScore1 = 200, wScore2 =500 ,wScore3 =900, midScore = 100 /*score to be mid*/, bigScore = 650 /*score to be big*/;
 var wTime2 =5; 
 var level =1;
 var lives=3;
 var sec=0;
 var mint=0;
 var soundOn = false ;
 var musicOn=false;
 var myFish=1;
 var myFishSize=0;
 var game;
 var header;
 var sound;
//////////////////////////---start menu---/////////////////////////
function displayMenu(){             
//---------getElements------------------------------------------------	   
	   var menu = document.getElementById("menu");
       var newgame = document.getElementById("newgame");
	   var option = document.getElementById("option");
	   var help = document.getElementById("help");
	   var exit = document.getElementById("exit");
	   var music = document.getElementById("music");
	   sound=document.getElementById('sound');
//---------newgame ------------------------------------------------	   
	  newgame.onclick = function(){
		       game.removeChild(menu);
		   	   game.innerHTML = '<header></header><div id="menu" style="margin-bottom:15px"><h1 style="padding:40px 0 0 50px; margin:0px ;">CHOOSE CHAREACTER</h1><form><img width="200px" height="140px" style=" margin-top:20px;  margin-left:250px;" src="images/my_fish_right_big_1.gif" /><input  style=" width:30px; height:30px ;"  name="choice" class="radio" type="radio" value="1" /><br/><br/><img  width="200px" height="150px" style="margin-left:300px;" src="images/my_fish_right_big_2.gif" /><input style=" width:30px; height:30px ;" name="choice" class="radio" type="radio" value="2" /></form><button id="play"  style=" width:331px; height:68px ; background-image:url(images/done_score.png); margin-top:60px; margin-left:500px;"></button></div>'
			   var play = document.getElementById("play");
			   play.onclick = function(){
		   		    menu = document.getElementById("menu"); 
		   		    var inp =document.getElementsByClassName("radio");
				    if(inp[0].checked==true) myFish=1;
				    else if(inp[1].checked) myFish=2;
				    if(inp[0].checked||inp[1].checked){
				  		game.removeChild(menu);
				  		playNewGame();
				    }	  			
				}
			}
//---------option ------------------------------------------------	   
	 option.onclick= function(){
		     game.removeChild(menu);   
		     game.innerHTML ='<form style=" margin-top:0px ;padding:160px; text-align:center"><input id="musi" type="checkbox" style=" width:20px; height:20px ; margin-right:10px;" /> <img src="images/music.png" /><br/><br/><input id="sounds"  type="checkbox"  style=" width:20px; height:20px ; margin-right:10px;" /><img src="images/sound.png" /><br/><br/></form><button id="backmenu"  style=" width:330px; height:60px ; margin:20px;  background-image:url(images/done_score.png) ;margin-top:-50px; margin-left:400px;"></button></div>';
		   
		     var musi = document.getElementById("musi");
		     musi.checked=musicOn;
		     musi.onclick = function(){
			      if(musi.checked){
			      		musicOn=true;
			      		this.checked=true;
					    music.play();				  					  
				  }else{
						music.pause();
						musicOn=false;
						this.checked=false;
					}
		       }
			 var sounds = document.getElementById("sounds");
			 sounds.checked=soundOn;
		     sounds.onclick = function(){
			      if(sounds.checked){
					    soundOn = true ;
					    this.checked=true;			  					  
				  }else
				        soundOn = false ;
				        this.checked=true;
		       }
		    var backmenu = document.getElementById("backmenu") ;
		    backmenu.onclick = function(){
		    game.innerHTML =' <div id="menu"><img  src="images/imagename.jpg" /><br /><img id="newgame" src="images/new_1.png" /><br/><img id="option" src="images/options.png" /><br/><img id="help" src="images/help.png" /><br/><img id="exit" src="images/exit-3.png" /><br/></div>'
			displayMenu();
		  }		
	}
//---------help ------------------------------------------------	   
	 help.onclick= function(){
		   game.removeChild(menu);
		   game.innerHTML ='<div  style=" margin-top:0px ;padding:40px;font-size:18px;"><h1 style=" text-align:center; font-size:55px">Help</h1><ol><h3><li style="margin-top:20px">Eat fish that are smaller than you.</li><li style="margin-top:20px">Avoid fish that are bigger than you.</li><li style="margin-top:20px">Eat enough fish and you will be bigger.</li><h3></ol><div><button id="backmenu"  style=" width:331px; height:68px ; margin:20px;  background-image:url(images/done_score.png) ;margin-top:100px; margin-left:400px;"></button>';

           var backmenu = document.getElementById("backmenu") ;
		   backmenu.onclick = function(){
		    game.innerHTML =' <div id="menu"><img  src="images/imagename.jpg" /><br /><img id="newgame" src="images/new_1.png" /><br/><img id="option" src="images/options.png" /><br/><img id="help" src="images/help.png" /><br/><img id="exit" src="images/exit-3.png" /><br/></div>'
			displayMenu();  
		  }	
	 }	 
//---------exit-----------------------------------------------
     exit.onclick = function (){
		  game.removeChild(menu);
		  game.style.backgroundImage ='none';
		 }
}//end menu

////------------------newGame-----------------------
 function intiatHeader (){
		  header.style.minHeight = "120px";
	  ////--------------level-------
	      var sorc ;
	      var myFishsrc;
		  if(level == 1){sorc ='images/level1.png'}
	 	  else if (level == 2){sorc ='images/level2.png'}
		  else if (level == 3){sorc ='images/level3.png'}
		  createImg("levelImg","100px","left",sorc);
		  if(myFish==1) myFishsrc='images/my_fish_right_big_1.gif';
		  else  myFishsrc='images/my_fish_right_big_2.gif';
		  createImg("myFish","60px","left",myFishsrc);
		  //intialization		  	 
	  ////--------------score-------
		  varValue("myscore","scoreVal","left","80px","20px",0);    
	  ////--------------timer-------		  
		  varValue("timer","timerVal","left","80px","20px",'0:0'); 
	  ////--------------lives-------		  
		varValue("lives","livesVal","left","80px","20px",3); 
	  ////--------------fish(mid & inlevel 2,3 - small in level 1)-------	    
		 createImg("sFish","40px","right","images/small_right.png");
		 varValue("","smallNo","right","25px","25px",0);
		  //document.write(eatSmallCounter);
		 createImg("mFish","40px","right","images/mid_right.png");
		 varValue("","midNo","right","25px","25px",0);		
	  ////--------------diamond-------	  	 
		 createImg("diamon","40px","right","images/Diamon.png");
		 varValue("","diamNo","right","25px","25px",0);

		 function createImg(Iname,d,f,sorc){
				  Iname = document.createElement('img');
				  Iname.style.width = d;
				  Iname.style.height = d;
				  Iname.style.marginRight="20px";
				  Iname.style.cssFloat=f;
				  Iname.setAttribute('src',sorc);
				  header.appendChild(Iname);
			  }

		  function varValue (Vname,nameval,f,w,h,val){
			      var name = document.createElement('font');
				  name.textContent = Vname;
				  name.style.cssFloat = f;
				  header.appendChild(name); 
				  nameval = document.createElement('div');
				  nameval.style.width = w ;
				  nameval.style.height = h ;
				  nameval.style.backgroundColor = "black"
				  nameval.style.borderRadius = "80px"
				  nameval.style.margin = "5px";
				  nameval.style.cssFloat = f
				  nameval.style.textAlign = "center"
				  nameval.innerHTML = val;
				  header.appendChild(nameval); 
			  }     	
 }
 ////------timer----------------
  function timer(){
		if(sec==60){
			  sec=0;
			  mint+=1;
		}else sec++;
		var time=mint+":"+sec;
		updateHeader(5,time)
	}
/////////////mouseCurser////////////////////////////////////////
function mouseCurser(){ //myFishSize 0--small, 1---mid, 2----big
	var flag=false;
	var x1;
	var x2;
	game.addEventListener('mousemove',function(e){
		if(flag==false)
		{
			x1=e.clientX;
			flag=true;
		}
		else{
			x2=e.clientX;
			var dx=x2-x1;
			if(dx>0){
				if(myFish==1){
						if(myFishSize==0) this.style.cursor="url('images/my_fish_right_small_1.gif'),move";
						else if(myFishSize==1) this.style.cursor="url('images/my_fish_right_mid_1.gif'),move";
						else this.style.cursor="url('images/my_fish_right_big_1.gif'),move";
				}
				else{
						if(myFishSize==0) this.style.cursor="url('images/my_fish_right_small_2.gif'),move";
						else if(myFishSize==1) this.style.cursor="url('images/my_fish_right_mid_2.gif'),move";
						else this.style.cursor="url('images/my_fish_right_big_2.gif'),move";
				}
			}
			else{
				if(myFish==1){
						if(myFishSize==0) this.style.cursor="url('images/my_fish_left_small_1.gif'),move";
						else if(myFishSize==1) this.style.cursor="url('images/my_fish_left_mid_1.gif'),move";
						else this.style.cursor="url('images/my_fish_left_big_1.gif'),move";
				}
				else{
						if(myFishSize==0) this.style.cursor="url('images/my_fish_left_small_2.gif'),move";
						else if(myFishSize==1) this.style.cursor="url('images/my_fish_left_mid_2.gif'),move";
						else this.style.cursor="url('images/my_fish_left_big_2.gif'),move";
				}
			}
			flag=false;
		}
	});
}
////////-------creat fish----------------------//
function creatSmallFish()
	{
		var img=document.createElement("img");
		img.setAttribute("src","images/small_right.png" );
		img.setAttribute("style","position:absolute ;TOP:0px; LEFT:0px ; width:50px ; hieght:50px");
		img.setAttribute("id","small1");

		var img1=document.createElement("img");
		img1.setAttribute("src","images/small_left.png" );
		img1.setAttribute("style","position:absolute ;TOP:500px; LEFT:1000px  ; width:50px ; hieght:50px");
		img1.setAttribute("id","small2");

		var img2=document.createElement("img");
		img2.setAttribute("src","images/small_left.png" );
		img2.setAttribute("style","position:absolute ;TOP:0px; LEFT:1000px ; width:50px ; hieght:50px");
		img2.setAttribute("id","small3" );

		game.appendChild(img);
		game.appendChild(img1);
		game.appendChild(img2);
		///-------detect-------//
		img.addEventListener('mouseover',smallfish);
		img1.addEventListener('mouseover',smallfish);
		img2.addEventListener('mouseover',smallfish);
		function smallfish(){
			game.removeChild(this);
			detectSmall (true);
			if(soundOn){
				var source = sound.children[0];
				source.setAttribute('src','sounds/EATGULP.wav');
				sound.load();
				sound.play();
			}
		}
	}

	function creatMidFish()
	{		
		var img=document.createElement("img");
		img.setAttribute("src","images/mid_right.png" );
		img.setAttribute("style","position:absolute ;TOP:200px; LEFT:0px ; width:50px ; hieght:50px");
		img.setAttribute("id","mid1");

		var img1=document.createElement("img");
		img1.setAttribute("src","images/mid_left.png" );
		img1.setAttribute("style","position:absolute ;TOP:1000px; LEFT:50px  ; width:50px ; hieght:50px");
		img1.setAttribute("id","mid2");

		var img2=document.createElement("img");
		img2.setAttribute("src","images/mid_left.png" );
		img2.setAttribute("id","other" );
		img2.setAttribute("style","position:absolute ;TOP:0px; LEFT:1000px  ; width:50px ; hieght:50px");
		img2.setAttribute("id","mid3");

		game.appendChild(img);
		game.appendChild(img1);
		game.appendChild(img2);
		///-------detect-------//
		img.addEventListener('mouseover',midfish);
		img1.addEventListener('mouseover',midfish);
		img2.addEventListener('mouseover',midfish);
		function midfish(){
			if(myFishSize==0){
				lives--;
				updateHeader(7,lives);
				if(soundOn){
					var source = sound.children[0];
					source.setAttribute('src','sounds/schoolbonus.wav');
					sound.load();
					sound.play();
			   }
			  
			}
			else{
				game.removeChild(this);
				detectSmall (false);
				if(soundOn){
					var source = sound.children[0];
					source.setAttribute('src','sounds/EATGULP.wav');
					sound.load();
					sound.play();
			    }
			}
		}

	}

	function creatBigFish()
	{
		var img=document.createElement("img");
		img.setAttribute("src","images/big_left.png" );
		img.setAttribute("style","position:absolute ;TOP:200; LEFT:0px");
		img.setAttribute("class","big");

		/*var img1=document.createElement("img");
		img1.setAttribute("src","images/small_left_L1.gif" );
		img1.setAttribute("style","position:absolute ;TOP:500px; LEFT:1000px");

		var img2=document.createElement("img");
		img2.setAttribute("src","images/small_left_L1.gif" );
		img2.setAttribute("id","other" );
		img2.setAttribute("style","position:absolute ;TOP:0px; LEFT:1200px");*/
		game.appendChild(img);
		//game.appendChild(img1);
		//game.appendChild(img2);

		img.addEventListener('mouseover',bigfish);
		function bigfish(){
				lives--;
				updateHeader(7,lives);
				if(soundOn){
					var source = sound.children[0];
					source.setAttribute('src','sounds/schoolbonus.wav');
					sound.load();
					sound.play();
			   }
		}
	}
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
			else if (imgs[i].id=="small2"){
				imgs[i].style.left=parseInt(imgs[i].style.left)-l+"px";
				imgs[i].style.top=parseInt(imgs[i].style.top)+t+"px";	
			}
			else if(imgs[i].id=="small3"){
				imgs[i].style.left=parseInt(imgs[i].style.left)-l+"px";
				imgs[i].style.top=parseInt(imgs[i].style.top)-t+"px";

				/*	if(parseInt(imgs[i].style.left)>600)
						{
							game.removeChild(imgs[i]);
							i--;
						}*/
			}
			if(parseInt(imgs[i].style.left)>1300){
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
				
				/*if(parseInt(imgs[i].style.left)>600){
					game.removeChild(imgs[i]);
					i--;
				}*/
			}
			else if(imgs[i].id=="mid3"){
				imgs[i].style.left=parseInt(imgs[i].style.left)+l+"px";
				imgs[i].style.top=parseInt(imgs[i].style.top)-t+"px";

				/*if(parseInt(imgs[i].style.left)>600)
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
//--------------------play----------------------------------////
function playNewGame()
{
	header=document.getElementsByTagName('header')[0]; 
	mouseCurser(0);
	intiatHeader();
   	setInterval(timer,1000);
	setInterval(function(){creatSmallFish();},3000);
	setInterval(function (){move();},100);
	setInterval(function(){creatMidFish();},4000);
	setInterval(function (){moveMid();},100);
	creatBigFish();
}
//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
 ///----------update-----------------
  function updateHeader(id,val){
  		if(id==7&&val==0) GameOver();
		var ele=header.children[id];
		ele.innerHTML=val ;
	}
///----------------------------------
 function detectSmall (smallFish){
	  if(smallFish)///flag
	       eatSmallCounter++ ;
	  else
	       eatMidCounter ++ ;
	  checkLevel();  
     }
///----------------------------------
 function detectDiamon (){
	 eatDcounter ++ ;
	 checkLevel();
	 }
///----------------------------------
 function checkLevel(){
	  score = 10*eatSmallCounter+ 15*eatMidCounter + 20*eatDcounter ;//////special fish
	  updateHeader(10,eatSmallCounter);
	  updateHeader(13,eatMidCounter);
	  updateHeader(16,eatDcounter);
	  switch(level){
		  case 1 :
				 if(score < wScore1 && score <midScore){
					 updateHeader(3,score);
				 }else if (score < wScore1 && score >= midScore) {
					 updateHeader(3,score);
					 //change size (to mid)
					 myFishSize=1;
					 mouseCurser();
				 }else{
					 //update screen (switch to level 2)zinab with check timer
					 level=2;
					}
		         break ;
	      case 2 : 
		         if(mint < wTime2 && score < wScore2){
					  updateHeader(3,score);
				 }else if(mint < wTime2 && score > wScore2){
					  //update screen (switch to level 3) 
					  level=3;
				 }else {
					  //time up / /replay level 2 if want  
					 }				 
		         break ;
	      case 1 :
				 if(score < wScore3 && score < bigScore){
					 //update screen 
				 }else if (score < wScore3 && score >= bigScore) {
					 //update screen
					 //change size (to big)
				 }else{
					 //update screen (win)
					 }
		         break ;
	  }
 }	 

////////////////////////////////////////////////////
	
	function GameOver()
	{
		document.getElementsByTagName('body')[0].innerHTML ='<audio id="sound"><source src="sounds/EATGULP.wav" type="audio/mpeg"></source></audio><img src="images/gameover.gif"/>';
		if(soundOn){
			var source = sound.children[0];
			source.setAttribute('src','sounds/GAMEOVER.wav');
			sound.play();
		}
		
	}
//////////////////////////////
window.onload=function(){
	game =document.getElementById("game");
	displayMenu();
};