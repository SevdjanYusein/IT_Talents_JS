// //1, 2, 3, 4, 10, 12, 13, 14, 15, 18, 20, 23, 25

// // Задача 1

// var counter = 1;
// while (counter <= 100) {
//     console.log(counter);
//     counter++;
// }

// // Задача 2

// var counter = -20;
// while (counter <= 50) {
//     console.log(counter);
//     counter++;
// }

// // Задача 3

// var num = -10;
// while (num <= 10) {
//     if (num % 2 !== 0) {
//         console.log(num);
//     }
//     num++;
// }       // 0 е четно или нечетно?

// // Задача 4

// var counter = 10;
// while (counter >= 1) {
//     process.stdout.write(counter + " "); 
//     counter--;
// }

// //Задача 10

// var num = Math.ceil(Math.random() * 100);
// console.log(num);
// var counter = 2;
// while ( counter < num) {
//     if (num % counter === 0) {
//         console.log("Числото " + num + " не е просто.");
//         break;
//     }
//     counter++;
// }
// if(counter===num){
//     console.log("Числото "+ num+ " е просто.");
// }

// // Задача 12

// var counter = 100;
// while (counter <= 999) {
//     var e = Math.floor(counter % 10);
//     var s = Math.floor(counter / 100);
//     var d = Math.floor((counter / 10) % 10);

//     if ((e !== s) && (s !== d) && (e !== d)) {
//         process.stdout.write(counter + " ");;
//     }
//    counter++;
// }

// // Задача 13

// var counter = 100;
// var num = Math.ceil((Math.random() * 25) + 2);
// console.log(num);
// while (counter <= 999) {
//     var e = Math.floor(counter % 10);
//     var s = Math.floor(counter / 100);
//     var d = Math.floor((counter / 10) % 10);
//     var sum = e + d + s;
//     if (sum === num) {
//         process.stdout.write(counter + ', ');
//     }
//     counter++;
// }

// //Задача 14

// var num = Math.ceil((Math.random() * 190)+10);
// console.log("chislo: " + num);
// var counter = num;
// while (counter >= 10) {
//     if ((counter % 7 === 0) && (counter < num)) {
//         console.log(counter);
//     }
//     counter--;
// }

// //Задача 15

// var num = Math.ceil(Math.random() * 10);
// console.log("chislo: " + num);

// var sum = 0;
// do {
//     sum += num;
//     num--;
// } while (num > 0);
// console.log(sum);

// //Задача 18

// var num1 = Math.floor((Math.random() * 10) + 1);
// var num2 = Math.floor((Math.random() * 10) + 1);
// console.log(num1, num2);
// var bigger = (num1 >= num2) ? num1 : num2;
// var smaller = (num1 >= num2) ? num2 : num1;

// for (var i = 1; i <= smaller; i++) {
//     for (var j = 1; j <= bigger; j++) {
//         console.log(i + " * " + j + " = " + (i * j) + ";");
//     }
// }

// //Задача 20

// for (var row = 1; row <= 10; row++) {
//     for (var col = row; col < 10; col++) {
//         process.stdout.write((col) + " ");
//     }
//     for (var col = 0; col < row; col++) {
//         process.stdout.write((col) + " ");
//     }
//     process.stdout.write("\n");
// }

//Задача 23

// var num1 = num2 = 1;
// while (num1 <= 9) {
//     var counter = num2;
//     while (counter <= 9) {
//         process.stdout.write(num1 + "*" + counter + "; ");
//         counter++;
//     }
//     num1++;
//     num2++;
//     process.stdout.write("\n");
// }

// //Задача 25

// var num = Math.floor((Math.random() * 10) + 1);
// console.log(num);
// var product = 1;
// var counter = 1;
// do {
//     product *= counter;
//     counter++;
// } while (counter <= num);
// console.log(product);