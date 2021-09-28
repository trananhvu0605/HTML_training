let index = 0;
const slideContainer = $('.slides')
const slideImages = [...$$('.slide')]

const IMG_WIDTH = 400
slideContainer.style.width = `
        $ { slideImages.length * IMG_WIDTH }
        px `



function next() {
    if (index < slideImages.length - 1) {
        index++
    } else {
        index = 0
    }
    slideContainer.style.transform = `translateX(-${IMG_WIDTH*index}px)`
}

function next() {
    if (index < slideImages.length - 1) {
        index++
    } else {
        index = 0
    }
    slideContainer.style.transform = `translateX(-${IMG_WIDTH*index}px)`
}
$('#next').addEventListener('click', () => {
    next()
})