
function calcularFrete() {

    let distancia = parseFloat(prompt("Digite a distância em quilômetros:"))
    let quantidadePecas = parseInt(prompt("Digite a quantidade de peças a serem transportadas:"))
    let regiao = parseInt(prompt("Digite a região (1-Sul, 2-Sudeste, 3-Centro-Oeste):"))
    let rastreamento = prompt("Deseja rastreamento (S-Sim, N-Não)?")
    
    if (isNaN(distancia) || distancia <= 0){
        alert("Erro: A distância inserida é inválida. ")
        return
    }

    if(isNaN(quantidadePecas) || quantidadePecas <= 0){
        alert("Erro: A quantidade de peças inserida é inválida. ")
        return
    }

    if(![1, 2, 3].includes(regiao)){
        alert("Erro: Região inserida inválida. ")
        return
    }

    if(rastreamento !== 's' && rastreamento !== 'n' && rastreamento !== 'S' && rastreamento !== 'N'){
        alert("Erro: Opção de rastreamento deve ser preenchida com S para sim e N para não. ")
        return
    }


    let precosPorRegiao = {
        1: 1.00,
        2: 1.20,
        3: 1.30
    }
    
    let descontoPorRegiao = {
        1: 0.10,
        2: 0.12,
        3: 0.13,

    }
    
    let taxaRastreamento
    if (rastreamento === "S" || rastreamento === "s") {
        taxaRastreamento = 200.00
    }  
    else {
        taxaRastreamento = 0.00
    }
    
    let precoBase = precosPorRegiao[regiao] || 1.20 
    let desconto = descontoPorRegiao[regiao] || 0.10
    
    let valorFretePecas
    if (quantidadePecas > 1000) {
        let pecasComDesconto = quantidadePecas - 1000
        let precoComDesconto = precoBase * (1 - desconto)
        valorFretePecas = (1000 * precoBase) + (pecasComDesconto * precoComDesconto)
    } 
    else {
        valorFretePecas = quantidadePecas * precoBase
    }
    
    let valorFreteKm = distancia * 1.00
    let totalFrete = taxaRastreamento + valorFretePecas + valorFreteKm
    
 
    alert(
        "Taxa do rastreamento: R$ " + taxaRastreamento.toFixed(2) + "\n" +
        "Valor do frete pelas peças: R$ " + valorFretePecas.toFixed(2) + "\n" +
        "Valor do frete por quilômetro: R$ " + valorFreteKm.toFixed(2) + "\n" +
        "Total do frete: R$ " + totalFrete.toFixed(2)
    )
}


calcularFrete()