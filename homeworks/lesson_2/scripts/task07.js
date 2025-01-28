"use strict";
//Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

//Введення необхідніх даннів:
const minMonth = 1
const maxMonth = 12
const minDay = 0
const maxDay = 6
// rendomNumber = c
// Знаходимо результат 
const a = minMonth + Math.floor(Math.random() * (maxMonth - minMonth + 1));
const b = minDay + Math.floor(Math.random() * (maxDay - minDay + 1));
const c = a + b
//Виводимо результат
document.write(`Сума = ${c}`)