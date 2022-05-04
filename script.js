const TEXT_ID = 'text'
const BTN_RED = 'btnRed'
const BTN_GREEN = 'btnGreen'
const BTN_YELLOW = 'btnYellow'
const RED_COLOR = 'red'
const GREEN_COLOR = 'green'
const YELLOW_COLOR = 'yellow'
const TEXT_CHANGE_TO_GREEN = 'Цвет текста изменен на зеленый'
const TEXT_CHANGE_TO_RED = 'Цвет текста изменен на красный'
const TEXT_CHANGE_TO_YELLOW = 'Цвет текста изменен на желтый'


// function getElement(idElement) {
//     return document.getElementById(idElement)
// }

// function setTextColor(color) {
//     text.style.color = color;
// }

// let text = getElement (TEXT_ID)
// let btnRed = getElement (BTN_RED)
// let btnGreen = getElement (BTN_GREEN)

// // btnRed.onclick = function() {
// //     text.style.color = 'red'
// //     alert('Цвет текста изменен на красный')
// // };

// btnRed.addEventListener('click', () => {
//     setTextColor(RED_COLOR)
//     alert(TEXT_CHANGE_TO_RED)
// });

// btnGreen.onclick = () => {
//     setTextColor(GREEN_COLOR)
//     alert(TEXT_CHANGE_TO_GREEN)
// };

// Задача:
// Добавить свою кнопку и обработать событие клика, которая будет перекрашивать текст в желтый

function getElement(idElement) {
    return document.getElementById(idElement)
}

function setTextColor(color) {
    text.style.color = color;
}

let text = getElement (TEXT_ID)
let btnRed = getElement (BTN_RED)
let btnGreen = getElement (BTN_GREEN)
let btnYellow = getElement (BTN_YELLOW)

// btnRed.onclick = function() {
//     text.style.color = 'red'
//     alert('Цвет текста изменен на красный')
// };

btnRed.addEventListener('click', () => {
    setTextColor(RED_COLOR)
    alert(TEXT_CHANGE_TO_RED)
});

btnGreen.onclick = () => {
    setTextColor(GREEN_COLOR)
    alert(TEXT_CHANGE_TO_GREEN)
};

btnYellow.onclick = () => {
    setTextColor(YELLOW_COLOR)
    alert(TEXT_CHANGE_TO_YELLOW)
};