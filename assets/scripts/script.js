// Function that recovers the position of the image and text in the html and replaces the data with the one in the array.
function displayImgTxt(currentPosition, list) {
  // Img
  const img = document.querySelector(".banner-img")
  img.src = `./assets/images/slideshow/${list[currentPosition].image}`
  // Txt
  const txt = document.querySelector("#banner p")
  txt.innerHTML = `<p>${list[currentPosition].tagLine}<p>`
}

// Function that creates an empty dot for each object in the array and fills the first dot.
function dotsIntegration() {
  const dots = document.querySelector(".dots")
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("div")
    dot.classList.add("dot")
    if (i === 0) {
      dot.classList.add("dot_selected")
    }
    dots.appendChild(dot)
  }
}

// Function that fills the dot if it matches the current position and removes it if it does not.
function dotSelected(currentPosition) {
  const listDots = document.querySelectorAll(".dot")
  for (let i = 0; i < listDots.length; i++) {
    let dot = listDots[i]
    if (i === currentPosition) {
      dot.classList.add("dot_selected")
    }
    else {
      dot.classList.remove("dot_selected")
    }
  }
}

// Main function who changes banner after each clic on arrows.
function goCarousel () {
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
let max = slides.length -1 // Because we start with the first banner.
let index = 0

// Calls all the dots 
dotsIntegration()

arrowRight.addEventListener("click", () => {
  // Condition to go back to the first slide after the last one.
  if (index === max) {
    index = 0
    displayImgTxt(index, slides)
  } else {
    index++
    displayImgTxt(index, slides)
  }
  // Update the position of the full dot.
  dotSelected(index)
})

arrowLeft.addEventListener("click", () => {
  // Condition to go to the last banner from the first one.
  if (index === 0) {
    index = max
    displayImgTxt(index, slides)
  } else {
    index--
    displayImgTxt(index, slides)
  }
  // Updates the position of the full dot.
  dotSelected(index)
})
}