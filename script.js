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
//trzeba dac w stylu display:none a nie przez jsa

hideContentDivs(getDivsId(".content"));
showDiv("projects")

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
	console.log(cards)

	for (var i = 0; i <= cards.length-1; i++) {
		console.log(cards[i])
		cards[i].addEventListener("mouseenter", function(event){
			console.log(cards[i])
			this.classList.add("flipped");
		})
		cards[i].addEventListener("mouseleave",function(event){
			this.classList.remove("flipped");
		})
	}	

	//card flip

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


// EMAIL send - work, wait for rest  

// emailjs.send("gmail","template_3WfbauCe",{name: "James", notes: "Check this out!"})
// .then(function(response) {
//    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
// }, function(err) {
//    console.log("FAILED. error=", err);
// });