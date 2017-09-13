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

hideContentDivs(getDivsId(".content"));
showDiv("about")

document.addEventListener("DOMContentLoaded", function(event){
	var menuItems = document.getElementById("menu").getElementsByTagName("li");
	for (var i = 0; i <= menuItems.length-1; i++) {
		menuItems[i].addEventListener("click", function(event){
			hideContentDivs(getDivsId(".content"));
			showDiv(this.dataset.class);
		})
	}
})