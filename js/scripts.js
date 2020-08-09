"use strict"
window.onload = function(){
	let close_btns = document.getElementsByClassName("overlay-close");
	let menu_btn = document.getElementById("display_menu");
		menu_btn.addEventListener("click",display_menu);
	for(let i=0;i<close_btns.length;i++){
		close_btns[i].addEventListener("click",close_overlay);
	}
}
function display_menu(){
	document.getElementById("menu-div").style.display = "block";
}
function close_overlay(){
	let el1 = document.getElementById(this.getAttribute('rep'));
	el1.style.display = "none";
}
