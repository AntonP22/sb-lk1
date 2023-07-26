// setTimeout(function(){
//   console.log(new Date().toLocaleTimeString());
// },0)
// setTimeout(function(){
//   console.log(new Date().toLocaleDateString());
// },0)
// console.log("Сегодня прекрасный день");

//Promise

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let result = Math.round(Math.random());
        if (result) {
            resolve("All good!");
        } else {
            reject("All bad!");
        }
    }, 2000);
});
console.log(promise);

promise
    .then(function (data) {
        console.log("success", data);
    })
    .catch(function (err) {
        console.log("error", err);
    });
