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

// Método url - Nuevo

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


