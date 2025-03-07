let nome = prompt('Nome: ')
let alt = prompt('Altura (em cm): ')
let peso = prompt('Peso: ')

parseFloat(alt, peso)
let altm = alt/100

function calculaimc(peso, alt){
    imc = peso/alt**2
    return imc
}
if imc < 16{
    let cond = "Baixo peso muito grave"
}
elif imc >= 16 and imc < 17{
    let cond = "Baixo peso grave"
}
elif imc >= 17 and imc <18.50{
    let cond = "Baixo peso"
}
elif imc > 18.49 and imc < 25{
    let cond = "Peso Normal"
}
elif imc > 24.99 and imc < 30{
    let cond = "Sobrepeso"
}
elif imc > 29.99 and imc < 35{
    let cond = "Obesidade grau 1"
}
elif imc > 34.99 and imc < 40{
    let cond = "Obe"
}

console.log("Seu IMC é:" calculaimc(peso, alt)'.' 'Condição: ' )