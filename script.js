var getChildrenById = function(className){
	var parent = document.querySelectorAll(className);

	var contentDivsIds= [];
	for (var i=0;i<=parent.length-1;i++){
		var current = parent[i].id;
		contentDivsIds.push(parent[i].id);
	}
	return contentDivsIds;
}
var getDivChildren = function(className){
	var parent = document.querySelector(className);
	var current = [];
	for (var i=0;i<=parent.children.length-1;i++){
		current.push(parent.children[i].id)
	}
	return current
}

var hideContentDivs = function(divsId){
	for(var i=0;i<=divsId.length-1;i++){
		document.getElementById(divsId[i]).style.display="none";

	}
}

var showDiv = function(divId,ending){
	if(window.innerWidth<780){
		document.getElementById(divId+ending).style.display="block"
	}else {
		if(divId=="about"){
			document.getElementById(divId+ending).style.display="block"
		}else{
			document.getElementById(divId+ending).style.display="flex"
		}
		
	}
	
	if(ending=="-title"){
		document.getElementById(divId+ending).style.animationName="slideLeft"
		return;
	}
	document.getElementById(divId+ending).style.animationName="showCnt"
}
var checkInput = function(element,regexp){
		if(element.value==""){
			return false;
		}
		else if(regexp.test(element.value)==true){
			return true;
		}else{
			return false;
		}
}



//polygons
var polygons = document.querySelectorAll('.hex');
var tech_title = document.getElementById("tech-title")
for (var i =0;i<=polygons.length-1;i++){
	polygons[i].addEventListener("mouseenter",function(event){
		tech_title.innerHTML=this.dataset.tech
	})
	polygons[i].addEventListener("mouseleave",function(event){
		tech_title.innerHTML="&nbsp;"
	})
}
//
//trzeba dac w stylu display:none a nie przez jsa

showDiv("about","")
showDiv("about","-title")


document.addEventListener("DOMContentLoaded", function(event){

	var menuElements = document.getElementById("menu-items");
	//content
	var menuItems = document.getElementById("menu").getElementsByTagName("li");
	menuItems[0].classList.add("menu-opacity");
	var menuOpen=false;
	var titleElements = document.querySelector('.title').children;
	for (var i = 0; i <= menuItems.length-1; i++) {
		menuItems[i].addEventListener("click", function(event){
			for (var i = 0; i <= menuItems.length-1; i++) {
				menuItems[i].classList.remove("menu-opacity");
			}
			this.classList.add("menu-opacity");
			hideContentDivs(getChildrenById(".content"));
			hideContentDivs(getDivChildren(".title"));
			showDiv(this.dataset.class,"");
			showDiv(this.dataset.class,"-title")
			setTimeout(function(){
				menuElements.style.animationName="slidedown"
				menuOpen=false;
			},200)
			
			for(var i =0; i<=titleElements.length-1;i++){
				if(titleElements[i].dataset.class==this.dataset.class){
					titleElements[i].style.display="block";	
					console.log(titleElements[i])
				}
			}
			
		})
	}
	//content
	//card filp

	var cards = document.getElementsByClassName("card")

	for (var i = 0; i <= cards.length-1; i++) {
		cards[i].addEventListener("mouseenter", function(event){
			this.classList.add("flipped");
		})
		cards[i].addEventListener("mouseleave",function(event){
			this.classList.remove("flipped");
		})
	}	

	//card flip

	//form//
	var form = document.getElementsByTagName("form")[0];
	var emailInput=form[1];
	var nameInput=form[0];
	var messageInput=form[2];
	var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	var nameRegExp=/^[a-zA-Z]{3,25}$/
	var textRegExp=/^.{50,}$/
	var formButton = document.getElementById("formsButton");
	formButton.disabled=true;



	formValidation = function(){
		var email = checkInput(emailInput,emailRegExp);
		var name = checkInput(nameInput,nameRegExp);
		var message = checkInput(messageInput,textRegExp);
		if(message==true && email==true && name==true){
			console.log("xd")
			//sendEmail(nameInput.value,messageInput.value,emailInput.value)
			formButton.disabled=false;
		}else{
			formButton.disabled=true;
			}
	}
	//formValidatonStyle
	var formElements = [
	{name:emailInput,regxp:emailRegExp},{name:nameInput,regxp:nameRegExp},{name:messageInput,regxp:textRegExp}
	]
	
	nameInput.addEventListener('input', function(event){
		formValidation();
		if(this.value==""){nameInput.classList.remove("wrong","correct")}
		else if(nameRegExp.test(this.value)==true){
			nameInput.classList.remove("wrong");
			nameInput.classList.add("correct");
		}else {
			nameInput.classList.remove("correct");

			nameInput.classList.add("wrong");
		}
	})
	emailInput.addEventListener("input", function(event){
		formValidation();
		if(this.value==""){emailInput.classList.remove("wrong","correct")}
		else if(emailRegExp.test(this.value)==true){
			emailInput.classList.remove("wrong");
			emailInput.classList.add("correct");
		}else {
			emailInput.classList.remove("correct");
			emailInput.classList.add("wrong");
		}
	})
	messageInput.addEventListener("input", function(event){
		formValidation();
		if(this.value==""){messageInput.classList.remove("wrong","correct")}
		else if(textRegExp.test(this.value)==true){
			messageInput.classList.remove("wrong");
			messageInput.classList.add("correct");
		}else {
			messageInput.classList.remove("correct");
			messageInput.classList.add("wrong");
		}
	})

	//form//

	//menu//
	var menuButton = document.getElementById("menu-button");
	menuButton.addEventListener("click", function(event){
		if(menuOpen==false){
			menuElements.style.animationName="slideup"
			menuOpen=true;
		}else {
			menuElements.style.animationName="slidedown"
			menuOpen=false;
		}
	})

circle=document.getElementById("circle-of-death");
returnMessage=document.getElementById("returnMessage");
returnMessage.style.display="none"
sendEmail = function(nm,text,email){
	circle.style.display="block";


	emailjs.send("gmail","template_3WfbauCe",{name: nameInput.value, notes: messageInput.value+emailInput.value})
	.then(function(response) {
		nameInput.value="";
		messageInput.value="";
		emailInput.value="";
		nameInput.classList.remove("correct","wrong");
		messageInput.classList.remove("correct","wrong");
		emailInput.classList.remove("correct","wrong");
		circle.style.display="none";
		returnMessage.style.color="#45db00";
		returnMessage.style.display="block"
		returnMessage.innerHTML="Wiadomość została wysłana";

	}, function(err) {
		returnMessage.style.color="#db0000";
		returnMessage.style.display="block"
		returnMessage.innerHTML="Wysłanie wiadomości nie powiodło się. Spróbuj później";
	});	
	setTimeout(function(){
		returnMessage.style.display="none"
	},5000)

	return false;
}
})

var showContent = document.getElementById("showContent");
var welcome_title = document.getElementById("welcome-title")
showContent.addEventListener("click", function(event){
	var welcomeDiv=document.getElementById("welcome")
	welcomeDiv.style.animation="hideLeft 1.5s cubic-bezier(0.94, 0.04, 0, 1.26) forwards"
	var main = document.getElementById("main");
	main.style.display="block"; 
})
setTimeout(function(){
	showContent.style.opacity="1"
},2500)

	//menu//

// EMAIL send - work, wait for rest  

