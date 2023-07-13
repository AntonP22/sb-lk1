//Задача 1

// let start = 0, end = 50;
// let sum = 0;
// while (start <= end) {
//   console.log(start, end);
//   if (start % 5 === 0) {
//     sum += start;
//     console.log(sum);
//   }
//   start++;
// }

//Задача 2  

// let word = "word";
// start = 0;
// end = word.length;
// let drow = "";
// while (start < end) { 
//   console.log(word[start]);
//   start++;
// }

// while (--end >= start) {
//   drow += word[end];
// }
// console.log("while", drow);

// for (; --end >= start;) {
//   drow += word[end];
// }
// console.log("for",drow);

//Задача 3
// word = "Машина"
// let rev = "";

// for (let i = rev.length - 1, start = 0; i >= 0; i--) { 
//     rev += word[i];
// }
// console.log(word, rev);
// if (word.toLowerCase() === rev.toLowerCase()) { 
//   console.log("Слово является палиндромом!");
// } else {
//   console.log("Слово не является палиндромом!");
// };

// let flag = true;
// for (let i = 0, end = Math.floor(word.length / 2); i < end; i++) {
//   if (word[i].toLowerCase() !== word[word.length - 1 -i].toLowerCase()) {
//     flag = false;
//     break;
//   }
// }
// if (flag) {
//   console.log("Слово является палиндромом!");
// } else {
//   console.log("Слово не является палиндромом!");
// }

//Фунция Декларируемая (запускается в любом месте кода)

// function sleep() {
//   console.log("я иду спать");
// }
// sleep();

//Фунциональное выражение не работает в коде выше чем она создана

// let sleep = function () {
//   console.log("я иду спать");
// }


//Задача 4

// let num_1 = 3, num_2 = 6;

// function mult(x,y) {
//   console.log(x * y);
// }
// mult(num_1,num_2);

//Задача 5

// let num = 9;
// function square(n) {
//   return n ** 2;
// }
// square(num);
//Задача 6

// num = 2;
// result = "";

// for (let n = 0; n < 3; n++){
//   num = square(num)
//   if (n) {
//     result += " ";
//   }
//   result += num + " ";
// }
// console.log(result);

//Инкапсуляция (внутри капуслы - внутри ваккуума) 
//(a, b, c) => ???? => отдает число / строку / boolean(return)

//Задача 7

let value = 6;
let total = 24;

function getPercent(v,t) {
  return v * 100 / t;
}
console.log(getPercent(value, total));