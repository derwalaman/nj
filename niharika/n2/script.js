const friendName = "Niharika  Sharma";
const container = document.getElementById('nameContainer');

// Function to generate random numbers between a range
function random(min, max) {
  return Math.random() * (max - min) + min;
}

friendName.split('').forEach((char, index) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.classList.add('letter');

  // Random starting positions and angles
  const startX = random(-500, 500); // X axis
  const startY = random(-500, -100); // Y axis (top of screen)
  const angle = random(-360, 360); // Random rotation angle

  span.style.transform = `translate(${startX}px, ${startY}px) rotate(${angle}deg)`;
  container.appendChild(span);

  setTimeout(() => {
    // Animate to the center in a straight line with rotation reset
    span.style.transform = `translate(0px, 0px) rotate(0deg)`;
    span.style.opacity = 1;
  }, index * 300);  // Delay for each letter to create the falling effect
});
