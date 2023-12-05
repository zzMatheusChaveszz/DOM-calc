let calcular = document.querySelector('#calcular'); 
calcular.addEventListener('click', calcularIMC);Resultado

function calcularIMC() {
    let nome = document.querySelector('#nome').value;
    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);
    let final = document.querySelector('#final');
    let calc = peso / (altura * altura) ;

    switch (true) {
        case calc < 16:
            final.innerHTML = `${nome} está muito abaixo do peso, pesando${peso} Kg com ${altura} metros de altura!`;
            break;
        case calc >= 16 && calc <= 16.9:
final.innerHTML = `${nome} está Abaixo do peso, pesando${peso} Kg com ${altura} metros de altura!`;
            break;
        case calc >= 17 && calc <= 18.4:final.innerHTML = `${nome} está Abaixo do peso, pesando ${peso} Kg com ${altura} metros de altura!`;
            break;
        case calc >= 18.5 && calc <= 24.9:final.innerHTML = `${nome} está com Peso normal, pesando ${peso} Kg com ${altura} metros de altura!`;
            break;
        case calc >= 25 && calc <= 29.9:final.innerHTML = `${nome}está Acima do peso, pesando ${peso} Kg com ${altura} metros de altura!`;
            break;
        case calc >= 30 && calc <= 34.9:final.innerHTML = `${nome} está com Obesidade grau 1, pesando ${peso} Kg com ${altura} metros de altura!`;
            break;
        case calc >= 35 && calc <= 39.9:final.innerHTML = `${nome} está com Obesidade grau 2, pesando ${peso} Kg com ${altura} metros de altura!`;
            break;
        case calc >= 40:final.innerHTML = `${nome} está com Obesidade grau 3, pesando${peso} Kg com ${altura} metros de altura!`;
            break;
        default:
            final.innerHTML = `índice invalido`;
            break;
    }
}


