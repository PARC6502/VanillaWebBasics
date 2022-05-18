// Get content of card template from HTML document
let template = document.querySelector('template').content.firstElementChild
// Get the wrapper where the cards will go
let wrapper = document.getElementById('wrapper')

function deleteCard(card) {
    card.remove()
}

function createCard(cardTitle) {
    // Clone card template
    let newCard = template.cloneNode(true)
    newCard.querySelector('h3').append(cardTitle)
    newCard.querySelector('.deletebutton').onclick = () => {deleteCard(newCard)}
    // Add new card to document
    wrapper.append(newCard)
}

// Populate page with 3 initial cards
for (let index = 1; index < 4; index++) {
    createCard("Card " + index)
}

let cardCreator = document.getElementById('card-creator')
let titleInput = cardCreator.querySelector('input')
// Take over the form's submit event
cardCreator.addEventListener("submit", function(event){
    event.preventDefault()
    let cardTitle = document.createTextNode(titleInput.value || "Card")
    // Delete any text in the card creator form after submitting
    titleInput.value = ""
    createCard(cardTitle)
})