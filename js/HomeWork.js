// "use strict"

// let money = +prompt("Ваш бюджет на месяц",""),
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");
    

// let appData = {
//     Budjet: money,
//     Time: time,
//     Expenses: {
//     },
//     optionalExpenses: {},
//     income: [],
//     savings: false
// };

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

// appData.moneyPerDay = appData.Budjet / 30;
// alert(" Ежедневный бюджет :" + appData.moneyPerDay);

// if(appData.moneyPerDay < 100) {
//     console.log("Минимальный уровень достатка");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
//     console.log("Cредний достаток");
// } else if (appData.moneyPerDay > 2000) {
//     console.log("Высокий уровень достатка");
// } else {
//     console.log("Ошибка");
// }

// console.log(appData);







// // console.log(appData["Budjet"]);
// // console.log(appData["Time"]);
// // console.log(appData["Expenses"]);
// // console.log(appData["savings"]);
// // console.log(money);
// // console.log(time);