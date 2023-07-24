const body = document.body;
const square = body.querySelector(".square");
const link = square.querySelector(".btn");

square.style.backgroundColor = getColor(30,0,200);

function changeBg(el){
  el.style.backgroundColor = getColor(20,256,0,256)
}
let n = 0;
// square.onclick = function(){
//   n++;
//   this.innerHTML = link.outerHTML + `Clicked ${n} times`
//   this.style.backgroundColor = getColor(70,256,0,256)
// }
square.addEventListener("click", function(e){
    n++;
    e.stopPropagation();
    let span = document.createElement("span");
    span.innerText = `Clicked ${n} times`
    // this.innerHTML = link.outerHTML + `Clicked ${n} times`
    this.innerHTML = "";
    this.append(link,span)
    // console.log(link.parentElement);
});
square.addEventListener("click", e => {
    changeBg(e.target) // e.target - тот, кто вызвал событие
})

link.addEventListener("click", e=> {
  e.stopPropagation();
  e.preventDefault(); // отменить действия по умолчнию заданные браузером
  e.target.style.border = `1px solid ${getColor()}`
})
body.addEventListener("click", function(){
  this.style.backgroundColor = getColor();
})


link.addEventListener("click", (e)=> {
  let newTag= e.target.cloneNode(true);
  document.body.appendChild(newTag);
})

let btns = document.getElementsByClassName(".copy")

const left = document.querySelector("#div1")
const right = document.querySelector("#div2")

let elements = document.querySelectorAll("#div1 p, #div2 p")
for (let i = 0, cnt = elements.length; i<cnt; i++){
  const el = elements[i]
  el.addEventListener("click", e=> {
    e.stopPropagation();
    const daddy = e.target.parentElement;
    console.log(daddy);
    daddy === left? right.append(e.target) : left.append(e.target)
  })
}