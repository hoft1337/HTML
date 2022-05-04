let btnRed = document.getElementById('btnRed');

console.dir(btnRed)

// btnRed.onclick = function () {
//     alert('На меня нажали левой кнопкой мыши');
// };

// btnRed.oncontextmenu = function () {
//     alert('На меня нажали правой кнопкой мыши')
// };

// ИЛИ

btnRed.addEventListener('contextmenu', function() {
    alert('На меня нажали правой кнопкой мыши')
})

btnRed.addEventListener('dblclick', function() {
    alert('На меня нажали дважды')
})

btnRed.addEventListener('mouseenter', function() {
    alert('На меня навели указателем')
})

btnRed.addEventListener('mouseleave', function() {
    alert('Указатель покинул поле кнопки')
})