// Variables globales
const INITIAL_INPUTS = 5;
let currentInputCount = INITIAL_INPUTS;

// Elementos del DOM
const inputsWrapper = document.getElementById('inputsWrapper');
const addInputBtn = document.getElementById('addInputBtn');
const removeInputBtn = document.getElementById('removeInputBtn');
const resetBtn = document.getElementById('resetBtn');
const resultDisplay = document.getElementById('result');
const countDisplay = document.getElementById('count');

/**
 * Calculates the average (mean) of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The average of the numbers
 */
function calculateMedia(numbers) {
    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

/**
 * Gets all valid numbers from the inputs
 * @returns {number[]} Array of valid numbers
 */
function getValidNumbers() {
    const inputs = document.querySelectorAll('.number-input');
    const numbers = [];

    inputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            numbers.push(value);
        }
    });

    return numbers;
}

/**
 * Updates the average result in real-time
 */
function updateResult() {
    const validNumbers = getValidNumbers();
    const media = calculateMedia(validNumbers);

    // Display result with 2 decimal places
    resultDisplay.textContent = validNumbers.length > 0 ? media.toFixed(2) : '0.00';

    // Update counter
    countDisplay.textContent = `Numbers entered: ${validNumbers.length}`;
}

/**
 * Creates a new input for a number
 * @param {number} index - Index of the input
 * @returns {HTMLElement} The input group element
 */
function createNumberInput(index) {
    const div = document.createElement('div');
    div.className = 'input-group-number';
    div.id = `input-group-${index}`;

    const label = document.createElement('span');
    label.className = 'input-number-label';
    label.textContent = `#${index + 1}`;

    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'form-control number-input';
    input.id = `number-input-${index}`;
    input.placeholder = 'Enter a number';
    input.step = 'any';
    input.addEventListener('input', updateResult);

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

/**
 * Initializes the initial inputs
 */
function initializeInputs() {
    inputsWrapper.innerHTML = '';
    for (let i = 0; i < INITIAL_INPUTS; i++) {
        inputsWrapper.appendChild(createNumberInput(i));
    }
    updateResult();
}

/**
 * Adds a new input
 */
function addInput() {
    const newInput = createNumberInput(currentInputCount);
    inputsWrapper.appendChild(newInput);
    currentInputCount++;

    // Focus on the new input
    newInput.querySelector('input').focus();

    // Update the delete button state
    updateRemoveButtonState();
}

/**
 * Removes the last input
 */
function removeInput() {
    const inputs = document.querySelectorAll('.input-group-number');
    if (inputs.length > 1) {
        inputs[inputs.length - 1].remove();
        currentInputCount--;
        updateRemoveButtonState();
        updateResult();
    }
}

/**
 * Updates the delete button state
 */
function updateRemoveButtonState() {
    const inputs = document.querySelectorAll('.input-group-number');
    removeInputBtn.disabled = inputs.length <= 1;
}

/**
 * Clears all inputs
 */
function resetAll() {
    const inputs = document.querySelectorAll('.number-input');
    inputs.forEach(input => {
        input.value = '';
    });
    updateResult();

    // Focus on the first input
    inputs[0]?.focus();
}

// Event listeners
addInputBtn.addEventListener('click', addInput);
removeInputBtn.addEventListener('click', removeInput);
resetBtn.addEventListener('click', resetAll);

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeInputs();
    updateRemoveButtonState();
});
