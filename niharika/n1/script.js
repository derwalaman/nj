const friendName = "Niharika";
const nameContainer = document.getElementById('nameContainer');
const heartContainer = document.getElementById('heartContainer');

// Function to generate random numbers between a range
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Create falling hearts
function createHearts() {
  for (let i = 0; i < 10; i++) { // Adjust the number of hearts as needed
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${random(0, 100)}%`; // Random horizontal position
    heart.style.animationDelay = `${random(0, 5)}s`; // Random delay
    heartContainer.appendChild(heart);
  }
}

// Create name letters
friendName.split('').forEach((char, index) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.classList.add('letter');

  // Random starting positions and angles
  const startX = random(-500, 500); 
  const startY = random(-500, -100); 
  const angle = random(-360, 360); 

  span.style.transform = `translate(${startX}px, ${startY}px) rotate(${angle}deg)`;
  nameContainer.appendChild(span);

  setTimeout(() => {
    // Animate to the center in a straight line with rotation reset
    span.style.transform = `translate(0px, 0px) rotate(0deg)`;
    span.style.opacity = 1;
  }, index * 300);  // Delay for each letter to create the falling effect
});

// Initialize hearts
createHearts();
