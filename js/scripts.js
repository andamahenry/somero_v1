"use strict"

let total_inspirations = 45;//Total number of inspirational messages to display
let total_facts = 32;//Total number of fun-facts messages to display
let total_loops = 0;
let total_edu = 93;

let slide_number = 1;//Set initial inspirational slide number
let fact_number = 1;
let edu_number = 1;
let delayTime = 11000;//Set time for which to display quote before changing it
let delayTime1 = 3000;//Set time for which to display quote before changing it
let factDelay = 10000;
let eduDelay = 12000;//Set time interval for the educational slides
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
	//Call the educational slide function
	let edu_slide = window.setInterval(edu_slider,eduDelay);
	
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
	//Add event listener on the home message divs
	let homes = document.getElementsByTagName("img");
	for(let h=0;h<homes.length;h++){
		homes[h].addEventListener('click',homesFunction);
	}
	//Listen to menu items click functionality
	let menu1 = document.getElementsByClassName("menuItem");
	for(let m=0;m<menu1.length;m++){
		menu1[m].addEventListener('click',menuSelector);
		//Hide all divs and only display the home menu div on load
		if(menu1[m].id === "home_div"){
			menu1[m].click();
		}/*else{
			menu1[m].style.display = "none";
		}*/
	}
	//disable screen shots
	//window.addEventListener('keyup',kawaaniFunc);
}
//Display only the selected menu item div(s)
function menuSelector(){//Select menu to display when selected on menu list
	let menu2 = this.getAttribute('rep');
	let menu3 = document.getElementsByClassName('msgz');
	for(let m1=0;m1<menu3.length;m1++){
		if(menu3[m1].id === menu2){
			menu3[m1].style.display = "block";
		}else{
			menu3[m1].style.display = "none";
		}
	}
	//document.getElementById(menu2).display = "block";
	//console.log(menu2);
}
//Home message divs event handler
function homesFunction(){
	document.getElementById("imageZoomBtn").click();
	document.getElementById("zoomImg").src = this.src;
	
}
//Disable print screen
/*
function kawaaniFunc(e){
	let pressedKey = e.keyCode;
	if(e.keyCode == 44){
		e.preventDefault();
		//let kawaani = document.createElement('input');
		//	kawaani.setAttribute('value','Not Allowed!');
		//	document.body.appendChild(kawaani);
		//	kawaani.select();
		//	document.execCommand("copy");
			
	}else{return 0;}
	console.log(pressedKey);
}
*/
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
	setTimeout(function(){fact_div.style.width = '99.5%';},1000);
	setTimeout(function(){fact_div.style.width = '0px';},(factDelay-1000));
	fact_img.src = "images/fun-facts/fun"+fact_number+".jpg";
	if(fact_number == total_facts){//Reset fact counter at maxima
		fact_number = 1;
	}
	fact_number++;
}

function edu_slider(){
	let pos = 0;
	let div = document.getElementById("edu-inner-div");
	let edu = document.getElementById("edu-img");
	let start = setInterval(function(){
			pos+=5;
			div.style.right = pos+'%';
			if(pos==100){
				clearInterval(start);
				edu.src = "images/educational/edu"+edu_number+".jpg";
				div.style.right = '0px';
				edu_number++;
			}
			if(edu_number == total_edu){
				edu_number = 1;
			}
		},50);
}
function display_menu(){//Function to display the menu div
	document.getElementById("menu-div").style.display = "block";
}
function close_overlay(){
	let el1 = document.getElementById(this.getAttribute('rep'));
	el1.style.display = "none";
}

//Hide menu on window scroll down

