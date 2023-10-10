const button = document.querySelectorAll('.button');

const personas = document.querySelectorAll('.persona')

button.forEach((button,indice) => {
    button.addEventListener('click', () => {

        const buttonselection = document.querySelector('.button.selection');
        buttonselection.classList.remove("selection");

        const personaselect = document.querySelector('.persona.select');
        personaselect.classList.remove('select');

        button.classList.add('selection');

        personas[indice].classList.add('select');
    })
})