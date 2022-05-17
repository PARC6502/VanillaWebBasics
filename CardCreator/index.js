let adder = document.getElementById("add-card")
let area = document.getElementById("card-area")
let count = 1

adder.onclick = function() {
    let newCard = document.createElement("div")
    let cardTitle = document.createElement("h3").appendChild(document.createTextNode("New Title " + count))
    newCard.appendChild(cardTitle)
    newCard.classList.add("card")
    area.appendChild(newCard)
    count++
}