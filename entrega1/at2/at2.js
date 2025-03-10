function classIdade(){    
    let idade = prompt("Digite sua idade: ")

    function etaria(idade){
        switch(true){
            case idade <= 0:
                return "Erro: Valor inválido" 
            case (isNaN(idade)):
                return "Erro: Valor inválido"
            case idade < 16:
                return "Criança"
            case idade < 31:
                return "Jovem"
            case idade < 60:
                return "Adulto"
            case idade > 59:
                return "Idoso"
        }
    }

    alert(etaria(idade))
}
classIdade()