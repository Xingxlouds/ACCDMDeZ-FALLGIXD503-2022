let colorBtn = document.getElementById("colorChange")
const mainSection = document.getElementById("mainSection")
const textBtn = document.getElementById("addText")
const imageBtn = document.getElementById("imageBtn")

console.log(colorBtn)

const addSomeText = () => {
    const someText = "Here is a bit of text."
    const htmlElem = document.createElement ("h1")
    htmlElem.innerText = someText

    mainSection.appendChild(htmlElem)
}
const addimage = () => {
    const imagURL = "https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png"
    const imgElem = document.createElement ("img")
    imgElem.src = imagURL
    imgElem.alt = "circle logo"

    mainSection.appendChild(imgElem)
}

imageBtn.addEventListener("click", addimage)

textBtn.addEventListener("click", addSomeText)

colorBtn.addEventListener("click", () => {

    let red = Math.random()*255
    let blue = Math.random()*255
    let green = Math.random()*255

    mainSection.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue +")"
})
