// Global variables
let fibonacciSequence = [];
let animationSpeed = 300;
let isAnimating = false;

// DOM elements
const termsInput = document.getElementById('termsInput');
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const speedSlider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');
const canvas = document.getElementById('fibonacciCanvas');
const ctx = canvas.getContext('2d');
const dataTable = document.getElementById('dataTable');

/**
 * Generates the Fibonacci sequence up to n terms
 * @param {number} n - Number of terms to generate
 * @returns {number[]} Array of Fibonacci numbers
 */
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [1];
    if (n === 2) return [1, 1];

    const sequence = [1, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

/**
 * Converts a number to binary representation
 * @param {number} num - The number to convert
 * @returns {string} Binary representation
 */
function toBinary(num) {
    return num.toString(2);
}

/**
 * Updates the data table with the Fibonacci sequence
 */
function updateDataTable() {
    if (fibonacciSequence.length === 0) {
        dataTable.innerHTML = '<tr><td colspan="3" class="text-center text-muted">Click "Generate" to see the sequence</td></tr>';
        return;
    }

    dataTable.innerHTML = fibonacciSequence.map((num, index) => `
        <tr>
            <td class="fw-bold">${index + 1}</td>
            <td>${num.toLocaleString()}</td>
            <td><code>${toBinary(num)}</code></td>
        </tr>
    `).join('');
}

/**
 * Gets a color from a gradient based on position
 * @param {number} index - Index in the sequence
 * @param {number} total - Total number of items
 * @returns {string} RGB color
 */
function getColorForIndex(index, total) {
    const hue = (index / total) * 360;
    return `hsl(${hue}, 70%, 60%)`;
}

/**
 * Draws the Fibonacci spiral with animation
 */
async function drawFibonacciSpiral() {
    if (isAnimating || fibonacciSequence.length === 0) return;

    isAnimating = true;
    generateBtn.disabled = true;
    resetBtn.disabled = true;
    termsInput.disabled = true;

    // Clear canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Calculate positions for each square
    const positions = [];

    // Start with two 1x1 squares
    if (fibonacciSequence.length >= 1) {
        positions.push({ x: 0, y: 0, size: 1, index: 0 });
    }
    if (fibonacciSequence.length >= 2) {
        positions.push({ x: 1, y: 0, size: 1, index: 1 });
    }

    // Place remaining squares in spiral pattern
    for (let i = 2; i < fibonacciSequence.length; i++) {
        const prev1 = positions[i - 1];
        const prev2 = positions[i - 2];
        const currentSize = fibonacciSequence[i];

        let newPos = { size: currentSize, index: i };

        // Determine direction based on pattern
        // The spiral goes: right, up, left, down, repeat
        const direction = (i - 2) % 4;

        switch (direction) {
            case 0: // Right
                newPos.x = prev1.x + prev1.size;
                newPos.y = prev1.y - currentSize + prev1.size;
                break;
            case 1: // Up
                newPos.x = prev1.x + prev1.size - currentSize;
                newPos.y = prev1.y - currentSize;
                break;
            case 2: // Left
                newPos.x = prev1.x - currentSize;
                newPos.y = prev1.y;
                break;
            case 3: // Down
                newPos.x = prev1.x;
                newPos.y = prev1.y + prev1.size;
                break;
        }

        positions.push(newPos);
    }

    // Find bounds
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;

    positions.forEach(pos => {
        minX = Math.min(minX, pos.x);
        maxX = Math.max(maxX, pos.x + pos.size);
        minY = Math.min(minY, pos.y);
        maxY = Math.max(maxY, pos.y + pos.size);
    });

    const padding = 40;
    const scaleX = (canvas.width - padding * 2) / (maxX - minX || 1);
    const scaleY = (canvas.height - padding * 2) / (maxY - minY || 1);
    const scale = Math.min(scaleX, scaleY);

    // Animate drawing squares
    for (let i = 0; i < positions.length; i++) {
        const pos = positions[i];
        const screenX = (pos.x - minX) * scale + padding;
        const screenY = (pos.y - minY) * scale + padding;
        const screenSize = pos.size * scale;

        // Draw square
        const color = getColorForIndex(i, fibonacciSequence.length);
        ctx.fillStyle = color;
        ctx.fillRect(screenX, screenY, screenSize, screenSize);

        // Draw border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.strokeRect(screenX, screenY, screenSize, screenSize);

        // Draw number
        ctx.fillStyle = '#ffffff';
        ctx.font = `bold ${Math.max(12, screenSize * 0.3)}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(pos.size, screenX + screenSize / 2, screenY + screenSize / 2);

        await new Promise(resolve => setTimeout(resolve, animationSpeed));
    }

    // Draw spiral curve
    drawSpiralCurve(positions, minX, minY, scale, padding);

    isAnimating = false;
    generateBtn.disabled = false;
    resetBtn.disabled = false;
    termsInput.disabled = false;
}

/**
 * Draws the connecting spiral curve
 */
function drawSpiralCurve(positions, minX, minY, scale, padding) {
    ctx.strokeStyle = '#666666';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);

    for (let i = 0; i < positions.length - 1; i++) {
        const current = positions[i];
        const next = positions[i + 1];

        const x1 = (current.x - minX) * scale + padding + current.size * scale / 2;
        const y1 = (current.y - minY) * scale + padding + current.size * scale / 2;
        const x2 = (next.x - minX) * scale + padding + next.size * scale / 2;
        const y2 = (next.y - minY) * scale + padding + next.size * scale / 2;

        // Draw curved line
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(midX, midY, x2, y2);
        ctx.stroke();
    }

    ctx.setLineDash([]);
}

/**
 * Generates the sequence and starts animation
 */
function generate() {
    const terms = parseInt(termsInput.value);

    if (isNaN(terms) || terms < 1) {
        alert('Please enter a valid number (1-25)');
        return;
    }

    if (terms > 25) {
        alert('Maximum 25 terms allowed');
        termsInput.value = 25;
        return;
    }

    fibonacciSequence = generateFibonacci(terms);
    updateDataTable();
    drawFibonacciSpiral();
}

/**
 * Resets the application
 */
function resetAll() {
    if (isAnimating) return;

    fibonacciSequence = [];
    termsInput.value = '10';
    speedSlider.value = '300';
    speedValue.textContent = '300ms';
    animationSpeed = 300;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    updateDataTable();
}

// Event listeners
generateBtn.addEventListener('click', generate);
resetBtn.addEventListener('click', resetAll);

speedSlider.addEventListener('input', (e) => {
    animationSpeed = parseInt(e.target.value);
    speedValue.textContent = `${animationSpeed}ms`;
});

termsInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generate();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Clear canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    updateDataTable();
});
