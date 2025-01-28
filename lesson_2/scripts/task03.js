"use strict";
//Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

// Введення необхідних данних
/*
priceProdukt - вартість одиниці товару
quantityGoods - кількість товару 
totalCost - загальну вартість 
taxRate = 5% пдв 
vatTotalCost = ПДВ від загальної вартості
*/

const priceProdukt = parseFloat(prompt(`Вартість одиниці товару`, `0`));
const quantityGoods = parseFloat(prompt(`кількість товару`, `0`));
const VAT_PERCENTAG = 5;

//Обчислення результату 
const totalCost = priceProdukt * quantityGoods;
const vatTotalCost = totalCost * VAT_PERCENTAG / 100

//результат 
document.write(`Загальна вартість = ${totalCost} ПДВ від загальної вартості = ${vatTotalCost}`);



