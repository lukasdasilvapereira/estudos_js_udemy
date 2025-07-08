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

