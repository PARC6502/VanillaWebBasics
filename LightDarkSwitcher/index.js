let darkMode = false
let toggle = document.getElementById("toggle")
let icon = document.getElementById("icon")
let body = document.body

toggle.onclick = function toggle() {
    darkMode ? switchToLight() : switchToDark()
}

function switchToDark() {
    icon.className = "fa-solid fa-sun"
    body.className = "dark"
    darkMode = true
}

function switchToLight() {
    icon.className = "fa-solid fa-moon"
    body.className = "light"
    darkMode = false
}