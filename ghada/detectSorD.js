// JavaScript Document
 var eatSmallCounter = 0 ;
 var eatDcounter = 0 ; 
 var score =0, wScore1 = 200, wScore2 =500 ,wScore3 =900, midScore = 100 , bigScore = 650;
 var time , wTime2 = 5*60 ; 
 var level =1 ;
 
 function detectSmall (){
	  eatSmallCounter++ ;
	  checkLevel();	  
     }
 function detectDiamon (){
	 eatDcounter ++ ;
	 checkLevel();
	 }
 function checkLevel(){
	  score = 10*eatSmallCounter + 20*eatDcounter ;//////special fish
	  switch(level){
		  case 1 :
				 if(score < wScore1 && score <midScore){
					 //update screen 
				 }else if (score < wScore1 && score >= midScore) {
					 //update screen
					 //change size (to mid)
				 }else{
					 //update screen (switch to level 2)
					 }
		         break ;
	      case 2 : 
		         if(time < wTime2 && score < wScore2){
					  //update screen 
				 }else if(time < wTime2 && score > wScore2){
					  //update screen (switch to level 3) 
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
	 
 function updateScreen (){
	 
	      var header = document.getElementsByTagName('header')[0];
		  header.style.minHeight = "120px";
	//////--------------level-------
	      var levelImg = document.createElement('img');
		  levelImg.style.width ="100px";
		  levelImg.style.height ="100px";
		  levelImg.style.margin="7px";
		  levelImg.style.marginRight="20px";
		  levelImg.style.cssFloat="left";
          if(level == 1){levelImg.setAttribute('src','images/level1.png')}
	 	  else if (level == 2){levelImg.setAttribute('src','images/level2.png')}
		  else if (level == 3){levelImg.setAttribute('src','images/level3.png')}
		  header.appendChild(levelImg);
	//////---------------------	  
		  
 }
	
	updateScreen () ;
	
	
	
	
	
	
	
	 