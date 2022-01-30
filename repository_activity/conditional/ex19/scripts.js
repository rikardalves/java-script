// Valores do input 1 e 2
var first_value = document.querySelector('input#value_1')
var second_value = document.querySelector('input#value_2')

function calc() {
    result = 0

    if (document.getElementById('sum').checked) {
        result = Number(first_value.value) + Number(second_value.value)
    } else if (document.getElementById('subtract').checked) {
        result = Number(first_value.value) - Number(second_value.value)
    } else if (document.querySelector('#multiply').checked) {
        result = Number(first_value.value) * Number(second_value.value)
    } else if (document.querySelector('#division').checked) {
        result = Number(first_value.value) / Number(second_value.value)
    } else {
        result = Number(first_value.value) ** Number(second_value.value)
    }

    document.querySelector('p#result').innerText = `Resultado: ${result}`
}
