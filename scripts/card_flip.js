var cards = document.getElementsByClassName("card")

for (var i = 0; i <= cards.length-1; i++) {
	cards[i].addEventListener("mouseenter", function(event){
		this.classList.add("flipped");
	})
	cards[i].addEventListener("mouseleave",function(event){
		this.classList.remove("flipped");
	})
}