"use strict"
//let SERVER_URL = "../../remote/somero_api/server_api.php";//localhost
//let SERVER_URL = "http://127.0.0.1/remote/somero_api/server_api.php";//localhost
//let SERVER_URL = "http://104.237.142.183/henry/somero_api/server_api.php";//remote
let SERVER_URL = "http://104.237.142.183/henry/somero_api/server_api.php";//remote

//Store universal user details
let UNIVERSAL_USER_DETAILS = 0;

//FUNCTION TO HANDLE SIMPLE SERVER REQUESTS
function server_requests(_src,_req,_arr,callback=null){//takes 3 arguments, the 4th is optional
	let request_loader_div = document.getElementById('request_loader_bg');
	if(!navigator.onLine){
		show_alert('warning','Please Turn On Mobile Data!');
		return 0;
	}
	request_loader_div.style.display = 'block';//display request loader
	let usource = _src;let ureq = _req;let uarr = JSON.stringify(_arr);
	let req = new XMLHttpRequest();//Set new request
	req.open("post",SERVER_URL,true);
	let payload = new FormData();
	payload.append('source',usource);//Request source
	payload.append('req',ureq);//Request type
	if(uarr !== 'undefined'){
		payload.append('load',uarr);//payload content should be a json array
	}
	req.send(payload);
	req.onload = function(){//Handle server response on load
		request_loader_div.style.display = 'none';//Hide request loader
		req.timeout = (30*1000);//Set request timeout
		if(this.status==200 && this.readyState==4){
			var resp = this.responseText;
			console.log('original => '+resp);
			var data = JSON.parse(resp);
			if(callback){callback(data);}
		}else{
			console.log(this.status+': '+this.responseText);
		}
	}
	req.onprogress = function(e){
		console.log('Processing'+e.loaded);
		request_loader_div.style.display = 'none';
		show_alert('info','Processing ...');
	}
	req.onerror = function(){
		console.log('Error: Cant connect');
		request_loader_div.style.display = 'none';
		show_alert('warning','Check if you have enough data balance and try again!');
	}
	req.ontimeout = function(){//On request timeout
		//show_alert('warning','Request Time Out!');
		request_loader_div.style.display = 'none';
		console.log('request time out');
	}
}
//Register new system users
function register_client(){//To handle client registration
	let invalidMsg = false;
	let clientInfo = {};//Set empty client details dictionary
	let stdregbtn = document.getElementById('register_btn');stdregbtn.addEventListener('click',function(){
		let fname = document.getElementById('fname').value;let sname = document.getElementById('sname').value;let tel = document.getElementById('tel').value;
		let email = document.getElementById('email').value;let pswd1 = document.getElementById('pswd1').value;let pswd2 = document.getElementById('pswd2').value;
		let genders = document.getElementsByName('gender');let cats = document.getElementsByName('category');
		for(let i=0;i<genders.length;i++){//Loop through the gender options
			if(genders[i].checked){
				var gender = genders[i].value;
				break;
			}
		}
		for(let j=0;j<cats.length;j++){
			if(cats[j].checked){
				var cat = cats[j].value;
				break;
			}
		}
		//Data sanitization and validation
		let formels = document.getElementsByClassName("sreg");
		for(let k=0;k<formels.length;k++){
			if(formels[k].required && formels[k].value == ""){
				//console.log(formels[k]);
				formels[k].style.backgroundColor = 'yellow';
				formels[k].style.borderColor = 'red';
				invalidMsg = true;
			}else if(formels[k].id == 'tel' && formels[k].value != ""){//Valid phone number
				let tel1 = formels[k].value;
				if(!isNaN(tel1) && ((tel1.startsWith('+') && tel1.length == 13) || (tel1.startsWith('0') && tel1.length == 10))){//if tel is number
					continue;
					invalidMsg = false;
				}else{
					formels[k].style.backgroundColor = 'yellow';
					formels[k].style.borderColor = 'red';
					show_alert('warning',"Please Enter A Valid Phone Number");
					return 0;
				}
			}else{
				formels[k].style.backgroundColor = 'white';
				formels[k].style.borderColor = 'black';
				invalidMsg = false;
			}
		}
		if(invalidMsg){//Notify incase of empty required fields
			show_alert('warning',"Please Fill All The Selected Fields");
			invalidMsg = false;
			return;
		}else{
			if(pswd1 !== pswd2){//Match passwords
				//invalidMsg = true;
				show_alert('warning',"Your Passwords Do Not Match!");
				return;
			}else{//If all is good and sanitization is done
				clientInfo['fname'] = fname;clientInfo['sname'] = sname;clientInfo['tel'] = tel;clientInfo['email'] = email;clientInfo['pswd'] = pswd2;
				clientInfo['email'] = email;clientInfo['gender'] = gender;clientInfo['cat'] = cat;
				//send user account details to the server
				closePopUp('register_close');//Close popup
				server_requests('user_accounts','reg',clientInfo,register_response);
			}
		}
	});
}
//Handle User login Session
function login_client(){
	let loginDetails = {};
	document.getElementById('login_btn').onclick = function(){
		let login_details = document.getElementsByClassName('login-details');
		for(let k=0;k<login_details.length;k++){
			if(login_details[k].name == 'tel'){//Check telephone number input field
				if(!isNaN(login_details[k].value) && ((login_details[k].value.startsWith('+') && login_details[k].value.length == 13) || (login_details[k].value.startsWith('0') && login_details[k].value.length == 10))){
					loginDetails['tel'] = login_details[k].value;
				}else{
					login_details[k].style.backgroundColor = 'yellow';
					login_details[k].style.borderColor = 'red';
					show_alert('warning',"Invalid Phone Number Provided!");
					return false;
				}
			}else if(login_details[k].name == 'pswd'){//Check password input field
				if(login_details[k].value != '' && login_details[k].value.match(/^[0-9a-zA-Z]+$/)){//Check password length
					loginDetails['pswd'] = login_details[k].value;
				}else{
					login_details[k].style.backgroundColor = 'yellow';
					login_details[k].style.borderColor = 'red';
					show_alert('warning',"Password must contain only letters and/or numbers!");
					return false
				}
			}	
		}
		closePopUp('login_close');//Close popup
		//Submit details to the server
		server_requests('user_accounts','login',loginDetails,login_response);
	};
}
//Handle user logout
function logout_client(){
	document.getElementById('main_logout_btn').addEventListener('click',function(){
		//console.log("Eh eh, kakola!");
		
		
		server_requests('user_accounts','logout','',logout_response);
	});
}

//THE SERVLET FUNCTION IS INITIATED IN THE SCRIPTS.JS IN THE ONLOAD FUNCTION
//MAIN SERVER ACTIVITY GOES HERE IN THIS FUNCTION
function servlet(){
	//server_requests('user_accounts','login','',test_function);//test functions
	//server_requests('connectionstatus','','',liveServerConnection);//ping live server
	register_client();//function for new client registration
	login_client();//Function to login client session
	logout_client();//Function to logout client session
	//show_alert('warning','haaaa, leero luno');
}
function closePopUp(_id){//Function to close all open popup buttons
	let popCloseBtns = document.getElementById(_id).click();//Get all popup close buttons
}
function main_cb_function(e){//handle server response after request submission
	console.log(e);
}
//This check for live server connection
function liveServerConnection(e){
	show_alert('info',e);
}
//This a server test function
function test_function(e){
	console.log(e);
}
//Handle account creation response
function register_response(e){
	show_alert('success',e.msg);

}

function login_response(e){//Handle login function activity
	if(e.status == "success"){
		show_alert('success',e.msg);
		UNIVERSAL_USER_DETAILS = e.data;
		let _userId = UNIVERSAL_USER_DETAILS['sno'];
		let _sessionId = e.id;
		//Assign user id and session id to there divs
		document.getElementById('user_id').innerText = _userId;
		document.getElementById('session_id').innerText = _sessionId;
		//Hide main menu login and register buttons
		document.getElementById("main_login_btn").style.display = 'none';
		document.getElementById("main_register_btn").style.display = 'none';
		document.getElementById("main_logout_btn").style.display = 'block';
		home1.click();//Navigate to default home page on successful login
		
		console.log(document.getElementById('user_id'));
		console.log(document.getElementById('session_id'));
		//console.log(UNIVERSAL_USER_DETAILS);
	}else{
		show_alert('warning',e.msg);
	}
}
function logout_response(e){//Handle server response when logout is performed
	show_alert('success',e.msg);
	if(e.status == "success"){
		//Reset user details from the app environment
		UNIVERSAL_USER_DETAILS = 0;
		//Assign user id and session id to there divs
		document.getElementById('user_id').innerText = '';
		document.getElementById('session_id').innerText = '';
		//Move to default welcome screen and display the main login and register menu buttons - instead
		home1.click();
		
		document.getElementById("main_login_btn").style.display = 'block';
		document.getElementById("main_register_btn").style.display = 'block';
		document.getElementById("main_logout_btn").style.display = 'none';
		
		console.log(e);
		//console.log(UNIVERSAL_USER_DETAILS);
	}
}
//Configurations for user menu items that require active login account
(function (){
	let crucials = document.getElementsByClassName("crucial");
	//console.log(UNIVERSAL_USER_DETAILS);//(crucials[m].innerText);
	for(let m=0;m<crucials.length;m++){
		crucials[m].onclick = function oyingidde(e){
			if(UNIVERSAL_USER_DETAILS == 0){
				crucials[m].removeEventListener('click',menuSelector,false);
				e.stopPropagation();
				e.preventDefault();
				show_alert('info','Please Login to Access this service!');
				return false;
			}else{
				for(let m=0;m<crucials.length;m++){
					crucials[m].addEventListener('click',menuSelector,true);
				}
			}
		};
	}	
}
)();