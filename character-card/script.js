// Character object
const character = {
    name: "Snortleblat",
    class: "Swamp Beat Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/img/snortleblat.png',
    attacked() {
        if (this.health >= 20) {
            this.level -= 1;
            this.health -= 20;
            return true;
        } else {
            alert('Character Died');
            return false;
        }
    },
    levelUp() {
        this.level += 1;
        this.health += 20;
    }
};

// DOM Elements
const image = document.querySelector('.image');
const nameElement = document.querySelector('.name');
const classElement = document.getElementById('class');
const levelElement = document.getElementById('level');
const healthElement = document.getElementById('health');
const logElement = document.getElementById('log');
const attackedButton = document.getElementById('attacked');
const levelUpButton = document.getElementById('levelup');

// Function to update all character information in the DOM
function updateCharacterDisplay() {
    // Update image
    image.src = character.image;
    image.alt = character.name;
    
    // Update text content
    nameElement.textContent = character.name;
    classElement.textContent = character.class;
    levelElement.textContent = character.level;
    healthElement.textContent = character.health;
}

// Event Listeners
attackedButton.addEventListener('click', () => {
    const success = character.attacked();
    if (success) {
        updateCharacterDisplay();
        logElement.textContent = `${character.name} was attacked! Level: ${character.level}, Health: ${character.health}`;
    }
});

levelUpButton.addEventListener('click', () => {
    character.levelUp();
    updateCharacterDisplay();
    logElement.textContent = `${character.name} leveled up! Level: ${character.level}, Health: ${character.health}`;
});

// Initialize the display when the page loads
updateCharacterDisplay(); 