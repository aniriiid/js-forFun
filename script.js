// Функция, которая создает рандомные целые числа 
const getNumber = (max = 11, min = 0) => Math.floor(Math.random() * (max - min) + min);

// Функция, которая оптимизирует массив дата с числами и если там цифры от 1 до 9, добавляет 0 в начале
const optimizeNumber = (n) => {
    return (n + "").length === 2 ? n : "0" + n;
}


const data = [];
const colors = ["#cdb9d6aa", "#02a298aa", "#a3d8cfaa", "#f0b2abaa", "#73615eaa"];
let n = Math.floor(getNumber(61, 6) / 6) * 6; // n - размер массива, где количество элементов будет кратным 6 (мин = 6 в макс = 60), чтобы было красивенько

while (n--) { 
    data.push(getNumber(100)); // добавляет в массив числа меньше 100
}

console.log(data);


const  box = document.querySelector(".box"); 
box.innerHTML = `<div class="card"> </div>`;

data.forEach((el) => {
    box.innerHTML += `<div class="card" style="background-color:${colors[getNumber(colors.length-1)]}">${optimizeNumber(el)}</div>`;
});



function showTime(day = new Date(2025, 2, 1, 23)) {
let now = new Date();
let d, h, m, s;
let time = Math.floor((day - now)/1000);
m = Math.floor(time / 60);
s = time - m * 60;
h = Math.floor(m / 60); 
m -= h * 60; 
d = Math.floor(h / 24);
h -= d * 24;
return `${d} д. ${h} ч. ${m} мин. ${s} сек.`
}



setInterval(function() {
    box.firstElementChild.innerText = `До окончания осталось ${showTime()}`;
}, 1000);