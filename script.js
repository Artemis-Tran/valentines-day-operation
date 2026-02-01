const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainImg = document.getElementById('main-img');
const question = document.getElementById('question');
const heartsBg = document.getElementById('hearts-bg');

let noClickCount = 0;
const messages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "You're breaking my heart ;(",
];

// Initial State
let currentYesSize = 1;
let currentNoSize = 1;

// Function to spawn background hearts
function createHearts() {
    const heartCount = 20;
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 4 + "s";
        heart.style.opacity = Math.random();
        heart.style.width = Math.random() * 20 + 20 + "px";
        heart.style.height = heart.style.width;
        heartsBg.appendChild(heart);
    }
}

createHearts();

// No Button Interaction
noBtn.addEventListener('click', () => {
    noClickCount++;
    
    // Change Image
    mainImg.src = "assets/snoopy-sad.jpg";

    // Change Text
    const messageIndex = Math.min(noClickCount, messages.length - 1);
    noBtn.textContent = messages[messageIndex];

    // Resize Buttons
    currentYesSize *= 1.35; // Grow Yes
    currentNoSize *= 0.85;  // Shrink No
    
    yesBtn.style.transform = `scale(${currentYesSize})`;
    noBtn.style.transform = `scale(${currentNoSize})`;
    
    // Add shake effect to No button
    noBtn.animate([
        { transform: `scale(${currentNoSize}) translateX(0)` },
        { transform: `scale(${currentNoSize}) translateX(-10px)` },
        { transform: `scale(${currentNoSize}) translateX(10px)` },
        { transform: `scale(${currentNoSize}) translateX(0)` }
    ], {
        duration: 400,
        easing: 'ease-in-out'
    });
});

// Yes Button Interaction
yesBtn.addEventListener('click', () => {
    mainImg.src = "assets/snoopy_happy.png";
    question.textContent = "Yay! I knew you would say yes! ❤️";
    
    // Remove buttons
    document.querySelector('.btn-group').style.display = 'none';

    // Confetti effect (simple CSS based for now, could use a library if requested)
    // We already have floating hearts, let's speed them up and add more!
    heartsBg.innerHTML = '';
    for(let i=0; i<100; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 2 + "s"; // Faster
        heart.style.backgroundColor = "rgba(255, 77, 109, 1)"; // Brighter
        heartsBg.appendChild(heart);
    }
});
