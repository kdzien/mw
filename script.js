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
		document.getElementById(divId+ending).style.display="flex"
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

hideContentDivs(getChildrenById(".content"));
hideContentDivs(getDivChildren(".title"));
showDiv("contact","")
showDiv("contact","-title")


document.addEventListener("DOMContentLoaded", function(event){

	var menuElements = document.getElementById("menu-items");
	//content
	var menuItems = document.getElementById("menu").getElementsByTagName("li");
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
	var textRegExp=/^[a-zA-Z]{50,}$/


	formValidation = function(){
		var email = checkInput(emailInput,emailRegExp);
		var name = checkInput(nameInput,nameRegExp);
		var message = checkInput(messageInput,textRegExp);
		if(message==true){
			console.log("true")
		}else{
			console.log("false")
		}
	}
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
})

var showContent = document.getElementById("showContent");
var welcome_title = document.getElementById("welcome-title")
showContent.addEventListener("click", function(event){
	var welcomeDiv=document.getElementById("welcome")
	welcomeDiv.style.animation="hideLeft 1.5s cubic-bezier(0.94, 0.04, 0, 1.26) forwards"
})
setTimeout(function(){
	showContent.style.opacity="1"
},2500)

	//menu//

// EMAIL send - work, wait for rest  

// emailjs.send("gmail","template_3WfbauCe",{name: "James", notes: "Check this out!"})
// .then(function(response) {
//    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
// }, function(err) {
//    console.log("FAILED. error=", err);
// });