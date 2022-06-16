//1) Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to. Сделайте два варианта решения. Через setTimeout и через setInterval

// setInterval

// function printNumbers(from, to) {

//     let timerId = setInterval(function() {
//         alert(from);
//         if (from == to) {
//             clearInterval(timerId);
//         }
//         from++;
//     }, 1000);
// }
// 

// setTimeout

// function printNumbers(from, to) {

//     setTimeout(function go() {
//         alert(from);
//         if (from < to) {
//             setTimeout(go, 1000);
//         }
//         from++;
//     }, 1000);
// }
// printNumbers(1, 10);

//2) Напишите функцию, которая будет каждые 3 секунды выводить в консоль сообщение, а на 10 прекратит свою работу

// timerId = setInterval(() => console.log("Message"), 30000);
// setTimeout(() => {
//     clearInterval(timerId)
//     console.log("Stop Message");
// }, 3000);

//4) Создать в одном из объектов метод, который будет выводить в консоль его имя, используя this А также добавить метод, позволяющий изменять контекст вызова. При вызове в одном объекте, чтобы я мог получить имя другого

// let jordan = {
//     name: "Michael",
//     age: 59,
// }

// let messi = {
//     name: "Lionel",
//     age: 34,
//     showInfo: function() {
//         console.log(this.name);
//     }

// }
// let bind = func.bind(messi);