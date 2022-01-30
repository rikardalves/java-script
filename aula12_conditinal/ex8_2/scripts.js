var current_year = new Date().getFullYear()
var typed_year = document.querySelector('input#txtyear')

document.querySelector('input#button').addEventListener('click', check) // Evento ouvinte

function check(){
    if (typed_year.value.length == 0 || 
        typed_year.value > current_year){
        window.alert('Escolha um ano de nascimento válido')
    } else {
        var result = document.querySelector('div#answer')

        result.innerText = `Você tem/terá ${current_year - Number(typed_year.value)} anos em ${current_year}`
    }

}