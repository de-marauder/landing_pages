const carousel = document.querySelector("#carousel-image-wrapper");

const carouselImages = [
    ["./images/cocacola.png", 'cola'],
    ["./images/fanta.png", 'fanta'],
    ["./images/sprite.png", 'sprite'],
];

let counter = 1;
setInterval(()=>{

    if (counter === carouselImages.length) {
        counter = 0
    }

    if (carousel.children.length !== 0) {

        const newImage = document.createElement('img');

        newImage.setAttribute('src', carouselImages[counter][0])
        newImage.setAttribute('alt', carouselImages[counter][1])

        const currImage = carousel.children[0];
        carousel.removeChild(currImage)

        carousel.appendChild(newImage)
    }

    counter++
}, 5000)