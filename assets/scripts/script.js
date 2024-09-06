// Display img function 
function displayImgTxt(actualPosition, list) {
  // Img
  const img = document.querySelector(".banner-img")
  img.src = `./assets/images/slideshow/${list[actualPosition]["image"]}`
  // Txt
  const txt = document.querySelector("#banner p")
  const txtP = `<p>${list[actualPosition]["tagLine"]}<p>`
  txt.innerHTML = txtP
}

// Dots integration
function dotsIntegration() {
  const dots = document.querySelector(".dots")
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div")
    dot.classList.add("dot")
    if (i === 0) {
      dot.classList.add("dot_selected")
    }
    dots.appendChild(dot)
  }
}

// Function dot selected 
function dotSelected(actualPosition) {
  const listDots = document.querySelectorAll(".dot")
  for (let i = 0; i < listDots.length; i++) {
    dot = listDots[i]
    if (i === actualPosition) {
      dot.classList.add("dot_selected")
    }
    else {
      dot.classList.remove("dot_selected")
    }
  }
}

// Change banner after each clic on arrows
function goCarousel () {
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const max = slides.length -1 //because we start with the first banner
let index = 0

dotsIntegration()

arrowRight.addEventListener("click", () => {
  if (index === max) {
    index = 0
    displayImgTxt(index, slides)
  } else {
    index++
    displayImgTxt(index, slides)
  }
  dotSelected(index)
})

arrowLeft.addEventListener("click", () => {
  if (index === 0) {
    index = max
    displayImgTxt(index, slides)
  } else {
    index--
    displayImgTxt(index, slides)
  }
  dotSelected(index)
})
}