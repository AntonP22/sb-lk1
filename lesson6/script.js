//Пример 1

// const text = `Никанор (др.-греч. Νικάνωρ; IV век до н. э. — 318 или 317 год до н. э.) — военачальник Кассандра, участник Второй войны диадохов.
// В историографии существует несколько взаимоисключающих гипотез, которые идентифицируют Никанора как племянника Аристотеля, либо как сына личного телохранителя-соматофилака македонских царей и сатрапа Киликии[fr] Балакра, либо как одного из военачальников Александра Македонского, который в 334 году до н. э. обеспечил морскую блокаду Милета.
// После смерти регента Македонской империи Антипатра в 319 году до н. э. Никанор принял сторону Кассандра, который боролся за власть в Македонии с Полиперхоном. Никанор руководил македонским гарнизоном в крепости над Афинами Мунихий. Он не только удержал крепость, но и захватил главный порт Аттики Пирей, что стало причиной смены власти в Афинах. Вскоре Кассандр поручил Никанору командование флотом. В сражении при Византии союзный флот Никанора и Антигона Одноглазого разгромил морские силы Полиперхона под командованием Клита Белого. Вскоре после победы при Византии Кассандр заподозрил Никанора в измене, приказал арестовать, а затем инициировал войсковое собрание, которое приговорило военачальника к смерти.`;

// const hash = {}
// for (let i = 0; i < text.length; i++) {
//   const char = text[i].toLowerCase();
//   hash[char] ? hash[char]++ : hash[char] = 1;
// }
// console.log(hash);

//Пример 2

// let car = {
//   number:34,
//   model: "MAZDA MX5",
//   color: "red",
//   user: "Leksa"
// }
// let key = "user"
// for (let k in car) {
//   // console.log(k);
//   console.log(car[k]);
// }
// console.log(car['color']);
// console.log(car[key]);

//Задача 1

// const obj = {
//   Яблоко: "фрукт",
//   Арбуз: "ягода",
//   Помидор: "овощ",
//   Огурец: "овощ",
//   Вишня: "ягода",
// };

// const pro = {};
// for (const k in obj) {
//   // console.log(k);
//   let type = obj[k];
//   console.log(type);
//   console.log("pro", pro);
//   console.log("has", type, pro[type]); // {} pro.фрукт
//   if (!pro[type]) { // если пусто добавим 1
//     pro[type] = 1; // {"фрукт": 1} pro.фрук = 1
//   } else {
//     pro[type]++;
//   }
// }
// console.log(pro);

//Задача 2
// list = [
//   { product: "Cherry", price: 32 },
//   { product: "Apple", price: 25 },
//   { product: "Strawberry", price: 45 },
// ]

// let max = 0;
// let pro = "";

// for (let i = 0; i < list.length; i++) {
//   let obj = list[i];
//   if (max < obj.price) {
//     max = obj.price;
//     pro = obj.product;
//   }
// }
// console.log(pro);

//Задача 3
// const getNumber = (max, min = 1) =>
//   Math.floor(Math.random() * (max - min) + min);
// let cnt = 100; // количество элементов
// let numbers = [];

// while (cnt--) {
//   numbers.push(getNumber(100));
// }
// // console.log(numbers);

// let sum;

// console.time("for");
// sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   // console.log(numbers[i]);
//   sum += numbers[i];
// }
// console.log(sum);
// console.timeEnd("for");

// console.time("forin");
// sum = 0;
// // ТОЛЬКО ДЛЯ ОБЪЕКТОВ!
// for (let i in numbers) {
//   sum += numbers[i];
// }
// console.log(sum);
// console.timeEnd("forin");

// console.time("forof");
// sum = 0;
// //forof - ТОЛЬКО ДЛЯ МАССИВОВ!
// for (let val of numbers) {
//   // val =  один элемент массива
//   sum += val;
// }
// console.log(sum);
// console.timeEnd("forof");

// console.time("foreach");
// sum = 0;
// numbers.forEach(function (val) {
//   sum += val;
// });
// console.log(sum);
// console.timeEnd("foreach");

//Задача 4

// let sentence = "Завтра будет лучше чем вчера";
// let words = [];
// let word = "";

// for (let i = 0; i < sentence.length; i++){
//   let char = sentence[i];
//   console.log(char);
//   if (char !== " ") {
//     word += char;
//   } else {
//     words.push(word)
//     word = ""
//   }
//   console.log(word,words);
// }
// words.push(word)
// console.log(words);


//Задача 5
// const list = [];

// for (let i = 10; i <= 20; i++)
//   list.push(i)

// console.log(list);