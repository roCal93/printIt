
// Listen click for each arrow
let arrows = document.querySelectorAll(".arrow img")

for (let arrowCount = 0; arrowCount < 1; arrowCount ++) {

	arrows[0].addEventListener("click", () => {
		console.log("arrowsLeft")
	})
	arrows[1].addEventListener("click", () => {
		console.log("arrowsRight")
	})
}

// Dots integration 
for (let i = 0; i < slides.length; i ++) {
	let dot = document.createElement("div")
	let dots = document.querySelector(".dots")
	dots.appendChild(dot)
	dot.classList.add("dot")
}


