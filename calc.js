
function addToDisplay(value) {
    const display =
        document.getElementById('display');
    if (display.textContent === '0') {
        display.textContent = value
    } else {
        display.textContent += value
    }
}

function calcular() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.textContent);
        display.textContent = result;
    } catch (error) {
        display.textContent = '0'
    }

}

function limpar() {
    const display = document.getElementById('display');
    display.textContent = "0"
}

function backspace() {
    const display = document.getElementById('display')
    const content = display.textContent
    if (content.length > 1) {
        display.textContent = content.slice(0, -1);
    } else {
        display.textContent = "0";
    }
}