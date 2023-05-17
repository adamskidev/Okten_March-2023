// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const arr = ['zero', 'one', 'two', 'three', 4, 5, 6, 7, 8, 9];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
    title: 'Happy Place',
    pageCount: 395,
    genre: 'romance'
}
const book2 = {
    title: 'Bad Summer People',
    pageCount: 257,
    genre: 'thriller'
}
const book3 = {
    title: 'Small Mercies',
    pageCount: 307,
    genre: 'mystery'
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const users = [
    {
        name: 'john',
        username: 'john11',
        password: '1qaz'
    },
    {
        name: 'bill',
        username: 'bill22',
        password: '2wsx'
    },
    {
        name: 'monica',
        username: 'monica33',
        password: '3edc'
    },
    {
        name: 'terry',
        username: 'terry44',
        password: '4rfv'
    },
    {
        name: 'martha',
        username: 'martha55',
        password: '5tgb'
    },
    {
        name: 'robert',
        username: 'rob66',
        password: '6yhn'
    },
    {
        name: 'vanda',
        username: 'vanda77',
        password: '7ujm'
    },
    {
        name: 'sean',
        username: 'sean88',
        password: '8ik,'
    },
    {
        name: 'freddie',
        username: 'fred99',
        password: '9ol.'
    },
    {
        name: 'gloria',
        username: 'gloria00',
        password: '0p;/'
    }
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3 - ???

let x= 5;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = +prompt('Enter minute (0-59)');

if (time <= 15) {
    console.log('first quarter');
} else if (time <= 30) {
    console.log('second quarter');
} else if (time <= 45) {
    console.log('third quarter');
} else {
    console.log('fourth quarter');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

const day = +prompt('Enter day (1-7)');

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Wrong number');
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

const num1 = +prompt('Enter first number');
const num2 = +prompt('Enter second number');

if (num1 > num2) {
    console.log(num1 + ' > ' + num2);
} else if (num1 < num2) {
    console.log(num1 + ' < ' + num2);
} else {
    console.log(num1 + ' = ' + num2);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default" якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

if (!x || false) {
    x = 'default';
}

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let course of coursesAndDurationArray) {
    if (course.monthDuration > 5) {
        console.log(course.title + ' - Super');
    }
}