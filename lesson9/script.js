let ctx = document.getElementById("root").getContext("2d");

//Задача 1

// ctx.fillRect(50, 50, 100, 65)

// Задача 2

// ctx.beginPath();
// ctx.moveTo(100, 100)
// ctx.lineTo(200, 100)
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.moveTo(100, 150);
// ctx.lineTo(200, 150);
// ctx.stroke();
// ctx.closePath();

// Задача 3

//Вариант1
// ctx.strokeStyle = "#e74c3c";
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 100);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.moveTo(100, 150);
// ctx.strokeStyle = "#f2a500";
// ctx.lineTo(200, 150);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.moveTo(100, 200);
// ctx.strokeStyle = "#2980b9";
// ctx.lineTo(200, 200);
// ctx.stroke();
// ctx.closePath();

//Вариант2
// const getNUmber = (max = 250, min = 50) => Math.floor(Math.random() * (max - min) + min);
// ["#e74c3c", "#f2a500", "#2980b9"].forEach(el => {

// ctx.strokeStyle = el;
// ctx.beginPath();
// ctx.moveTo(getNUmber(400), getNUmber());
// ctx.lineTo(getNUmber(400), getNUmber());
// ctx.stroke();
// ctx.closePath();
// });

// Задача 4

// const colors = ["#ff3d00", "#0bdd38", "#2e77de", "#ffd200"]
// let w = 100, h = 100;
// let x = [10, 10, 120, 120], y = [10, 120, 10, 120];

// colors.forEach((el, i) => {
//   ctx.fillStyle = el;
//   ctx.fillRect(y[i], x[i], w, h)
// })

// Задача 5

//вариант 1
// let cnt = 50;
// let x = 150, y = 150, rad = 0;

// while (true) {
//   if (rad === 100) {
//     break;
//   }
//   rad += 2;
//   ctx.arc(x, y, rad, 0, 2 * Math.PI);
//   ctx.strokeStyle = "#f2a500";
//   ctx.stroke()
// }

//Варинат2
// const getNumber = (max=150, min=0) => Math.floor (Math. random ( ) * (max - min) + min);
// const getColor = () => `rgb(${ getNumber(255) }, ${getNumber(255)}, ${getNumber(255)})`
// for (let n = 2; n <= 100; n += 2) {
//   ctx.beginPath();
//   ctx.strokeStyle = getColor();
//   ctx.arc(150, 150, n, 0, 360)
//   ctx.stroke()
// }

//Задача6
const getNumber = (max=150, min=0) => Math.floor (Math. random ( ) * (max - min) + min);
const getColor = () => `rgb(${getNumber()}, ${getNumber()}, ${getNumber()})`

const drawCircle = (x, y,ctx) => {
  ctx.beginPath();
  ctx.strokeStyle = getColor();
  ctx.arc(x, y, getNumber(101, 2), 0, 2 * Math.PI);
  ctx.stroke();
}
//drawCircle(getNumber(),getNumber(), ctx)
document.addEventListener('mousemove', function (e) {
  drawCircle(e.offsetX, e.offsetY,ctx)
})

