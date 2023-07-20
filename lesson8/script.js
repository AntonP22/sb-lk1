// let redWood = {
//   type: "Мебель",
//   legCnt: 4,
//   color: "red",
//   material: "wood",
//   variant: "pc",
//   getInfo: function () {
//     return `${this.color} ${this.material} ${this.variant} table with ${this.legCnt} table legs`;
//   },
//   show: () => {
//     return `${this.color} ${this.material} table `
//   }
// };

// console.log(redWood.getInfo());
// console.log(redWood.show());

// let pointA = {x:1, y:2}
// let pointB = {x:1, y:2}
// let pointC = {x:1, y:2}
// let pointD = {x:1, y:2}
// let pointE = {x:1, y:2}
// let pointF = {x:1, y:2}
// let pointG = { x: 1, y: 2 }

// const getNumber = (max = 100, min = 0) => Math.floor(Math.random() * (max - min) + min);

// class Point {
//   static hello() {
//     return "Hello world";
//   }
//   constructor(a = 0, b = 0) {
//     this.xx = a;
//     this.yy = b;
//     this._word = "Точка";
//   }
//   get x() {
//     return this.xx;
//   }
//   get word() {
//     return this._word;
//   }
//   set word(w) {
//     this._word = w;
//   }
//   moveX(newX) {
//     this.xx = newX;
//   }
//   moveY(newY) {
//     this.yy = newY;
//   }
//   info() {
//     return `${this.word} с координатами {${this.x};${this.y}}`;
//   }
// }

// let points = [];
// let cnt = 100;
// while (cnt--) {
//   points.push(new Point(getNumber(), getNumber()));
// }

// class Point3d extends Point {
//   constructor(a, b, c) {
//     super(a, b);
//     this.z = c;
//   }
//   moveZ(newZ) {
//     this.z = newZ;
//   }
//   info() {
//     return `${this.word} с координатами {${this.x};${this.y};${this.z}}`;
//   }
//  }

// let pointH = new Point(3, 5);
// let startPoint = new Point();

// console.log(pointH.info());
// pointH.moveX(7);
// console.log(pointH.info());
// console.log(startPoint);
// console.log(points);
// let d3 = new Point3d(1, 1, 1)
// d3.moveX(2);
// console.log(d3.info());

// class Rectangle {
//   constructor(w, h) {
//     this.width = w;
//     this.height = h;
//     this.word = "Прямоугольник"
//   }
//   getPerimeter() {
//     return this.width*2 + this.height*2;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
//   getInfo() {
//     return `${this.word} ${this.width} x ${this.height} с  площадью ${this.getArea()} и периметром ${this.getPerimeter()}`;
//   }
// }

// console.log(new Rectangle(300, 100).getInfo());

// class Square extends Rectangle {
//   constructor(side) {
//     super(side,side)
//     this.word = "Квадрат"
//   }
// }
// let sq = new Square(200)
// console.log(sq.getInfo());

//Задача 1

// let car = {
//   model: "Audi",
//   color: "white",
//   weight: 1850,
//   engine: "170 hp"
// }

// delete car.engine
// console.log(car);

//Задача 2

// employee = [
//   ["firstName", "Ivan"],
//   ["lastName", "Ivanov"],
//   ["hireDate", "21.10.2015"],
// ];
// let upd = employee.filter((el) => el[0] !== "hireDate");
// upd.push(["jobName", "IT PROG"]);
// console.log(upd);

//Задача 3

// let array = [
//   ["boolean", true],
//   ["number",4],
//   [ "string" ,"word"],
//   ["obiect", {}]
// ]
//вариант 1
// let cnt = array.filter(el => typeof el[1] === "string").length;
// console.log(cnt);

//Вариант 2
// const countString = (a) => {
//   let cnt = array.filter((el) => typeof el[1] === "string").length;
//   return `Количество строковых элементов в именнованном массиве: ${cnt}`
// }
// console.log(countString(array));

//Задача 4

const props = {
  name: "Анатолий",
  age: 29,
  savHi: () => "привет"
}

function getValue() {
  let keys = Object.keys(this)
  let val = Object.values(this)
  let str = "Значения свойств объекта props ("
  val.forEach((el, i) => {
    if (typeof el !== "function") {
      str += [keys[i]] + ": " + el + ", ";
      }
  })
  str =str.slice(0, str.length -2)
  str += ") ";
  return str
}
getValue = getValue.bind(props);
console.log(getValue());