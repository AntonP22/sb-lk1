//Задача 1
let new_element = document.createElement("p");
new_element.innerText = "Ура! Мой скрипт отработал верно!";
// document.querySelector("#root").innerHTML += new_element.outerHTML
document.querySelector("#root").append(/*Child*/ new_element);

//Задача 2
let blocks = document.querySelectorAll("div");
blocks.forEach((div) => {
  // div.className = "adds"
  div.classList.add("adds");
});

/*
.classList - спсок из всех классов тега(массив)
    .add() - добавить класс
    .remove() - удалить класс
    .toggle() - добавить/удалить класс
    .contains() - есть ли класс?
*/

//Задача 3

let elements = document.querySelectorAll("p");
elements.forEach((p) => {
  if (p.innerText.toLowerCase() === "delete") {
    p.remove();
  }
});

//Задача 4

let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");

for (let i = 0, cnt = div1.children.length; i < cnt; i++) {
  let child = div1.firstElementChild;
  div2.appendChild(child);
}

//Задача 5

tasks = [
  "Проверить документы",
  "Отправить начальству",
  "Организовать собрание",
];
let root = document.querySelector("#root");

for (let t of tasks) {
  let new_element = document.createElement("p");
  new_element.innerText = t;
  root.appendChild(new_element);
}

//Задача 6
let tagsArr = ["div", "h2", "p"];
let tags = {};
for (let t of tagsArr) {
  tags[t] = document.querySelectorAll(t).length;
}
console.log(tags);

//Задача 7

document.querySelector("#rainbow").style.color = "#2980b9";

//Задача 8

let rainbow = document.querySelector("#rainbow");
let n = parseFloat(rainbow.innerText);
if (n >= 1 && n <= 9) {
  rainbow.style.color = "#c0392b";
} else if (n >= 10 && n <= 20) {
  rainbow.style.color = "#e17055";
} else {
  rainbow.style.color = "yellow";
}

/* 

let rainbow = document.querySelector ("#rainbow");
let num = parsefloat (rainbow.innerText);

switch (true){
    case num >= 1 && num < 9: rainbow.style.color ="#c0392b";
    break;
    case num >= 10 && num <= 20: rainbow.style. color ="#e17055"; 
    break;
    default: rainbow.style.color = "#fdcb6e";
    break;
*/

//Задача 9

const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];

//Вариант 1
let select = document.querySelector("select");
for (let c of countries) {
  let name = c.slice(0,2).toLowerCase();
  // select.innerHTML += `<option value="">${c}</option>`;
  //Вариант 2
  let opt = document.createElement("option");
  opt.value = name
  opt.innerText = c
  select.append(opt)
}

