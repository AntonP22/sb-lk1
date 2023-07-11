// Задача 1
// let name = "Всеволод"
// let lastname = "\nСтарозубов"

// let result = name.trim().length + lastname.trim().length
// console.log(result);

// Задача 2
// let word_1 = "bycicle";
// word_1 += " ";
// let word_2 = "Good";

// console.log(word_1 + word_2);
// console.log(`${word_1}${word_2}`);

// Задача 3
// let obj = { name: "Анатолий", lastname: "Максимов", age: 32 };

// result = `Имя: "${obj.name}" Фамилия: '${obj.lastname}' Возраст:${obj.age}`
// console.log(result);

//Задача 4
// name = "Анатолий";
// lastname = "Максимов";
// age = 32;

// let person = {
//   name: name,
//   lastname: lastname,
//   age: age
// }
// console.log(person);

//Задача 5
// let value = "Privet"
// console.log(value === null ? null : typeof value);

//Задача 6
// let num_1 = "3"
// let num_2 = "5"

// console.log(+num_1 + +num_2);

//Задача 7
// let size = "500.5%"
// console.log(parseFloat(size));

//Задача 8
// let a = 2, b = 4;
// console.log((a * b) ** 2);
// console.log(Math.pow(a * b, 2));
// console.log((a * b) * (a * b));

//Задача 9 Сумма квадратов двух катетов = квадрат гипотенузы

// let c = (a ** 2 + b ** 2) ** 1 / 2;
// console.log(c);

//Задача 10

// a = "5px";
// b = "7px";
// c = "10px";

// console.log(parseFloat(a) * parseFloat(b) * parseFloat(c));

//Задача 11
// let price = "12 rubles"
// price = parseInt(price);

// if (isNaN(price)) {// не число
//   console.log("not a number");
// } else if (price <=0) { // 0 or less
//   console.log("number not correct");
// } else {
//   console.log("price");
// }

//Задача 12

// let task = "delete"

// switch (task) {
//   case "delete": console.log('delete');
//     break;
//   case "rename": console.log("rename");
//     break;
//   case "edit": console.log("edit");
// }

//Задача 13

// a = 32
// b = 13
// c = 3

// // let max = Math.max(a, b, c)
// // console.log(max);

// let max;
// if (a >= b && a >= c) {
//   max = a;
// } else if (b >= c && b >= a) {
//   max = b;
// } else {
//   max = c;
// }
// console.log(max);

//Задача 14

// price = 10000
// let range = "day"
// let words = {
//   month: "in a month",
//   day: "in a day",
//   week: "in a week",
// }

// switch (range) {
//   case "month": result = `${price} ₽ ${words.month}`; break;
//   case "day": result = `${price} ₽ ${words.day}`; break;
//   case "week": result = `${price} ₽ ${words.week}`; break;
// }
// console.log(result);
// console.log(`${price} ₽ ${words[range]}`);

//Задача 15

let a = 2,
  b = 0;
let sign = "*";
switch (sign) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  // case "/": if (b === 0) {
  //   console.log("Делтить на 0 нельзя");
  // } else {
  //   console.log(a / b);
  // }break;
  case "/":
    b === 0 ? console.log("Делтить на 0 нельзя") : console.log(a / b); break;
  case "*":
    console.log();
    break;
}
