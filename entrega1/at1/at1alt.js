function calculoImc(){
    let nome = prompt('Nome: ')
    let alt = prompt('Altura (em cm): ')
    let peso = prompt('Peso: ')

    parseFloat(alt)
    parseFloat(peso)
    let altm = alt/100
    let imc = peso/altm**2

    if (isNaN(alt) || alt < 0 ){
        alert("Valor inserido inválido")
        return
    }
    if (isNaN(peso) || peso < 0 ){
        alert("Valor inserido inválido")
        return
    }

    function condt(imc){
        switch(true){
            case imc < 0:
                return "Valor de IMC inválido. Digite valores positivos."
            case imc < 16:
                return  "Baixo peso muito grave"
                
            case imc < 17:
                return  "Baixo peso grave"
                
            case imc < 18.50:
                return  "Baixo peso"
                
            case imc < 25:
                return  "Peso Normal"
                
            case imc < 30:
                return  "Sobrepeso"
                
            case imc < 35:
                return  "Obesidade grau 1"
                
            case imc < 40:
                return  "Obesidade grau 2"
                
            case imc > 40:
                return  "Obesidade mórbida"
        }
        
    }
    console.log(imc, condt(imc))
    alert(nome+ " possui índice de massa corporal igual a "+imc+", sendo classificado como: "+condt(imc)+".")

}
calculoImc()