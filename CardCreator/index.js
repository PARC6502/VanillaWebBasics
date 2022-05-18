let adder = document.getElementById("add-card")
let area = document.getElementById("card-area")
let template = document.getElementById('card')
let cards = document.getElementsByClassName('card')

adder.onclick = function() {
    let newCard = template.content.firstElementChild.cloneNode(true)
    newCard.querySelector('h3').appendChild(document.createTextNode("New Title " + (cards.length+1)))
    area.appendChild(newCard)
}