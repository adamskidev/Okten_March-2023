// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

const string1 = 'hello';
const string2 = 'owu';
const string3 = 'com';
const string4 = 'ua';
const number1 = 1;
const number2 = 10;
const number3 = -99;
const number4 = 123;
const number5 = 3.14;
const number6 = 2.7;
const number7 = 16;
const boolean1 = true;
const boolean2 = false;

// - Вивести кожну змінну за допомогою: console.log

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);
console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);
console.log(number6);
console.log(number7);
console.log(boolean1);
console.log(boolean2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

const firstName = 'Jon';
const middleName = 'Bon';
const lastName = 'Jovi';
const person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

const name = prompt('Як тебе звати?');
const fathersName = prompt('Як по батькові?');
const age = prompt('Скільки тобі років?');

console.log(`${name} ${fathersName} (${age})`);