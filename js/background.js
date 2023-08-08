const images = [
    "blossom.jpg",
    "moon.jpg",
    "river.jpg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.style.width = "100vw";
bgImage.style.overflowX = "hidden";

document.body.appendChild(bgImage);