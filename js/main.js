const modal = document.querySelector('.modal') // con estas linea estamos accediendo al DOM a través de Js
const button1 = document.querySelector('#button1') // con esta linea estamos accediendo al DOM a través de Js
const button2 = document.querySelector('#button2') // con esta linea estamos accediendo al DOM a través de Js
const button3 = document.querySelector('#button3') // con esta linea estamos accediendo al DOM a través de Js
const close = document.querySelector('.modal__content--close') // con esta linea estamos accediendo al DOM a través de Js

button1.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})
button2.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})
button3.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})
close.addEventListener('click', () => {
    modal.classList.add('hidden')
    modal.classList.remove('visible')
})