let arr = ["Яблоко", "Апельсин", "Груша"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let fruits = ["Яблоко", "Апельсин", "Слива"];

// проходит по значениям, а не по индексу for ..of
for (let fruit of fruits) {
    console.log(fruit);
}

//Технически, так как массив является объектом, можно использовать и вариант for..in:

let arr1 = ["Яблоко", "Апельсин", "Груша"];

for (let key in arr) {
    alert(arr[key]); // Яблоко, Апельсин, Груша
}

//Но на самом деле это – плохая идея. Существуют скрытые недостатки этого способа:// Цикл for..in выполняет перебор всех свойств объекта, а не только цифровых.