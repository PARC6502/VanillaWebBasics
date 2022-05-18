let deleteButtons = document.getElementsByClassName("deletebutton")

for (let deleteButton of deleteButtons) {
    deleteButton.onclick = function() {
        let card = deleteButton
        while (card.className != "card") {
            card = card.parentElement
        }
        card.remove()
    }
}