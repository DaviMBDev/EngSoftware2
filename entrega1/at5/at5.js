function calcularSalario(){

    let codigo = parseInt(prompt("Digite o código de funcionário: "))
    let horasMes = parseInt(prompt("Digite o número de horas trabalhadas no mês: "))
    let turno = prompt("Digite o caractere referente ao seu turno (M - matutino, V - vespertino, N-noturno): ")
    let categoria = prompt("Digite o caractere referente à sua categoria como funcionário (G-gerente, F-funcionário): ")
    let salarioMin = parseInt(prompt("Digite o salário mínimo atual em seu estado: "))

    if (isNaN(codigo) || codigo < 0){
        alert("Código inserido inválido")
        return
    }
    if (isNaN(horasMes) || horasMes < 1){
        alert("Valor de horas inserido inválido")
        return
    }
    if (turno !== 'm' || turno !== 'M' || turno !== 'v' || turno !== 'V' || turno !== 'n' || turno !== 'N'){
        alert("Turno inserido inválido. Digite M para matutino, V para vespertino ou N para noturno")
        return
    }
    if (categoria !== 'g' || categoria !== 'G' || categoria !== 'f' || categoria !== 'F'){
        alert("Categoria inserida inválida. Digite G para gerente, F para funcionário")
        return
    }
    if (isNaN(salarioMin) || salarioMin < 1){
        alert("Salário mínimo inserido inválido")
        return
    }

    function calculaHora(categoria, turno){
        switch(true){
            case (categoria == 'g' || categoria == 'G') && (turno == 'M' || turno == 'm' || turno == 'V' || turno == 'v'):
                return salarioMin * 0.04
            case (categoria == 'f' || categoria == 'F') && (turno == 'n' || turno == 'N'):
                return salarioMin * 0.02
            case (categoria == 'f' || categoria == 'F') && (turno == 'm' || turno == 'M' || turno == 'v' || turno == 'V'):
                return salarioMin * 0.01
        }
    }

    let valorHora = calculaHora(categoria, turno)
    let salarioInicial = horasMes * valorHora

    function calculaAuxilio(salarioInicial){
        switch(true){
            case salarioInicial <= 800:
                return salarioInicial * 0.25
            case salarioInicial <= 1200:
                return salarioInicial * 0.20
            case salarioInicial > 1200:
                return salarioInicial * 0.15
        }
    }

    alert(
        "Horas trabalhadas: " + horasMes + "\n" +
        "Valor da hora trabalhada: " + valorHora.toFixed(2) + "\n" +
        "Salário inicial: " + salarioInicial.toFixed(2) + "\n" +
        "Auxílio alimentação: " + calculaAuxilio(salarioInicial).toFixed(2) + "\n" +
        "Salário final: " + (salarioInicial + calculaAuxilio(salarioInicial)).toFixed(2)
    )
}

calcularSalario()