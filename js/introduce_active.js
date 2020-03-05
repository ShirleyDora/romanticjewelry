/*Create by Hug*/
function numadd(){
	var obj=document.getElementById("text_box");
	if(obj.value>=9){
		return;
	}
	obj.value=parseInt(obj.value)+1;
}
function numremove(){
	var obj=document.getElementById("text_box");
	if(obj.value<=1){
		return;
	}
	obj.value=parseInt(obj.value)-1;
}