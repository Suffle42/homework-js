"use strict";
/*Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. 
Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

Введення необхідніх даннів. 
quantityGoods1 - кількість першого товару;
costGoods1 - вартість першого товару;
quantityGoods2 - кількість другого товару;
costGoods2 - вартість другого товару;
quantityGoods3 - кількість третього товару;
costGoods3 - вартість третього товару;
totalPrice1 -  обща сума першого; 
totalPrice2 -  обща сума другого;
totalPrice3 -  обща сума третього; 

*/
// Знаходимо результат 
const quantityGoods1 = parseFloat(prompt(`Введить кількість першого товару`, `0`));
const costGoods1 = parseFloat(prompt(`Вартість товару`, `0`));
const totalPrice1 = quantityGoods1 * costGoods1;
const quantityGoods2 = parseFloat(prompt(`Введить кількість другого товару`, `0`));
const costGoods2 = parseFloat(prompt(`Вартість товару`, `0`));
const totalPrice2 = quantityGoods2 * costGoods2;
const quantityGoods3 = parseFloat(prompt(`Введить кількість третього товару`, `0`));
const costGoods3 = parseFloat(prompt(`Вартість товару`, `0`));
const totalPrice3 = quantityGoods3 * costGoods3;
//Виводимо результат
document.write(`Товар №1 кількість ${quantityGoods1} = ${totalPrice1} грн<br>`);
document.write(`Товар №1 кількість ${quantityGoods2} = ${totalPrice2} грн<br>`);
document.write(`Товар №1 кількість ${quantityGoods3} = ${totalPrice3} грн`);