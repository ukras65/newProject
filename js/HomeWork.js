"use strict"
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц","");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц","");
    }
}
start();

let appData = {
    Budjet: money,
    Time: time,
    Expenses: {
    },
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 1; i < 2; i++) {
        let a = prompt("Введие обязательную статью расходов в этом месяце", ""),
            b = prompt("Восколько обойдеться?","");
        if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a !="" && b !="" && a.length < 50) {
            console.log("Проверка пройдена");
            appData.Expenses.a = a;
            appData.Expenses.b = b; 
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

appData.moneyPerDay = (appData.Budjet / 30).toFixed(1); // Метод округления 1(до первого знака после запятой)
alert(" Ежедневный бюджет :" + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
    console.log("Cредний достаток");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?",""), 
            percent = +prompt("Под какой процент?","");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();








// // console.log(appData["Budjet"]);
// // console.log(appData["Time"]);
// // console.log(appData["Expenses"]);
// // console.log(appData["savings"]);
// // console.log(money);
// // console.log(time);

// do {
//     let a = prompt("Введие обязательную статью расходов в этом месяце", "");
//     let b = prompt("Восколько обойдеться?","");
//     appData.Expenses[a] = b; 
// }
// while ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a !="" && b !="" && a.length < 50);