const loadText= document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load= 0

let int = setInterval(blurring,30)

function blurring() {
    load++

    if (load>99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%` // `${}` syntax is used to make use of a javascript expression. Javascript expression is added inside the curl.
    loadText.style.opacity = scale(load,0,100,1,0)     // here I want to increase the opacity in proportion to the value of load as it reaches the maximum value of 100
    bg.style.filter= `blur(${scale(load,0,100,30,0)}px)`      // here I want to set the blur to the value of 30 in the time range when load reaches the value of 100
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }