// DOM Elements
const preferencesForm = document.getElementById('preferences-form');
const themeSelect = document.getElementById('theme');
const speedSelect = document.getElementById('animation-speed');
const animateBtn = document.getElementById('animate-btn');
const resetBtn = document.getElementById('reset-btn');
const animatedBox = document.getElementById('animated-box');

// Load saved preferences
function loadPreferences() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedSpeed = localStorage.getItem('animationSpeed') || 'normal';
    
    // Apply saved theme
    document.body.className = savedTheme;
    themeSelect.value = savedTheme;
    
    // Apply saved animation speed
    document.body.classList.add(savedSpeed);
    speedSelect.value = savedSpeed;
    
    console.log('Preferences loaded:', { savedTheme, savedSpeed });
}

// Save preferences to localStorage
function savePreferences(event) {
    event.preventDefault();
    
    const theme = themeSelect.value;
    const animationSpeed = speedSelect.value;
    
    localStorage.setItem('theme', theme);
    localStorage.setItem('animationSpeed', animationSpeed);
    
    // Apply the selected theme
    document.body.className = theme;
    
    // Update animation speed
    document.body.classList.remove('slow', 'normal', 'fast');
    document.body.classList.add(animationSpeed);
    
    console.log('Preferences saved:', { theme, animationSpeed });
    
    // Show feedback animation
    const submitBtn = event.target.querySelector('button[type="submit"]');
    submitBtn.classList.add('pulse');
    setTimeout(() => {
        submitBtn.classList.remove('pulse');
    }, 1000);
}

// Animate the box
function animateBox() {
    // Clear any existing animations
    animatedBox.className = 'animated-box';
    
    // Get current animation speed
    const speed = localStorage.getItem('animationSpeed') || 'normal';
    animatedBox.classList.add(speed);
    
    // Add animation classes
    setTimeout(() => {
        animatedBox.classList.add('move-right');
    }, 100);
    
    setTimeout(() => {
        animatedBox.classList.add('change-color');
    }, 600);
    
    setTimeout(() => {
        animatedBox.classList.add('grow');
    }, 1100);
    
    setTimeout(() => {
        animatedBox.classList.add('spin');
    }, 1600);
    
    console.log('Animation sequence started');
}

// Reset the animation
function resetAnimation() {
    animatedBox.className = 'animated-box';
    const speed = localStorage.getItem('animationSpeed') || 'normal';
    animatedBox.classList.add(speed);
    console.log('Animation reset');
}

// Initialize the page
function init() {
    loadPreferences();
    
    // Event listeners
    preferencesForm.addEventListener('submit', savePreferences);
    animateBtn.addEventListener('click', animateBox);
    resetBtn.addEventListener('click', resetAnimation);
    
    console.log('Page initialized');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);