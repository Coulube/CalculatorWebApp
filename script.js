// Calculator functionality
let display = document.getElementById('display');
let history = document.getElementById('history');
let currentExpression = '';

// Append value to current expression
function appendValue(value) {
    currentExpression += value;
    display.value = currentExpression;
}

// Calculate result
function calculate() {
    try {
        let result = eval(currentExpression.replace('^', '**'));
        history.innerHTML += `${currentExpression} = ${result}<br>`;
        display.value = result;
        currentExpression = result.toString();
    } catch (error) {
        display.value = 'Error';
        currentExpression = '';
    }
}

// Clear last character
function clearLast() {
    currentExpression = currentExpression.slice(0, -1);
    display.value = currentExpression;
}

// Clear all
function clearAll() {
    currentExpression = '';
    display.value = '';
    history.innerHTML = '';
}

// Handle keyboard input
document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        appendValue(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        appendValue(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        clearLast();
    } else if (event.key === 'Escape') {
        clearAll();
    }
});