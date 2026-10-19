document.getElementById("a").addEventListener("click", () => {
    window.scrollBy({
            top: 600,
            behavior: 'smooth'
            
        });
        
    });

document.getElementById("a").addEventListener("mouseenter", (event) => {
    event.target.style.opacity = '0';
});
        
document.getElementById("a").addEventListener("mouseleave", (event) => {
    event.target.style.opacity = '100';
});


const buttons = document.getElementById('b')
const numbers = ['red', 'yellow', 'orange', 'blue']
let currentIndexs = 0;
    buttons.addEventListener('mouseenter', () => {

        event.target.style.color = numbers[currentIndexs];

currentIndexs = (currentIndexs + 1) % numbers.length;
    });    

document.getElementById("c").addEventListener("click", (event) => {
    alert("ARE YOU SURE YOU WANT TO COUNTINUE")
    window.location.href = "next.html"
});
