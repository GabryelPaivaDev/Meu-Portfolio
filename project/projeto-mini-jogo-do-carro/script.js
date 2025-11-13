var carWhite = document.getElementById("white");
var carRed = document.getElementById("red");
var result = document.getElementById("result");
var btns = document.getElementsByClassName("btn");
var resetar = document.getElementById("resetar");
var acelerar = document.getElementById("acelerar");
var desacelerar = document.getElementById("desacelerar");
var brancoBtn = document.getElementById("branco");
var vermelhoBtn = document.getElementById("vermelho");

var carroSelecionado = null;
var carroNaoSelecionado = null;
var posicao = 0;

function selecionarCarro(carro, outroCarro, cor, nome) {
    if (carroSelecionado) {
        resetarCarro(carroSelecionado);
    }
    
    carroSelecionado = carro;
    carroNaoSelecionado = outroCarro;
    
    posicao = 0;
    
    result.textContent = nome + "!";
    document.body.style.backgroundColor = cor;
    document.body.style.color = cor === "black" || cor === "darkred" ? "white" : "black";
    
    for(let i = 0; i < btns.length; i++) {
        btns[i].style.display = "block";
    }
    
    atualizarPosicoesCarros();
}

function resetarCarro(carro) {
    if (carro.id === "white") {
        carro.style.left = "205px";
        carro.style.right = "";
    } else {
        carro.style.right = "205px";
        carro.style.left = "";
    }
    carro.style.width = "50px";
    carro.style.height = "50px";
    carro.style.top = "60px";
}

function atualizarPosicoesCarros() {
    if (!carroSelecionado) return;
    
    var tamanhoSelecionado = 50 - (posicao * 0.2);
    var topSelecionado = 60 - (posicao * 0.4);
    
    var movimentoLateral = posicao * 0.8;
    
    carroSelecionado.style.width = tamanhoSelecionado + "px";
    carroSelecionado.style.height = tamanhoSelecionado + "px";
    carroSelecionado.style.top = topSelecionado + "px";
    
    if (carroSelecionado.id === "white") {
        var novoLeft = 205 + movimentoLateral;
        if (novoLeft > 250) novoLeft = 250;
        carroSelecionado.style.left = novoLeft + "px";
        carroSelecionado.style.right = "";
    } else {
        var novoRight = 205 + movimentoLateral;
        if (novoRight > 250) novoRight = 250;
        carroSelecionado.style.right = novoRight + "px";
        carroSelecionado.style.left = "";
    }
    
    resetarCarro(carroNaoSelecionado);
}

carWhite.addEventListener("click", function() {
    selecionarCarro(carWhite, carRed, "white", "Branco");
});

carRed.addEventListener("click", function() {
    selecionarCarro(carRed, carWhite, "darkred", "Vermelho");
});

brancoBtn.addEventListener("click", function() {
    selecionarCarro(carWhite, carRed, "white", "Branco");
});

vermelhoBtn.addEventListener("click", function() {
    selecionarCarro(carRed, carWhite, "darkred", "Vermelho");
});

resetar.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    result.textContent = "?";
    
    for(let i = 0; i < btns.length; i++) {
        btns[i].style.display = "none";
    }
    
    if (carroSelecionado) {
        resetarCarro(carroSelecionado);
        resetarCarro(carroNaoSelecionado);
        carroSelecionado = null;
        carroNaoSelecionado = null;
    }
    
    posicao = 0;
});

acelerar.addEventListener("click", function() {
    if (carroSelecionado && posicao < 100) {
        posicao += 10;
        if (posicao > 100) posicao = 100;
        atualizarPosicoesCarros();
    } else if (!carroSelecionado) {
        alert("Selecione primeiro um dos carros.");
    }
});

desacelerar.addEventListener("click", function() {
    if (carroSelecionado && posicao > 0) {
        posicao -= 10;
        if (posicao < 0) posicao = 0;
        atualizarPosicoesCarros();
    } else if (!carroSelecionado) {
        alert("Selecione primeiro um dos carros.");
    }
});

document.addEventListener("keydown", function(event) {
    if (!carroSelecionado) {
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            alert("Selecione primeiro um dos carros.");
        }
        return;
    }
    
    switch(event.key) {
        case "ArrowUp":
            if (posicao < 100) {
                posicao += 10;
                if (posicao > 100) posicao = 100;
                atualizarPosicoesCarros();
            }
            break;
        case "ArrowDown":
            if (posicao > 0) {
                posicao -= 10;
                if (posicao < 0) posicao = 0;
                atualizarPosicoesCarros();
            }
            break;
    }
});

window.addEventListener("load", function() {
    for(let i = 0; i < btns.length; i++) {
        btns[i].style.display = "none";
    }
});