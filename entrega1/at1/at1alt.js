let nome = prompt('Nome: ')
let alt = prompt('Altura (em cm): ')
let peso = prompt('Peso: ')



parseFloat(alt)
parseFloat(peso)
let altm = alt/100
let imc = peso/altm**2

function condt(imc){
    switch(true){
        case imc < 16:
            return  "Baixo peso muito grave"
            break
        case imc < 17:
            return  "Baixo peso grave"
            break
        case imc < 18.50:
            return  "Baixo peso"
            break
        case imc < 25:
            return  "Peso Normal"
            break
        case imc < 30:
            return  "Sobrepeso"
            break
        case imc < 35:
            return  "Obesidade grau 1"
            break
        case imc < 40:
            return  "Obbesidade grau 2"
            break
        case imc > 40:
            return  "Obesidade mórbida"
    }
    
}
console.log(imc, condt(imc))
alert(nome+ " possui índice de massa corporal igual a "+imc+", sendo classificado como: "+condt(imc)+".")

