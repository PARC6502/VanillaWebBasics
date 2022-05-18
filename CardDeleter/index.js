let template = document.querySelector('template').content.firstElementChild
let wrapper = document.getElementById('wrapper')

function cardDeleter(card) {
    card.remove()
}

function createCard(cardTitle) {
    let newCard = template.cloneNode(true)
    newCard.querySelector('h3').append(cardTitle)
    newCard.querySelector('.deletebutton').onclick = () => {cardDeleter(newCard)}
    wrapper.append(newCard)
}

for (let index = 1; index < 4; index++) {
    createCard("Card " + index)
}

let cardCreator = document.getElementById('card-creator')

cardCreator.addEventListener("submit", function(event){
    event.preventDefault()
    let titleInput = cardCreator.querySelector('input')
    let cardTitle = document.createTextNode(titleInput.value || "Card")
    titleInput.value = ""
    createCard(cardTitle)
})