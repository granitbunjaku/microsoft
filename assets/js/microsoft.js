let sliderIndex = 0
let arrows = document.getElementsByClassName("arrow")
let dots = document.getElementsByClassName("dot")
let timeouti;
slider()

function slider() {
    const text = document.getElementsByClassName("text1")
    const body = document.getElementsByClassName("body")[0]

    for(let i=0; i<text.length; i++){
        text[i].style.display = "none"
    }

    for(let i=0; i<dots.length; i++){
        dots[i].classList.replace("fa-circle", "ph-circle")
    }
    
    if (sliderIndex >= 2) sliderIndex=0

    if (sliderIndex < 0) sliderIndex=1

    text[sliderIndex].style.display = "flex"
    body.style.backgroundImage = `url('/assets/images/${sliderIndex}.jfif')`


    dots[sliderIndex].classList.replace("ph-circle", "fa-circle")
    timeouti=setTimeout(intervalFunc, 3000)
}

arrows[0].addEventListener("click", () => {
    sliderIndex--
    clearTimeout(timeouti)
    slider()
})

arrows[1].addEventListener("click", () => {
    sliderIndex++
    clearTimeout(timeouti)
    slider()
})

function intervalFunc() {
    sliderIndex++
    slider()
}

for (let i=0; i<dots.length; i++) {
    dots[i].addEventListener("click", () => {
        sliderIndex=i
        clearTimeout(timeouti)
        slider()
    })
}