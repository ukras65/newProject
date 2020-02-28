'use strict'



// alert ("Hello world");
// Обьекты
/*let vova = {
    name: "Vova",
    age: 26,
    isMarried: true
};

console.log(vova["name"]);
let answer = confirm("Are you here?");
console.log(answer);

let arr = ["1.png", "2.jpeg", "3.svg"];*/
// Вопросы
/*let answer = prompt("Есть ли тебе 18?", "Да");
console.log(typeof(null));
console.log("arr" + "asd");
console.log(4 + +"6");

let incr = 10,
    decr = 10;*/
// И ИЛИ
// console.log(++incr);
// console.log(--decr);
// let isChaked = true,
//     isClose = true;
// console.log(isChaked && isClose);
// Условия
/*if (1) {
    console.log("Верно!")
} else {
    console.log("Не верно!")
}

let num = 50;
(num == 12) ? console.log("yese") : console.log("no");
if (num < 49) {
    console.log("OK")
} else if (num > 100) {
    console.log("NO")
} else {
    console.log("YES")
};

switch (num) {
    case num < 49:
        console.log("No");
        break;
    case num > 100:
        console.log("Nain");
        break;
    case num > 80:
        console.log("Net");
        break;
    case 50:
        console.log("Yes");
        break;
    default:
        console.log("Что-то пошло не так");
        break;
}*/
// Циклы
/*while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);

let num = 50;
for (num; num < 55; num++) {
    if (num == 51) {
        continue; // Пропустить 51;
    }
    console.log(num);
}


for (num; num < 55; num++) {
    if (num == 51) {
        break; // Остановить 51;
    }
    console.log(num);
} */
// let x = 5; 
// console.log(x++);
// console.log([] + false - null + true);
// let y = 1; 
// let x = y = 2;
// console.log(2 && 1 && null && 0 && undefined );
// for (let i = 1; i < 2; i++) {
//     let a = prompt("Введие обязательную статью расходов в этом месяце", ""),
//         b = prompt("Восколько обойдеться?","");
//     appData.Expenses[a] = b;
//     if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a !="" && b !="" && a.length < 50) {
//         console.log("Проверка пройдена");
//         appData.Expenses[a] = b; 
//     } else {
//     }
// };
// let money = +prompt("Ваш бюджет на месяц",""),
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");
// let money = +prompt("Ваш бюджет на месяц",""),
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");
// let appData = {
//         Budjet: money,
//         Time: time,
//         Expenses: {
//         },
//         optionalExpenses: {},
//         income: [],
//         savings: false
//     };
// let a = prompt("Введие обязательную статью расходов в этом месяце", ""),
//     b = prompt("Восколько обойдеться?","");
// while ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a !="" && b !="" && a.length < 50) {
//     console.log("OK");
//     appData.Expenses[a] = b; 
// };
// do {
//     let a = prompt("Введие обязательную статью расходов в этом месяце", "");
//     let b = prompt("Восколько обойдеться?","");
//     appData.Expenses[a] = b; 
// }
// while ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a !="" && b !="" && a.length < 50);
// console.log(appData);
// showFirst("Hello world");
// function culc(a,b) {
//     return(a + b);
// }
// console.log(culc(6,8));
// console.log(culc(8,8));
// let calc = (a,b) => {
//     a+b
// }
// console.log(culc(7,9));
// let str = "test";
// console.log(str.length); // Длина строки. Описание снр.
// //Методы
// сonsole.log(str.toLowerCase()); // Нижный регистр
// console.log(str.toUpperCase()); // Верхний регистр
// let twelwe = "12.2px";
// // console.log(Math.round(twelwe)); // Округление
// console.log(parseInt(twelwe)); // До целого числа
// console.log(parseFloat(twelwe)); // Откинули пиксели
// function sum(a,b) {
//     console.log(a + b);
// }
// sum(5,1);
// function one(learn, js) {
//     console.log("I learn" + learn);
//     js();
// }
// one("JS", function() {
//     console.log("Right!");
// });
// function two(Leang, callback) {
//     console.log(Leang + "- Это круто!");
//     callback();
// }
// two("JavaScript", function() {
//     console.log("You are win");
// });
// function second(one, two) {
//     console.log(one + "Hellog world");
//     two();
// }
// function done() {
//     console.log("Yeeeessssss");
// }
// second("Vova -", done);
/* let options = {
    audi: "a8",
    mercedes: "r8",
    bmw: "m5",
    porsche: "Panamera"
};

// console.log(options.porsche);// Получили значение;

options.bool = false;
options.skoda = {
    rapid: "15000$",
    octavia: "19999$"
};

options.porsche = {
    Panamera: "45000$"
};
delete options.bool; // Удалить обьект; */
/* console.log(options); */
/* for(let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
} // Перебор свойств с помощю in; */
/* console.log(Object.keys(options.porsche)); // То же самое но проще. .leang */
// Работа с масивами
// let arr = ["first", "second", 3, 4, 5];
/* arr.pop();
arr.shift();
arr.push("5");
arr.unshift("1"); */
/* arr[99] = 99; // строгая ошибка;
console.log(arr.length); // 100
console.log(arr); // [ 1, 2, 3, 4, 5, <94 empty items>, 99 ] */
/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */
/* arr.forEach(function(item, i, mass) {
    console.log(i + ": " + item + "(массив: " + mass + ")");
});
 */
/* let mass = [1,3,5,7,9];
for(let key of mass) {
    console.log(key);
} */
/* let ans = prompt("", ""),
    arr = [];

arr = ans.split(",");
console.log(arr); // Записывает эллементы в массив
 */
/* let arr = ["aaa", "zzz", "qqq", "qwqw"],
    i = arr.join(", ");

console.log(i); // Превращает в строку */
/* let arr = ["1", "15", "22", "121"],
    i = arr.sort(compareNum);
function compareNum(a,b) {
    return a-b;
}

console.log(i); // Сортирует по алфавиту;  */
/* // Обьектно ореентированое програмирование;
let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armor);
 */
// Конструктор функции
//Через функцию;
/* function User(name) {
    this.name = name;
    this.isAdmin = false;
}

/*  let user = new User("Vova");
 console.log(user);


let id1 = new User("Ania"),
    id2 = new User("Vova");

console.log(id1);
console.log(id2);
*/
class User {
    constructor(name, email) {
        this.name = name;
        this.mail = email;
    }
    sayHi() {
        console.log(this.name);
        console.log(this.mail);
    }
}

let user = new User("Vova", "velogon6565@gmail.com");
user.sayHi();