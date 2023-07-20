
//Задача 1
// const promos = document.getElementsByClassName("promo");
// console.log(promos.length);
//Задача 2
// const targets = document.querySelectorAll(".target")
// let last = targets[targets.length - 1];
// console.log(last.nodeName);
// console.log(last.nodeValue);
// console.log(last.nodeType);


/*
document. querySelectorAll(" card"); - список 
document.querySelector("„card"); - первый попавшийся тег
let div = document.querySelector("div");
div.querySelectorAll(".card")
*/
//Задача 3
let price = document.querySelectorAll(".price")
price.forEach(p => {
  let data = parseFloat(p.innerText);
  p.innerText = data*2
})
//Задача 4
let link = document.querySelectorAll(".links")
link.forEach(l => {
  let text = l.innerText;
  l.innerHTML = `<a href="">${text}</a>`
})
//Задача 5
price = document.querySelectorAll(".price");
let result = 0;
for (let i = 0; i < price.length; i++) {
  result += parseFloat(price[i].innerText)
}
console.log(result);

//Задача 6
//Вариант 1
// let list = document.getElementsByClassName("cars")[0];
// let cars = [];
// for (let i = 0; i < list.children.length; i++) {
//   let li = list.children[i];
//   cars.push(li.innerText);
// }
// console.log(cars);
//Вариант 2
let list = document.querySelectorAll(".cars li");
let cars = [];
list.forEach(l => {
  cars.push(l.innerText)
});
console.log(cars);

/*
document
.querySelector ()
.querySelectorAll()
.innerText
.innerHTML
*/