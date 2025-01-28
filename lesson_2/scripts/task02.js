"use strict";
// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

// Введення необхідних данних
const birthYear = parseInt(prompt`Ваш рік народження `)
const currentYear = 2025

// Знаходимо кількість років 

const numberYears = currentYear - birthYear

//висновок 
document.write(`вам ${numberYears} років`)
