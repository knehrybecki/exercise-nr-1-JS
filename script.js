// /* 1. HTML
// [Jacek       ] [Hacker          ] [Jacek           ]
// 

//  po skopiowaniu tekstu z inputu 1
//  do inputu 2 powinien się wkleić tekst "hacker"
//  a do inputu 3 ten sam tekst

//  Podpowiedź: addEventListener // event.preventDefault()

const inputOne = document.querySelector('.input-one')
const inputTwo = document.querySelector('.input-two')

inputTwo.addEventListener('paste', event =>{
    inputTwo.value = "Hacker"
    event.preventDefault()
})

// / 2. HTML
// [Jacek       ]
// Jacek
// */

// po wpisaniu tekstu do inputu 1
// pod spodem "na żywo" ma pojawić się ten sam tekst

// Podpowiedź: addEventListener

const text = document.querySelector('.text')

inputOne.addEventListener('input', event =>{
    text.innerHTML = inputOne.value
    event.preventDefault()
})