// Obtendo os elementos de mensagem e imagem
var mensage = document.querySelector('div#mensage')
var image = document.querySelector('img#image')

var hours = new Date().getHours() // Hora atual
mensage.innerHTML = `Agora são ${hours} horas` // Aviso da hora atual

if (6 <= hours && hours < 12) {
    window.alert('Tenha um ótimo dia')
    image.src = 'images/morning.png'
    document.body.style.backgroundColor = '#c4fdff'
    document.body.style.color = 'black'
    document.querySelector('footer').style.color = '#000000cc'
    
} else if (12 <= hours && hours < 18) {
    window.alert('Tenha uma boa tarde')
    image.src = 'images/evening.png'
    image.alt = 'Representação da tarde'
    document.body.style.backgroundColor = '#bd8712'
} else {
    window.alert('Tenha uma boa noite')
    image.src = 'images/night.png'
    image.alt = 'Representação da noite'
    document.body.style.backgroundColor = '#002966'
}
