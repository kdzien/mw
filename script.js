var getDivsId = function(className){
	var parent = document.querySelectorAll(className);
	var contentDivsIds= [];
	for (var i=0;i<=parent.length-1;i++){
		var current = parent[i].id;
		contentDivsIds.push(parent[i].id);
	}
	return contentDivsIds;
}
var hideContentDivs = function(divsId){
	for(var i=0;i<=divsId.length-1;i++){
		document.getElementById(divsId[i]).style.display="none";
	}
}
var showDiv = function(divId){
	document.getElementById(divId).style.display="flex"
}
var checkInput = function(element,regexp,promptElement){
	element.addEventListener("focusout",function(event){
		if(this.value==""){
			return;
		}
		else if(regexp.test(this.value)==true){
			console.log(this.value)
			this.classList.add("correct");
		}else{
			console.log(this.value)
			this.classList.add("wrong");
			promptElement.style.display="block";
		}
	})
}
//trzeba dac w stylu display:none a nie przez jsa

hideContentDivs(getDivsId(".content"));
showDiv("contact")

document.addEventListener("DOMContentLoaded", function(event){
	var menuItems = document.getElementById("menu").getElementsByTagName("li");
	for (var i = 0; i <= menuItems.length-1; i++) {
		menuItems[i].addEventListener("click", function(event){
			hideContentDivs(getDivsId(".content"));
			showDiv(this.dataset.class);
		})
	}

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
	var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	var nameRegExp=/^[a-zA-Z]{3,25}$/
	var emailPrompt = document.getElementById("wrong-prompt");
	emailInput.addEventListener("focus",function(event){
		this.classList.remove("correct","wrong")
		emailPrompt.style.display="none";
	})
	nameInput.addEventListener("focus",function(event){
		this.classList.remove("correct","wrong")
		emailPrompt.style.display="none";
	})
	checkInput(emailInput,emailRegExp,emailPrompt);
	checkInput(nameInput,nameRegExp);

	//form//

	//menu//
	var menuButton = document.getElementById("menu-button")
	var menuOpen=false;
	menuButton.addEventListener("click", function(event){
		var menuElements = document.getElementById(this.dataset.show)
		if(menuOpen==false){
			menuElements.style.animationName="slideup"
			menuOpen=true;
		}else {
			menuElements.style.animationName="slidedown"
			menuOpen=false;
		}
	})
})
	//menu//

// EMAIL send - work, wait for rest  

// emailjs.send("gmail","template_3WfbauCe",{name: "James", notes: "Check this out!"})
// .then(function(response) {
//    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
// }, function(err) {
//    console.log("FAILED. error=", err);
// });