//task 7

// var a = 434;
// console.log(a.toString(2));
// var b = 3;
// var c = 5;

// //a = a ^ (1 << (b - 1));
// //a = a ^ (1 << (c - 1));
// a ^= (1 << (b - 1) | 1 << (c - 1)); //na edin red

// console.log(a.toString(2));

//task 7/8

// var h = 5;
// for (var row = 1; row <= h; row++) {
//     for (var col = 1; col <= row; col++) {
//         if ((col === 1) || (col === row) || (row === h)) {
//             process.stdout.write("*" + " ");
//         } else {
//             process.stdout.write(" " + " ");
//         }
//     }
//     console.log();
// }

//task 9

// var h = 5;
// var spaces = h - 1;
// var stars = 1;

// for (var row = 1; row <= h; row++) {
//     for (var space = 1; space <= spaces; space++) {
//         process.stdout.write(" " + " ");
//     }
//     for (var star = 1; star <= stars; star++) {
//         if ((star === 1) || (star === stars) || (row === h)) {
//             process.stdout.write("*" + " ");
//         } else {
//             process.stdout.write(" " + " ");
//         }
//     }
//     console.log();
//     spaces--;
//     stars += 2;
// }

//task 10

// var h = 5;
// var spaces = h - 1;
// var stars = 1;

// for (var row = 1; row <= h; row++) {
//     for (var space = 1; space <= spaces; space++) {
//         process.stdout.write(" " + " ");
//     }
//     for (var star = 1; star <= stars; star++) {
//         if ((star === 1) || (star === stars) || (row === h)) {
//             process.stdout.write("*" + " ");
//         } else {
//             process.stdout.write(" " + " ");
//         }
//     }

//     process.stdout.write("  ".repeat((h-row)*2));
//     process.stdout.write("* ".repeat(stars));

//     console.log();
//     spaces--;
//     stars += 2;
// }
