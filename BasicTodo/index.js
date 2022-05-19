let newTodoButton = document.getElementById('new-todo')
let itemTemplate = document.getElementById('item-template').content.firstElementChild
const todoContainer = document.getElementById('todo-container')


let todoCreator = document.getElementById('todo-creator')
let todoInput = todoCreator.querySelector('input')
todoCreator.addEventListener("submit", function(event) {
    let newTodo = itemTemplate.cloneNode(true)
    let itemText = document.createTextNode(todoInput.value)
    newTodo.querySelector('.item-text').append(itemText)
    newTodo.querySelector('.item-delete').onclick = () => newTodo.remove()
    newTodo.querySelector('.item-tick').addEventListener('click', () => updateTodo(newTodo))
    todoContainer.append(newTodo)
    todoInput.value = ""
    event.preventDefault()
})

let hideDoneCheck = document.getElementById('hide-done-check')
hideDoneCheck.addEventListener('click', updateItemHide)

function updateItemHide() {
    let todos = document.getElementsByClassName('item')
    for (let item of todos) {
        if (hideDoneCheck.checked) item.classList.add('hidden')
        else item.classList.remove('hidden')
    }
}

function updateTodo(item) {
    item.classList.toggle('done')
    updateItemHide()
}
