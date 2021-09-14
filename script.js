
const body = document.getElementById("sec")

const span = document.createElement("span");

span.textContent = numbersToWords ();

body.appendChild(span);


function numbersToWords () {

let arr = []                           //arr para criar a sequencia 

let dezenasUnidades = [];                 // arr com ad dezenas e unidades completas (1 a 99)

dezenasUnidades = dezenasUnidades.concat(umToDezenove () , dezenasMake ())    //atribuindo as funções de 0a 19 e 20 a 99

const centenas = ["cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"] // array com os nomes das centenas

for (let i=0 ; i< 9 ; i++) {    // loop "i" para contar as centenas

    for (let j = 0; j<99; j++){  // loop "j" para contar as unidades e dezenas

        if(j === 0){                     // inserindo as dezenas iniciais (vinte, trinta, quarenta ...)
            arr.push(centenas[i])

        }

        arr.push(centenas[i] + " e " + dezenasUnidades[j])   // inserindo as dezenas com as unidades seguintes

    }
}
arr[0] = "cem";            // trocando a palavra "cento" por "cem"

let arrFinal = []

arrFinal = arrFinal.concat(dezenasUnidades, arr)   // juntando a array de 0 a 99 com a array de centenas (100 a 999)

return arrFinal;

}

function umToDezenove () {                // função que retorna de 1 a 19

    const arrZeroToNine = ["um","dois","três","quatro","cinco","seis","sete","oito","nove"];

    const arrDezToDezenove = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]

    let arr = []

    return arr.concat( arrZeroToNine,arrDezToDezenove)
}

function dezenasMake () {   // função que retorna de 20 a 99

    const arrZeroToNine = ["um","dois","três","quatro","cinco","seis","sete","oito","nove"];

    const dezenas = ["vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];

    let vinteToNoventaNove = []

    for (let i = 0 ; i<8 ; i++) {

        for (let j =0 ; j< 9; j++){
            if(j === 0){
                vinteToNoventaNove.push(dezenas[i])
    
            }
            vinteToNoventaNove.push(dezenas[i] + " e " + arrZeroToNine[j])          
        }
    }
    return vinteToNoventaNove;

}