// Moving a card (square div element) using the Drag and Drop API 
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

let card = document.getElementById('card')
let main = document.querySelector('main')
// maxX and maxY used so square is limited to the <main> element (ish)
const maxX = main.clientWidth - card.clientWidth
const maxY = (main.clientHeight*0.98) - card.clientHeight
card.style.left = 0
card.style.top = 0

function constrain(num, min, max) {
    // constrain a number between min and max
    return Math.min(Math.max(num, min), max)
}

let cardStartX, cardStartY

card.ondragstart = (event) => {
    // Document body is a valid drag target
    document.body.ondragover = () => { return false }
    document.body.ondragenter = () => { return false }
    
    // change card styling while it's being dragged
    card.style.border = "3.5px solid green"
    card.style.background = "rgba(5,5,5,0.2)"

    // Record initial x and y position of mouse
    cardStartX = event.x
    cardStartY = event.y
}

card.ondrag = (event) => {
    // hide original element while it's being dragged
    card.hidden = true
}

card.ondragend = (event) => {
    // Calculate new x and y position of card, while constraining them to the main element
    let newX = parseInt(card.style.left) + event.x - cardStartX
    newX = constrain(newX, 0, maxX)
    let newY = parseInt(card.style.top) + event.y - cardStartY
    newY = constrain(newY, 0, maxY)

    // Set the new position of the card
    card.style.left = newX + 'px'
    card.style.top = newY + 'px'

    // Reset card styling
    card.style.border = "2px solid black"
    card.style.background = "white"

    // Make card visible again
    card.hidden = false

    // Document body is no longer valid drag target
    document.body.ondragover = () => { return true }
    document.body.ondragenter = () => { return true }
}