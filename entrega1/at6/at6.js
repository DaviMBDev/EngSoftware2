function calculadora(){

    let num1 = parseInt(prompt("Digite o primeiro número: "))
    let num2 = parseInt(prompt("Digite o segundo número: "))
    let operacao = prompt("Digite o tipo de operação a ser utilizada entre esses dois números (digite Soma para adição+ e Subtração para subtração- : ")

    if (isNaN(num1)){
        alert("Primeiro número inválido")
        return
    }
    if (isNaN(num2)){
        alert("Segundo número inválido")
        return
    }
    

    function conta(num1, num2, operacao){
        if (operacao == 'soma' || operacao == 'Soma'){
            return num1 + num2
        }
        else if (operacao == 'subtração' || operacao == "Subtração" || operacao == "Subtracao" || operacao == "subtracao"){
            return num1 - num2
        }
        else{
            return "Operação inválida, insira 'Soma' ou 'Subtração'"
        }   
    }
    
    alert("O resultado é: " + conta(num1, num2, operacao))
}
calculadora()

