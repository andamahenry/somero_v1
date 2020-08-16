"use strict"

let total_inspirations = 45;//Total number of inspirational messages to display
let total_facts = 32;//Total number of fun-facts messages to display
let total_loops = 0;
let slide_number = 1;//Set initial inspirational slide number
let fact_number = 1;
let delayTime = 11000;//Set time for which to display quote before changing it
let delayTime1 = 3000;//Set time for which to display quote before changing it
let factDelay = 6000;
let fact_slide;

window.onload = function(){
	let close_btns = document.getElementsByClassName("overlay-close");
	let menu_btn = document.getElementById("display_menu");
		menu_btn.addEventListener("click",display_menu);
	for(let i=0;i<close_btns.length;i++){
		close_btns[i].addEventListener("click",close_overlay);
	}
	//Call the slide function for inspirational messages
	let insp_slide = window.setInterval(insp_slider,delayTime);
	
	//Call the slide function for fun-fact messages
	fact_slide = window.setInterval(fact_slider,factDelay);
	
	//populate messages div with inspirational quotes
	let msgz = document.getElementById('msgz_div');//Div to contain all messages
	for(let i=1;i<total_inspirations;i++){
		let div = document.createElement('div');//Div for each individual message
		let img = document.createElement('img');//Each message image
		let msg = "images/inspiration/msg"+i+".jpg";//Image message path/name
		div.setAttribute('class','insp_msg');
		img.src = msg;
		div.appendChild(img);
		msgz.appendChild(div);
		msgz.appendChild(document.createElement('br'));
	}
}
function insp_slider(){//Populate inspirational div at home page
	let insp_img = document.getElementsByClassName('slide_img');//Inspirational message image
	let insp_path = "images/inspiration/msg"+slide_number+".jpg";//Image message path/name
	let myTransition2 = setTimeout(function(){insp_img[0].style.width = '0%';},(delayTime-1000));
	insp_img[0].src = insp_path;
	//console.log(insp_img[0]);
	let myTransition1 = setTimeout(function(){insp_img[0].style.width = '99%';},(1000));
	//total_loops+=1;
	if(slide_number == total_inspirations){//Reset slide number after reaching the maximum
		slide_number = 1;
	}
	slide_number+=1;//Increase slide number by one to go to the hext slide pic
}
function fact_slider(){//Populate facts div at home page
	let fact_div = document.getElementById("enlighten");
	let fact_img = document.getElementById("fun-fact");
	setTimeout(function(){
			//fact_img.style.width = '99%';
			fact_div.style.width = '99%';
		},1000);
	let fact_path = "images/fun-facts/fun"+fact_number+".jpg";
	setTimeout(function(){
			//fact_img.style.width = '0px';
			fact_div.style.width = '0px';
		},(factDelay-1000));
	let req = new XMLHttpRequest();
	req.open('head',fact_path,true);
	req.send();
	req.onload = function(){
		let fact_img_src;
		//console.log(this.status);
		if(this.status == 200){
			fact_img.src = "images/fun-facts/fun"+fact_number+".jpg";
		}else if(this.status == 404){
			fact_img.src = "images/fun-facts/fun"+fact_number+".png";
			//clearInterval(fact_slide);
		}
		
		if(fact_number == total_facts){//Reset fact counter at maxima
			fact_number = 1;
		}
		fact_number++;
	}	
}
function display_menu(){//Function to display the menu div
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