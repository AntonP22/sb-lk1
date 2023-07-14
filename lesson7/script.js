//СТРОКИ

//Задача 1 []
// firstDiv = "<div><p>First header</p><p>Second header</p></div>";
// let start = "<p>";
// let end = "</p>";

//вариант 1

// function find(str) {
//   let index = firstDiv.indexOf(str);
//   let lastIndex = firstDiv.lastIndexOf(str);
//   // console.log(index);
//   // console.log(lastIndex);
//   return index !== lastIndex;
// }

// // console.log(find(start));
// // console.log(find(end));
// console.log(find(start)&&find(end));

//вариант 2

// firstDiv = "<p>First header<p>Inner header</p></p>";

// let start = "<p>";
// let end = "</p>";

// let index = 0;
// n = 2
// while (n--) {
//   index = index === 0 ?
//       index = firstDiv.indexOf(start) :
//       index = firstDiv.indexOf(start, index + end.length);
//   console.log(index);
//   if (index === -1)
//     break;
//   index = firstDiv.indexOf(end, index + start.length);
//   console.log(index);
//   flag = index !== -1
//   if (!flag) { break }; 
// }
// console.log(index);
// console.log(index!== -1);


//Задача 2
// let road = "15.2 km";
// road = road.split(" km")[0];
// road *= 0.62;
// console.log(road.toFixed(1));

// road = "15.2 km";
// console.log((road.split(" km")[0]*0.62).toFixed(1));

//Задача 3
// let words = "Solar panel"
// words = words.split(" ")
// console.log(words);

// words.length === 1
//   ? console.log("there is only one word")
//   : console.log("There is more than one word");

//Задача 4

// let emails = "lubeuquefrezi-6350@mail.com crevivunuffeu-4516@mail.ru";
//вариант 1
// console.log(emails.split(" "));
//вариант 2
// let reg = /\S*@[a-z]+\.(com|ru)/g;
// console.log(emails.match(reg));
//вариант 3
// let em = "";
// let arr = [];
// for (let i = 0; i < emails.length; i++) {
//   if (emails[i] !== " ") {
//     em += emails[i]
//   } else {
//     arr.push(em);
//     em = ""
//   }
// }
// arr.push(em);
// console.log(arr);
// //вариант 4
// console.log(emails.match(/^$|\S+/g));

//Задача 5
// let ticket = "BM-123456789012:RU";

// let concert = /^[a-z]+-[0-9]{8}:/i;
// let theater = /^\w+-\d{12}:/i;

// if (concert.test(ticket)) {
//   console.log("Выбран билет на концерт");;
// } else if (theater.test(ticket)) {
//   console.log("Выбран билет в театр");
// } else {
//   console.log("Билет не определен");
// }

//МАССИВЫ

//Задача 1
// let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>";

// layout = layout.match(/\d+/g);
// console.log(layout);
//вариант 1
// console.log(layout ? layout.map(n => n%2===0 ? n**2 : +n) : []);
//вариант 2
// if (layout) {
//   layout = layout.map(function (el) {
//     // console.log(el);
//     el = el %2 === 0 ? el**2: +el;
//     return +el;
//   })
//   console.log(layout);
// } else {
//   console.log([]);
// }

//Задача 2

// let nums = [1, 2, 3, 4, 5]
// console.log(nums.map(n => `<p>${n}</p>`));

//Задача 3

// let values = ["Строка", true, "Числа", "Объект", "Не число", false, "Не объект"]
//вариант 1
//let start = values.indexOf(true);
//let end = values.lastIndexOf(false);
//вариант 2
// let start = values.findIndex(el => typeof el === "boolean");
// let end = values.findLastIndex(el => typeof el === "boolean"); 

// console.log(values.slice(start, end+1));

//Задача 4
// let values = [10, 185, 11200, 980]
// let i = values.findIndex(el => (el + "").length === 4);
// if (i !== -1) {
//   console.log(i);
// } else {
//   console.log("Искомый элемент не был найден");
// }

//Задача 5
let tickets = "Train: AV432, FS452, 0E402. Airplane: DR578, JN1089, NDK140."
//вариант 1
tickets = tickets.split(".")
tickets = tickets.reduce((acc, el) => {
  el = el.trim();
  if (el) {
    acc.push(el);
  }
  return acc;
}, [])
// console.log(tickets);
//вариант 2
let obj = {};
tickets.forEach(t => {
  let arr = t.split(":");
  let name = arr[0].toLowerCase()
  arr[1] = arr[1].trim();
  arr.shift();
  obj[name] = arr[0].split(", ");
})
  console.log(obj);