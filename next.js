const buttons = document.getElementById('c')
const hiddenButton = document.getElementById('h');
const numbers = ['Green']
    buttons.addEventListener('click', () => {

        event.target.style.color = numbers;
        buttons.textContent = 'CORRECT!';
        hiddenButton.style.display = 'inline-block'; 
});
hiddenButton.addEventListener('click', () => {
    window.location.href="next2.html"
});

const button = document.getElementById('d')
const number = ['red']
    button.addEventListener('click', () => {

        event.target.style.color = number;
        button.textContent = 'WRONG';
    });  

const butto = document.getElementById('s')
const numbe = ['red']
    butto.addEventListener('click', () => {

        event.target.style.color = number;
        butto.textContent = 'WRONG';
    });  g

const buttoi = document.getElementById('r')
const numb = ['red']
    buttoi.addEventListener('click', () => {

        event.target.style.color = numb;
        buttoi.textContent = 'WRONG';
    });  
