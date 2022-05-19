//  Carne - 400 grs por pessoa + de 6 horas- 650
//  Cerveja - 1200 ml por pessoa + 6 horas -200 ml
//  Refrigerante/agua - 1000 ml por pessoa + 6 horas-  1500ml
//  Crianças valem por 0.5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando....");

    let adultos=inputAdultos.value;
    let criancas=inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCeveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas)

    resultado.innerHTML += `<p>${qtdTotalCarne / 1000} kg de carne</p>`
    resultado.innerHTML += `<p>${qtdTotalCeveja} ml de cervejas</p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas}ml de bebidas</p>`


}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}
function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 100;
    }
}


