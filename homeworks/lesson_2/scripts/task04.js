"use strict";
// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.


/*Вводимо необхідні данні 
lengthCM = довжину у сантиметрах
lingthMetrs = довжина у метрах 
lingthKilometers = довжина у кілометрах 
*/
const lengthCM = parseFloat(prompt(`Введить довжину у сантіметрах`, `0`));


// Знаходимо результат 

const lingthMetrs = lengthCM / 100;
const lingthKilometers = lengthCM / 100000;

//Виводимо результат 
document.write(`Довжина у сантіметрах = ${lengthCM} Довжина у метрах = ${lingthMetrs} Довжина у кілометрах = ${lingthKilometers}`)





