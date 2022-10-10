// SLIDER

let sliderIndex = 0
let arrows = document.getElementsByClassName("arrow")
let dots = document.getElementsByClassName("dot")
let sliderTimeout;
slider()

function slider() {
    const text = document.getElementsByClassName("text1")
    const sliderBody = document.getElementsByClassName("slider-body")[0]

    for(let i=0; i<text.length; i++){
        text[i].style.display = "none"
    }

    for(let i=0; i<dots.length; i++){
        dots[i].classList.replace("fa-circle", "ph-circle")
    }
    
    if (sliderIndex >= 2) sliderIndex=0

    if (sliderIndex < 0) sliderIndex=1

    text[sliderIndex].style.display = "flex"
    sliderBody.style.backgroundImage = `url('/assets/images/${sliderIndex}.jfif')`


    dots[sliderIndex].classList.replace("ph-circle", "fa-circle")
    sliderTimeout=setTimeout(intervalFunc, 3000)
}

arrows[0].addEventListener("click", () => {
    sliderIndex--
    clearTimeout(sliderTimeout)
    slider()
})

arrows[1].addEventListener("click", () => {
    sliderIndex++
    clearTimeout(sliderTimeout)
    slider()
})

function intervalFunc() {
    sliderIndex++
    slider()
}

for (let i=0; i<dots.length; i++) {
    dots[i].addEventListener("click", () => {
        sliderIndex=i
        clearTimeout(sliderTimeout)
        slider()
    })
}

// LOGIN

let login = document.getElementsByClassName("login")
let loginform = document.getElementsByClassName("limiter")
let backToTop = document.getElementsByClassName("b-top")
let wrapLogin = document.getElementsByClassName("wrap-login100")
let body = document.body;


login[0].addEventListener("click", () => { loginform[0].style.display = "block"; body.style.overflow = "hidden"})
wrapLogin[0].addEventListener("click", (e) => { e.stopPropagation() })
loginform[0].addEventListener("click", () => { loginform[0].style.display = "none"; body.style.overflow = "auto"})

// GO BACK TO TOP

backToTop[0].addEventListener("click", () => {window.scrollTo(0, 0);})

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop[0].style.display = "block";
  } else {
    backToTop[0].style.display = "none";
  }
}

window.onscroll= () => {scrollFunction()}

// All Microsoft Menu

const allMicrosoft = document.getElementsByClassName("all-microsoft")
const navMenu = document.getElementsByClassName("menu1")

navMenu[0].addEventListener("click", () => {
    allMicrosoft[0].style.display = allMicrosoft[0].style.display == "none" ? "flex" : "none"; 
})
