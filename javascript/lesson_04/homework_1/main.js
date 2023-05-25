// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleArea(a, b) {
    return a * b;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(r) {
    return Math.PI * (r ** 2);
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(h, r) {
    return 2 * Math.PI * r * (r + h);
}

// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayItems(array) {
    for (let item of array) {
        console.log(item);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text) {
    document.write(`<p> ${text} </p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list(text, number) {
    document.write('<ul>');
    for (let i = 0; i < number; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write('</ul>');
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrayList(array) {
    document.write('<ul>');
    for (let item of array) {
        document.write(`<li> ${item} </li>`);
    }
    document.write('</ul>');
}

// - створити функцію яка повертає найменьше число з масиву

function minimum(array) {
    let minimumNumber = array[0];
    for (let number of array) {
        if (number < minimumNumber) {
            minimumNumber = number;
        }
    }
    return minimumNumber;
}

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(array) {
    let result = 0;
    for (let number of array) {
        result += number;
    }
    return result;
}

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    const item1 = arr[index1];
    const item2 = arr[index2];
    for (let i = 0; i < arr.length; i++) {
        if (i === index1) {
            arr[i] = item2;
        } else if (i === index2) {
            arr[i] = item1;
        }
    }
    return arr;
}

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return sumUAH / currencyValue.value;
        }
    }
}