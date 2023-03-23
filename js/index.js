// Execution aside  

const $ = (selector) => document.querySelector(selector)

$("#btn-img").addEventListener("click", () => {
    $("#img-form").style.width = "250px"
    $("#text-form").style.width = "0"
})

$("#btn-img-close").addEventListener("click", () => {
    $("#img-form").style.width = "0px"
})

$("#btn-text").addEventListener("click", () => {
    $("#text-form").style.width = "250px"
    $("#img-form").style.width = "0"
})

$("#btn-text-close").addEventListener("click", () => {
    $("#text-form").style.width = "0px"
})

// Aside image inputs

const inputUrl = document.getElementById('url')
const containerImg = document.getElementById("container-img")
const inputBackground = document.getElementById("color")
const selectAttributes = document.getElementById("attributes")

// url 

inputUrl.addEventListener('input', () => {
  const imgUrl = inputUrl.value;
  containerImg.style.backgroundImage = `url(${imgUrl})`
  containerImg.style.backgroundSize = 'cover'
})

// Background

inputBackground.addEventListener("input", (e) => {
    containerImg.style.backgroundColor = e.target.value
})

// Color mix function

selectAttributes.addEventListener("change", (e) => {
     containerImg.style.backgroundBlendMode = e.target.value
})

// filter slide

brightness.addEventListener("change", () => {
    const brightness = $("#brightness").value
    containerImg.style.filter = `brightness(${brightness})`
})

opacity.addEventListener("change", () => {
    const opacity = $("#opacity").value
    containerImg.style.filter = `opacity(${opacity})`
})

contrast.addEventListener("change", () => {
    const contrast = $("#contrast").value
    containerImg.style.filter = `contrast(${contrast}%)`
})

blurFilter.addEventListener("change", () => {
    const blur = $("#blurFilter").value
    containerImg.style.filter = `blur(${blur}px)`
})

grayscale.addEventListener("change", () => {
    const grayscale = $("#grayscale").value
    containerImg.style.filter = `grayscale(${grayscale}%)`
})

sepia.addEventListener("change", () => {
    const sepia = $("#sepia").value
    containerImg.style.filter = `sepia(${sepia}%)`
})

hue.addEventListener("change", () => {
    const hue = $("#hue").value
    containerImg.style.filter = `hue-rotate(${hue}deg)`
})

saturate.addEventListener("change", () => {
    const saturate = $("#saturate").value
    containerImg.style.filter = `saturate(${saturate}%)`
})

invert.addEventListener("change", () => {
    const invert = $("#invert").value
    containerImg.style.filter = `invert(${invert})`
})

// reset filters

const reset = document.getElementById("btn-reset-filters")

$("#btn-reset-filters").addEventListener("click", () => {
    $('#brightness').value = 1
    $('#opacity').value = 1
    $('#contrast').value = 1
    $('#blurFilter').value = 0
    $('#grayscale').value = 0
    $('#sepia').value = 0
    $('#hue').value = 0
    $('#saturate').value = 100
    $('#invert').value = 0

    const brightness = $("#brightness").value
    containerImg.style.filter = `brightness(${brightness})`
    
    const opacity = $("#opacity").value
    containerImg.style.filter = `opacity(${opacity})`
    
    const contrast = $("#contrast").value
    containerImg.style.filter = `contrast(${contrast}%)`
    
    const blur = $("#blurFilter").value
    containerImg.style.filter = `blur(${blur}px)`
    
    const grayscale = $("#grayscale").value
    containerImg.style.filter = `grayscale(${grayscale}%)`
    
    const sepia = $("#sepia").value
    containerImg.style.filter = `sepia(${sepia}%)`
    
    const hue = $("#hue").value
    containerImg.style.filter = `hue-rotate(${hue}deg)`
    
    const saturate = $("#saturate").value
    containerImg.style.filter = `saturate(${saturate}%)`
    
    const invert = $("#invert").value
    containerImg.style.filter = `invert(${invert})`
})

// Aside text inputs

// Text

$("#top-text").addEventListener("input", () => {
    $("#container-top").innerText = $("#top-text").value
})

$("#bottom-text").addEventListener("input", () => {
    $("#container-bottom").innerText = $("#bottom-text").value
})

// checkbox 

const topCheckbox = document.getElementById("top-checkbox")
const bottomCheckbox = document.getElementById("bottom-checkbox")

$("#top-checkbox").addEventListener("input", () => {
     if ($("#top-checkbox").checked) {
         $("#container-top").classList.add("hidden")
     } else {
         $("#container-top").classList.remove("hidden")
     }
})

$("#bottom-checkbox").addEventListener("input", () => {
     if ($("#bottom-checkbox").checked) {
         $("#container-bottom").classList.add("hidden")
     } else {
         $("#container-bottom").classList.remove("hidden")
     }
})

// Font

const fontFamily = document.getElementById("font")

$("#font").addEventListener("input", () => {
    const font = $("#font").value
    $("#container-top").style.fontFamily = font
    $("#container-bottom").style.fontFamily = font
})

// Font size

const fontSize = document.getElementById("number") 

$("#number").addEventListener("input", () => {
    const number = $("#number").value
    $("#container-top").style.fontSize = `${number}px`
    $("#container-bottom").style.fontSize = `${number}px`
})

// Align text

const left = document.querySelector(".btn-left")
const center = document.querySelector(".btn-center")
const right = document.querySelector(".btn-right")

$(".btn-left").addEventListener("click", () => {
    $("#container-top").style.textAlign = "left"
    $("#container-bottom").style.textAlign = "left"
})

$(".btn-center").addEventListener("click", () => {
    $("#container-top").style.textAlign = "center"
    $("#container-bottom").style.textAlign = "center"
})

$(".btn-right").addEventListener("click", () => {
    $("#container-top").style.textAlign = "right"
    $("#container-bottom").style.textAlign = "right"
})

// Text color

const textColor = document.getElementById("text-color")

$("#text-color").addEventListener("input", () => {
    const text = $("#text-color").value
    $("#container-top").style.color = text
    $("#container-bottom").style.color = text
})

// Text background color

const textBackground = document.getElementById("text-color-background")
const checkboxTransparent = document.getElementById("checkbox-transparent")

$("#text-color-background").addEventListener("input", () => {
    const textBackground = $("#text-color-background").value
    $("#container-top").style.backgroundColor = textBackground
    $("#container-bottom").style.backgroundColor = textBackground
})

$("#checkbox-transparent").addEventListener("change", () => {
    if ($("#checkbox-transparent").checked) {
        $("#container-top").style.backgroundColor = `transparent`
        $("#container-bottom").style.backgroundColor = `transparent`
    } else {
        const textBackground = $("#text-color-background").value
        $("#container-top").style.backgroundColor = textBackground
        $("#container-bottom").style.backgroundColor = textBackground
    }
})

// Contour

const btnContour = document.getElementById("#btn-contour")
const btnContourLight = document.getElementById("#btn-contour-light")
const btnContourDark = document.getElementById("#btn-contour-dark")

$("#btn-contour").addEventListener("click", () => {
    $("#container-top").style.textShadow = "none" 
    $("#container-bottom").style.textShadow = "none" 
})

$("#btn-contour-light").addEventListener("click", () => {
    $("#container-top").style.textShadow = "2px 2px #fff,-2px 2px #fff,2px -2px #fff,-2px -2px #fff"
    $("#container-bottom").style.textShadow = "2px 2px #fff,-2px 2px #fff,2px -2px #fff,-2px -2px #fff"
})

$("#btn-contour-dark").addEventListener("click", () => {
    $("#container-top").style.textShadow = "2px 2px #000,-2px 2px #000,2px -2px #000,-2px -2px #000"
    $("#container-bottom").style.textShadow = "2px 2px #000,-2px 2px #000,2px -2px #000,-2px -2px #000"
})

// Spacing

const spacing = document.getElementById("#spacing")

$("#spacing").addEventListener("input", () => {
    const spacing = $("#spacing").value
    $("#container-top").style.padding = 
    $("#container-bottom").style.padding = `${spacing}px 50px`
})

// Line height

const lineHeight = document.getElementById("#leading")

$("#leading").addEventListener("input", () => {
    const lineHeight = $("#leading").value
    $("#container-top").style.lineHeight = `${lineHeight}px`
    $("#container-bottom").style.lineHeight = `${lineHeight}px`
})

// Download meme

const downloadMeme = () => {
    domtoimage.toBlob($('#container')).then((blob) => {
        saveAs(blob, 'container.png')
    })
}

$("#download-btn").addEventListener('click', downloadMeme)

// Dark theme

$(".button-section").addEventListener("click", () => {
    const currentTheme = $("body").getAttribute("data-theme")
    if (currentTheme) {
        $("#btn-dark-theme").classList.remove("hidden")
        $("#btn-light-theme").classList.add("hidden")
        $("body").removeAttribute("data-theme", "light-theme")
    } else {
        $("#btn-dark-theme").classList.add("hidden")
        $("#btn-light-theme").classList.remove("hidden")
        $("body").setAttribute("data-theme", "light-theme")
    }
})



