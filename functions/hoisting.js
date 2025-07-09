testar()

function testar() {
    console.log("Teste")
}

// VAI FUNCIONAR SEM PROBLEMA , MAS O ABAIXO... NÃO IRÁ


teste()
const teste = function teste() {
    console.log("teste")
}



//ESSE TAMBÉM VAI DAR ERRADO 
console.log(declarar)
const declarar = "Declarei"


// HOISTING É O COMPORTAMENTO DE AS DECLARAÇÕES DE VARIÁVEIS E FUNÇÕES , SÃO MOVIDAS DIRETAMENTE PARA O TOPO , ASSIM , PODEMOS INVOCAR-LAS "ANTES" MESMO DE DECLARAR, PQ ELAS VÃO PARA O TOPO DE QUALQUER FORMA 

