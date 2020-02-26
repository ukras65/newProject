"use strict"

let money = +prompt("Ваш бюджет на месяц",""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    onequestions = prompt("Введие обязательную статью расходов в этом месяце", ""),
    twoquestion = +prompt("Восколько обойдеться?","");

let appData = {
    Budjet: money,
    Time: time,
    Expenses: {
        firstQuest: onequestions,
        twoQuest: twoquestion
    },
    optionalExpenses: "",
    income: "",
    savings: false
};

alert((money) / 30);

console.log(appData["Budjet"]);
console.log(appData["Time"]);
console.log(appData["Expenses"]);
console.log(appData["savings"]);
console.log(money);
console.log(time);