// localStorage.setItem('username','hondamir pahan')

// const username = localStorage.getItem('username')
// console.log(username);


// localStorage.removeItem('username')

// let a = prompt('isim')
// let b = prompt('familya')
// let c = prompt('age')

// localStorage.setItem('ism', a)
// let ism = localStorage.getItem('ism')
// console.log(a);
// localStorage.setItem('familya', b)
// let ifamilya = localStorage.getItem('family')
// console.log(b);
// localStorage.setItem('age', c)
// let age = localStorage.getItem('age')
// console.log(c);

let form = document.querySelector("form")
let input = document.querySelector("#input")
let text = document.querySelector("i")
let inputValue = input.value

input.value = localStorage.getItem("textValue")
text.innerHTML = localStorage.getItem("textValue")
text.className = localStorage.getItem("textClass")

let myFunction = (event) => {
    event.preventDefault()
    let inputValue = input.value

    if (inputValue != "") {
        localStorage.clear()
        localStorage.setItem("textClass", "text")
        localStorage.setItem("textValue", inputValue)

        text.className = localStorage.getItem("textClass")
        text.innerHTML = localStorage.getItem("textValue")
    }
}

form.addEventListener("submit", myFunction)