// // function div(a, b) {
// //     if (isNaN(Number(a)) || isNaN(Number(b))) {
// //         return;
// //     }
// //     if (b == 0) {
// //         return 0;
// //     }
// //     return a / b;
// // }

// // function div1(a, b) {
// //     if (isNaN(Number(a)) || isNaN(Number(b))) {
// //         return;
// //     }
// //     if (b === 0) {
// //         console.log(0);
// //     } else {
// //         console.log(a / b);
// //     }
// // }

// // var d = div(6, 0);
// // console.log(d);

// // div1(6,5);

// function printArray(arr) {
//     if (!Array.isArray(arr)) {
//         console.error("Ne e masiv");
//     } else {
//         for (var index = 0; index < arr.length; index++) {
//             console.log(arr[index]);
//         }
//     }
// }

// var b = [1, 2, 9, 3, 4];
// printArray(b);


// function createArray(size) {
//     if (isNaN(Number(size)) || size < 1) {
//         console.error("Size is not a number");
//         return [];
//     } else {
//         var arr = new Array(size);
//         for (var index = 0; index < size; index++) {
//             arr[index] = Math.floor((Math.random() * 10) + 1);
//         }
//         return arr;
//     }
// }

// var array = createArray(5);
// console.log(array);

// function multiplyArraysElements(arr1, arr2) {
//     if (!Array.isArray(arr1)
//         || !Array.isArray(arr2)
//         || arr1.length !== arr2.length
//         || arr1.some(n => isNaN(+n))
//         || arr2.some(n => isNaN(+n))) {
//         console.error("Not legit arrays");
//         return [];
//     } else {
//         var array = new Array(arr1.length);
//         for (var index = 0; index < arr1.length; index++) {
//             array[index] = arr1[index] * arr2[index];
//         }
//         return array;
//     }
// }

// var a = [1, 5, 2];
// var b = [2, 3, 8];
// var c = multiplyArraysElements(a, b);
// console.log(c);




//Task 1
function solveCircleArea(radius) {
    if (isNaN(Number(radius)) || radius <= 0) {
        return 0;
    }
    return (Math.PI * radius*radius * 2);
}

var r = 1;
var c = solveCircleArea(r);
console.log(c);

//Task 2
function countA(string) {
    var count = 0;
    for (var index = 0; index < string.length; index++) {
        if (string[index] === "a" || string[index] === "A") {
            count++;
        }
    }
    return count;
}

console.log(countA("haha"));

//Task 3
