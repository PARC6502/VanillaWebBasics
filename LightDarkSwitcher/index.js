let toggle = document.getElementById("toggle")
let icon = document.getElementById("icon")
let body = document.body
let darkMode = body.classList.contains("dark")

toggle.onclick = function toggle() {
    body.classList.toggle("dark")
    darkMode ? switchToLight() : switchToDark()
}

function switchToDark() {
    icon.className = "fa-solid fa-sun"
    darkMode = true
}

function switchToLight() {
    icon.className = "fa-solid fa-moon"
    darkMode = false
}