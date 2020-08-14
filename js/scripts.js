"use strict"
window.onload = function(){
	let close_btns = document.getElementsByClassName("overlay-close");
	let menu_btn = document.getElementById("display_menu");
		menu_btn.addEventListener("click",display_menu);
	for(let i=0;i<close_btns.length;i++){
		close_btns[i].addEventListener("click",close_overlay);
	}

	for(var i=1;i<23;i++){
		let msgz = document.getElementById('msgz_div');
		let div = document.createElement('div');
		let img = document.createElement('img');
		let msg = "images/inspiration/msg"+i+".jpg";
		
		img.src = msg;
		div.appendChild(img);
		msgz.appendChild(div);
		msgz.appendChild(document.createElement('br'));
		
	}
}
function display_menu(){
	document.getElementById("menu-div").style.display = "block";
}
function close_overlay(){
	let el1 = document.getElementById(this.getAttribute('rep'));
	el1.style.display = "none";
}

//Hide menu on window scroll down
/*var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header_menu").style.top = "0";
  } else {
    document.getElementById("header_menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}*/
//Populate messages div