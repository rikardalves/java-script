var click_number = document.querySelector('p')
var contador_valor = 0

// O nome do id funcionou sem necessitar armazenar um elemento a uma variável
contador.addEventListener('click', clicks)

function clicks(){
    contador_valor ++
    
    click_number.innerText = `Cliques: ${contador_valor}`
}

// Função do botão de zerar o contador

zerar.addEventListener('click', reset)

function reset(){
    contador_valor = 0
    click_number.innerText = `Cliques: ${contador_valor}`
}