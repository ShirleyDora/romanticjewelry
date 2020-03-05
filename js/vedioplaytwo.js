/*Create by Shirley*/
var obj2=document.getElementById("videoPlay2");
obj2.onclick=function(){
	if(obj2.paused){
		obj2.play();
	}
	else{
		obj2.pause();
	}
}