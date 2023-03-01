// Задача 1 Напишите формулу, которая вычисляет BMI (Body Mass Index), 
//  BMI = вес (кг)/ рост (м) в квадрате. Напечатайте результат в консоли. Выведите вместе сo своим именем на страницу

let weight = 70;
let height = 1.55;
let bodyMassaIndex = weight / (height ** 2);
let name = "Julia";
console.log(`My name is ${name} and my BMI is ${Math.ceil(bodyMassaIndex)}`);
// Создайте две переменные с любыми значениями. Напишите программу, которая поменяет эти значения местами
let a = 3;
let b = 9;
let temp;



temp = a;
a = b;
b = temp;
console.log(`a=${a}, b=${b}`);

let x = 10;
let y = 5;
x = x + y//15
y = x - y//5
x = x - y;
console.log(x, y)
