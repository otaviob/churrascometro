// Carne - 400g p/ pessoa + de 6h - 650g
// Cerveja - 1200 ml p/ pessoa + de 6h - 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6h - 1500ml

// Criança valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let quantidadeTotalCerveja = cervejaPP(duracao) * adultos;
    let quantidadeTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    
    resultado.innerHTML = `<p>${quantidadeTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalBebidas / 2000)} Pet's 2l de Bebidas</P>`
    
} 

function carnePP(duracao) {
    if(duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}