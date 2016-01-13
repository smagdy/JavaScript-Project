// JavaScript Document
displayMenu();
function displayMenu(){
//---------getElements------------------------------------------------	   
       var game =document.getElementById("game");
	   var menu = document.getElementById("menu");
       var newgame = document.getElementById("newgame");
	   var option = document.getElementById("option");
	   var help = document.getElementById("help");
	   var exit = document.getElementById("exit");
	   var music = document.getElementById("music");
	   
//---------newgame ------------------------------------------------	   
	  newgame.onclick = function(){
		       game.removeChild(menu);
		   	   game.innerHTML = '<h1 style="padding:60px 0 0 80px; margin:0px ;">CHOOSE CHAREACTER</h1><form><img width="200px" height="160px" style=" margin-top:20px;  margin-left:300px;" src="images/my_fish_right.gif" /><input  style=" width:30px; height:30px ;"  name="choice" class="radio" type="radio" value="1" /><br/><br/><img  width="200px" height="150px" style="margin-left:300px;" src="images/small_right_L1.gif" /><input style=" width:30px; height:30px ;" name="choice" class="radio" type="radio" value="2" /></form><button id="/////////"  style=" width:200px; height:40px ;background-color:#fff; border-radius:5px ; color:#000; font-size:20px;  margin-top:60px; margin-left:590px;">NEXT</button>'
		   }
//---------option ------------------------------------------------	   
	 option.onclick= function(){
		     game.removeChild(menu);   
		     game.innerHTML ='<form style=" margin-top:0px ;padding:160px; text-align:center"><input id="musi" type="checkbox" style=" width:20px; height:20px ; margin-right:10px;" /><font size="30" >Music</font><br/><br/><input  type="checkbox"  style=" width:20px; height:20px ; margin-right:10px;" /><font size="30" >Sound</font><br/><br/></form><button id="backmenu"  style=" width:100px; height:30px ; margin:20px; background-color:#fff; border-radius:5px ; color:#000; font-size:20px; margin-top:-100px; margin-left:420px;">OK</button></div>';
		   
		     var musi = document.getElementById("musi");
		     musi.onclick = function(){
			      if(musi.checked){
					     music.play();				  					  
				  }else{
						music.pause();}
		       }
		    var backmenu = document.getElementById("backmenu") ;
		    backmenu.onclick = function(){
		    game.innerHTML =' <div id="menu"> <img  src="images/imagename.jpg" /><br /><img id="newgame" src="images/new_1.png" /><br/><img id="option" src="images/options.png" /><br/><img id="help" src="images/help.png" /><br/><img id="exit" src="images/exit-3.png" /><br/></div>'
			displayMenu();
		  }		
	}
//---------help ------------------------------------------------	   
	 help.onclick= function(){
		   game.removeChild(menu);
		   game.innerHTML ='<div  style=" margin-top:0px ;padding:40px;font-size:18px;"><h1 style=" text-align:center; font-size:55px">Help</h1><ol><h3><li style="margin-top:20px">Eat fish that are smaller than you.</li><li style="margin-top:20px">Avoid fish that are bigger than you.</li><li style="margin-top:20px">Eat enough fish and you will be bigger.</li><h3></ol><div><button id="backmenu"  style=" width:200px; height:40px ; margin:20px; background-color:#fff; border-radius:5px ; color:#000; font-size:20px;  margin-top:190px; margin-left:550px;">back To menu</button>';

           var backmenu = document.getElementById("backmenu") ;
		   backmenu.onclick = function(){
		    game.innerHTML =' <div id="menu"> <img  src="images/imagename.jpg" /><br /><img id="newgame" src="images/new_1.png" /><br/><img id="option" src="images/options.png" /><br/><img id="help" src="images/help.png" /><br/><img id="exit" src="images/exit-3.png" /><br/></div>'
			displayMenu();  
		  }	
	 }	 

//---------exit-----------------------------------------------
     exit.onclick = function (){
		  game.removeChild(menu);
		  game.style.backgroundImage ='none';
		 }
}