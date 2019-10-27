function ch1(){
	document.getElementById("hidden1").classList.toggle("hidden");
	var x=document.getElementsByClassName("tohide");
	for(var i=0;i<x.length;i++){
		x[i].style.opacity="0.05";
	}
}
function c1(){
	document.getElementById("hidden1").classList.toggle("hidden");
	var x=document.getElementsByClassName("tohide");
	for(var i=0;i<x.length;i++){
		x[i].style.opacity="1";
	}
}
function ch2(){
	document.getElementById("hidden1").classList.toggle("hidden");
	document.getElementById("hidden2").classList.toggle("hidden");
	var x=document.getElementsByClassName("tohide");
	for(var i=0;i<x.length;i++){
		x[i].style.opacity="0.05";
	}
}
function c2(){
	document.getElementById("hidden2").classList.toggle("hidden");
	var x=document.getElementsByClassName("tohide");
	for(var i=0;i<x.length;i++){
		x[i].style.opacity="1";
	}
}