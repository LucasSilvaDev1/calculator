
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

function toggleClasses(element, classList) {
    classList.forEach(_class => {
        element.classList.toggle(_class)
    });
}

function exibirBtns() {
    const btn = document.getElementById('addbutton');
    const btns = document.querySelectorAll(".btn");
    const display = document.querySelector("#display")
    const calculadora = document.querySelector("#calculadora")
    const btns2 = document.querySelector("#btns")
   
    toggleClasses(display, ["display", "display2"])
    toggleClasses(calculadora, ["calculadora", "calculadora2"])
    toggleClasses(btns2, ["btns", "btns2"])

    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.toggle("calcsAdicionais")
    }
    // classes.forEach(element => {
    //     console.log(element)
    //     display.classList.toggle(element)
    //     calculadora.classList.toggle(element)
    //     btns2.classList.toggle(element)
    // });
    // display.classList.toggle("display")
    // display.classList.toggle("display2")

    // calculadora.classList.toggle("calculadora")
    // calculadora.classList.toggle("calculadora2")

    // btns2.classList.toggle("btns")
    // btns2.classList.toggle("btns2")


    // if (display.classList.contains("display")) {
    //     display.classList.remove("display")
    //     display.classList.add("display2")
    // } else {
    //     display.classList.remove("display2")
    //     display.classList.add("display")
    // }
    // if (calculadora.classList.contains("calculadora")) {
    //     calculadora.classList.remove("calculadora")
    //     calculadora.classList.add("calculadora2")
    // } else {
    //     calculadora.classList.remove("calculadora2")
    //     calculadora.classList.add("calculadora")
    // }
    // if (btns2.classList.contains("btns")) {
    //     btns2.classList.remove("btns")
    //     btns2.classList.add("btns2")
    // } else {
    //     btns2.classList.remove("btns2")
    //     btns2.classList.add("btns")
    // }
    

    
}