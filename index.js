let button = document.querySelector('.button')
let kot = document.querySelector('.kot')
let images = ['./kot_1.jpg',
            './kot_2.jpg',
            './kot_4.jpg',
            './kot_5.jpg',
            './kot_6.jpg',
            './kot_7_jpg',
            './kot_8.jpg',
            './kot_9.jpg']
function getRandomElement() {
    let randIndex = Math.floor(Math.floor(Math.random() * images.length));
    return(images[randIndex])
}
console.log(button)
button.addEventListener('click', function(){
    let elem = getRandomElement()
    kot.style.backgroundImage = `url(${elem})`
    console.log('kek')
})