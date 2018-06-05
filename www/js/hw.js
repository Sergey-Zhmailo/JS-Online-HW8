/////////////////          HW7           ////////////////////
// События
// 1.
document.addEventListener('click', function (evn) {
    const btn = document.getElementById('btn-msg');

    if (evn.target.id == 'btn-msg') return alert(btn.innerHTML);
});
// 2.
document.addEventListener('mouseover', function (evn) {
    const btn = document.getElementById('btn-msg');

    if (evn.target.id == 'btn-msg') event.target.style.backgroundColor = "red";
    else btn.style.backgroundColor = "";
});
// 3.
const result = document.getElementById('tag');

document.addEventListener('click', function (evn) {
    result.innerHTML = 'Tag: ' + evn.target.tagName;
});

// Формы
// 2.
let arr = [
    {'лето': 'одень футболку и шорты'},
    {'осень': 'одень куртку и штаны'},
    {'зима': 'одень шубу и теплые штаны'},
    {'весна': 'одень ветровку и джинсы'}
];

let forma = document.forms['vremena-goda'];
let sel = forma.elements['sezoni'];
let inputText = forma.elements['opisanie'];
let elementName;
let elementValue;

for (let i = 0; i < arr.length; i++) {
    elementName = Object.keys(arr[i]);
    elementValue = Object.values(arr[i]);
    sel.insertAdjacentHTML('beforeend','<option>'+ elementName+'</option>');
}

sel.addEventListener('change', function () {
    inputText.value = Object.values(arr[sel.selectedIndex]);
});

