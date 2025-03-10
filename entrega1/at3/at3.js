function lerNota(){
    let nota1 = prompt("Digite sua nota na Atividade prática de laboratório: ")
    let nota2 = prompt("Digite sua nota na Prova de Semestre: ")
    let nota3 = prompt("Digite sua nota no Trabalho teórico: ")

    if (isNaN(nota1) || nota1 < 0){
        alert("Valor inserido inválido")
        return
    }
    if (isNaN(nota2) || nota2 < 0){
        alert("Valor inserido inválido")
        return
    }
    if (isNaN(nota3) || nota3 < 0){
        alert("Valor inserido inválido")
        return
    }

    let media = 0.2*nota1 + 0.5*nota2 + 0.3*nota3

    function rank(media){
        switch(true){
            case media <= 5:
                return "F"
            case media <= 6:
                return "E"
            case media <=7:
                return "D"
            case media <=8:
                return "C"
            case media <=9:
                return "B"
            case media > 9:
                return "A"
        }
    }

    alert("A média do aluno é = "+media+ " e a sua classificação é "+rank(media))
}
lerNota()