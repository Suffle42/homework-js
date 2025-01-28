"use strict";
//Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.


/* призначення 
numberSeconds- кількість секунд 
hoursPassed - пройшло годин 
minutesPassed - пройшло хвилин 
secondsInHour - кількість секунд в годині 
secondsInMinute - кількість секунд в хвилині 
*/

// Вводимо необхідні дані
const numberSeconds = parseInt(prompt(`Кількість секунд, що пройшла від початку доби`, `0`));
const secondsInMinute = 60;
const secondsInHour = 3600;

// Знаходимо результат 
const hoursPassed = Math.floor(numberSeconds / secondsInHour);
const minutesPassed = Math.floor((numberSeconds % secondsInHour) / secondsInMinute);

//Виводимо результат
document.write(`Від початку доби пройшло ${hoursPassed} годин, ${minutesPassed}хвилин.`);
