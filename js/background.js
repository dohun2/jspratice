const images = [
  "background1.jpg", "background2.jpg", "background3.jpg"
]

const body = document.querySelector("body");

const chosenImage = images[Math.floor(Math.random() * images.length)]


body.style.background = `url(img/${chosenImage}`;