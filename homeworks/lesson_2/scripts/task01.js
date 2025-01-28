"use strict";
//Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

/* Позначення
         firstNumber - перше введене дійсне число
         secondNumber - друге введене дійсне число
         sumResult - їх сума
         multiplyResult - їх добуток
         divisionResult - їх частку
      */

// Введення необхідних данних

let firstNumber = parseFloat(prompt('Введіть перше будь-яке дійсне число', '0'));
let secondNumber = parseFloat(prompt('Введіть друге будь-яке дійсне число', '0'));

// Обчислення результатів

let sumResult = firstNumber + secondNumber;
let multiplyResult = firstNumber * secondNumber;
let divisionResult = firstNumber / secondNumber;

// Виведення результатів у вигляді таблиці

document.write(`
	<table>
		<tr>
			<th>Сума</th>
			<th>Добуток</th>
			<th>Частка</th>
		</tr>
		<tr>
			<td>${sumResult}</td>
			<td>${multiplyResult}</td>
			<td>${divisionResult.toFixed(3)}</td>
		</tr>
	</table>`)
