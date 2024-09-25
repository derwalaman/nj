function createRose() {
    const roseContainer = document.getElementById('rose-container');
    const rose = document.createElement('div');
    rose.classList.add('rose');

    rose.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    rose.style.animationDuration = Math.random() * 3 + 5 + 's';  // Randomize falling speed

    roseContainer.appendChild(rose);

    // Remove the rose after it finishes falling
    setTimeout(() => {
        rose.remove();
    }, 7000);  // Match with animation duration
}

// Create a new rose every 300ms
setInterval(createRose, 300);
