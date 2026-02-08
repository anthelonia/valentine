const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainImg = document.getElementById('img'); 
const title = document.querySelector('h1');

let noCount = 0;
const phrases = [
    "Na pewno?", 
    "Prrrrrrosze!", 
    "pookie...", 
    "Proooooszę!", 
    "No nie bądź mean!! :c"
];

noBtn.addEventListener('click', () => {
    noCount++;

    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.4) + 'px';
    yesBtn.style.padding = (currentSize * 0.7) + 'px ' + (currentSize * 1.2) + 'px';

    if (noCount === 3) {
        noBtn.innerHTML = `Nie <img src="nope.gif" class="nope-overlay">`;
        noBtn.classList.add('shake'); 
    } else if (noCount < phrases.length) {
        noBtn.innerText = phrases[noCount];
    } else {
        noBtn.innerText = "Nie masz wyboru! ❤️";
        noBtn.style.display = "none"; 
    }
}); 

function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}

yesBtn.addEventListener('click', () => {
    createHearts(); 
    title.innerText = "Kocham Cię! ❤️";
    mainImg.src = "exit.gif"; 
    document.querySelector('.buttons').style.display = 'none'; 
});