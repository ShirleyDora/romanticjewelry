/*Create by Kevin*/
window.onload=function(){
	var obj1=document.getElementById("videoPlay1");
	obj1.onclick=function(){
		if(obj1.paused){
			obj1.play();
		}
		else{
			obj1.pause();
		}
	}
}
