var display = document.getElementById("display")
var btns = document.getElementsByClassName("btn")

function pressed(value){
    if(display.textContent === "0"){
        display.textContent = value
    } else {
        display.textContent += value
    }
}

function backspace(){
    if(display.textContent.length > 1){
        display.textContent = display.textContent.slice(0, -1)
    } else {
        display.textContent = "0"
    }
}

function clearAll(){
    display.textContent = "0"
}

function calculate(){
    try {
        display.textContent = eval(display.textContent)
    } catch(error) {
        display.textContent = "Erro"
    }
}

function acenderBotao(button) {
    button.style.backgroundImage = "linear-gradient(gray, red)"
    setTimeout(() => {
        button.style.backgroundImage = "linear-gradient(gray, rgb(0, 0, 0))"
    }, 150)
}

const mapeamentoTeclas = {
    '0': { action: () => pressed('0') },
    '1': { action: () => pressed('1') },
    '2': { action: () => pressed('2') },
    '3': { action: () => pressed('3') },
    '4': { action: () => pressed('4') },
    '5': { action: () => pressed('5') },
    '6': { action: () => pressed('6') },
    '7': { action: () => pressed('7') },
    '8': { action: () => pressed('8') },
    '9': { action: () => pressed('9') },
    '+': { action: () => pressed('+') },
    '-': { action: () => pressed('-') },
    '*': { action: () => pressed('*') },
    '/': { action: () => pressed('/') },
    '.': { action: () => pressed('.') },
    'Enter': { action: () => calculate() },
    '=': { action: () => calculate() },
    'Backspace': { action: () => backspace() },
    'Delete': { action: () => clearAll() },
    'Escape': { action: () => clearAll() }
}

document.addEventListener('keydown', function(event){
    const tecla = event.key
    const mapeamento = mapeamentoTeclas[tecla]
    
    if(mapeamento) {
        for(let i = 0; i < btns.length; i++) {
            const btn = btns[i]
            if((tecla === 'Enter' || tecla === '=') && btn.textContent === '=') {
                acenderBotao(btn)
                mapeamento.action()
                break
            } else if(tecla === 'Backspace' && btn.textContent === '<') {
                acenderBotao(btn)
                mapeamento.action()
                break
            } else if((tecla === 'Delete' || tecla === 'Escape') && btn.textContent === 'C') {
                acenderBotao(btn)
                mapeamento.action()
                break
            } else if(btn.textContent === tecla) {
                acenderBotao(btn)
                mapeamento.action()
                break
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    for(let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('mousedown', function() {
            this.style.backgroundImage = "linear-gradient(gray, red)"
        })
        btns[i].addEventListener('mouseup', function() {
            this.style.backgroundImage = "linear-gradient(gray, rgb(0, 0, 0))"
        })
        btns[i].addEventListener('mouseleave', function() {
            this.style.backgroundImage = "linear-gradient(gray, rgb(0, 0, 0))"
        })
    }
})
