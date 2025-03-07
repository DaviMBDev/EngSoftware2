function geraData(){
    let data = prompt("Digite a data no formato 00/00/0000: ")
    let dataSplit = data.split('/')
    let dataNum = parseInt(dataSplit[0])
    let anoNum = parseInt(dataSplit[2])
    let mesNum = parseInt(dataSplit[1])

    if (isNaN(anoNum) || anoNum < 1){
        alert("Ano inserido inválido")
        return
    }
    if (mesNum == 2 && dataNum == 29) {
        if ((anoNum % 4 !== 0) || (anoNum % 100 == 0 && anoNum % 400 !== 0)) {
            alert("Ano não bissexto. Fevereiro não pode ter 29 dias.")
            return
        }
    }
    if (isNaN(mesNum) || mesNum < 1 || mesNum > 12){
        alert("Mes inserido inválido")
        return
    }
    if (isNaN(dataNum) || dataNum < 1|| dataNum > 31 || dataNum > 29 && mesNum == 2){
        alert("Data inserida inválida. Siga o padrão de data informada anteriormente.")
        return
    }
    if ((mesNum == 4 || mesNum == 6 || mesNum == 9 || mesNum == 11) && dataNum > 30) {
        alert("Este mês tem apenas 30 dias.")
        return
    }
    if ((mesNum == 1 || mesNum == 3 || mesNum == 5 || mesNum == 7 || mesNum == 8 || mesNum == 10 || mesNum == 12) && dataNum > 31) {
        alert("Este mês tem apenas 31 dias.")
        return
    }


    function mes(mesNum){
        switch(true){
        case mesNum == 1:
            return 'Janeiro'
        case mesNum == 2:
            return 'Fevereiro'
        case mesNum == 3:
            return 'Março'
        case mesNum == 4:
            return 'Abril'
        case mesNum == 5:
            return 'Maio'
        case mesNum == 6:
            return 'Junho'
        case mesNum == 7:
            return 'Julho'
        case mesNum == 8:
            return 'Agosto'
        case mesNum == 9:
            return 'Setembro'
        case mesNum == 10:
            return 'Outubro'
        case mesNum == 11:
            return 'Novembro'
        case mesNum == 12:
            return 'Dezembro'
        }
    }

    alert(dataNum + " de " + mes(mesNum) + " de " + anoNum)
}

geraData()

    