let $ = document

let a = $.querySelector('#a').innerText
let b = $.querySelector('#b').innerText
let c = $.querySelector('#c').innerText
let d = $.querySelector('#d').innerText

let array = [a, b, c, d, "#a", "#b", "#c", "#d"]

let list = $.querySelector('.list')

for (let i = 0; i < 4; i++) {
    list.innerHTML += '<li><a href='+array[i+4]+'>' + array[i] + '</a></li>'
}
