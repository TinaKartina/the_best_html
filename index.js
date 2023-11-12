let button = document.querySelector('.button')
let kot = document.querySelector('.kot')
let phrases = document.querySelector('.phrases')
let mood = ['сконцетрированный котик',
'котик, который преисполнился в своём существовании..',
'уставший котик, который купил кофе в star_kot, надеясь стать лунным котом',
'котик, сидящий на диете (в прямом смысле)',
'котик скромняшка-букашка',
'сонный котик',
'объевшийся котик',
'котик, у которого нет мода на тикток',
'котик, которого ты киннишь']
let images = ['./kot_1.jpg',
            './kot_2.jpg',
            './kot_3.jpg',
            './kot_4.jpg',
            './kot_5.jpg',
            './kot_6.jpg',
            './kot_7.jpg',
            './kot_8.jpg',
            './kot_9.jpg']
function getRandomElement() {
    let randIndex = Math.floor(Math.floor(Math.random() * images.length));
    console.log(images[randIndex])
    return(randIndex)
}
console.log(button)
button.addEventListener('click', function(){
    let index = getRandomElement()
    kot.style.backgroundImage = `url(${images[index]})`
    phrases.innerHTML = mood[index] 
    console.log('kek')
})