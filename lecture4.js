//var arr=new Array(50);
// var arr = [3, 1, 5, 9, 45];
// for (var index = 0; index < arr.length; index++) {
//     if ((index % 2 === 0) && (arr[index] % 3 === 0)) {
//         console.log(arr[index]);
//     }
// }

// for (var index = arr.length - 1; index >= 0; index--) {
//     console.log(arr[index]);
// }

// var ducks = [2, 1, 5, 3, 2, 1, 4];
// var sumEggs = 0;
// for (var index = 0; index < ducks.length; index++) {
//     sumEggs += ducks[index];
// }
// console.log("Sum of all eggs: " + sumEggs);

// var min = ducks[0];
// var minIndex=0;
// for (var index = 0; index < ducks.length; index++) {
//     if (ducks[index] < min) {
//         minIndex=index;
//         min = ducks[index];
//     }
// }
// console.log("Min: " + min + " number " + (minIndex+1));

// var max = ducks[0];
// var maxIndex=0;
// for (var index = 0; index < ducks.length; index++) {
//     if (ducks[index] > max) {
//         maxIndex=index;
//         max = ducks[index];
//     }
// }
// console.log("Max: " + max + " number " + (maxIndex+1));


// var kesteni = [101, 9, 4, 145, 6, 4, 33, 54, 99, 1, 3, 4];
// var max = -1;
// var indexMax = -1;
// for (var index = 0; index < kesteni.length; index++) {
//     if ((kesteni[index] > max) && (kesteni[index] < 100) && (kesteni[index] > 5)) {
//         indexMax = index;
//         max = kesteni[index];
//     }
// }
// console.log("max: " + max + " / at index: " + indexMax);

// var a=[1,2,3];
// var b=[1,5,3];
// //console.log(Array.isArray(a));

// if(a==b){
//     console.log(true);
// }else{
//     console.log(false);
// }

// if(a.length===b.length){
//     console.log("not equal");
// }else{
//     var areEqual=true;
//     for(var index=0;index<a.length;index++){
//         if(a[index]!==b[index]){
//             areEqual=false;
//         }
//     }
//     if(areEqual){
//         console.log("equal");
//     }else{
//         console.log("not equal");
//     }
// }


// var plodove = ["yabilka", "krusha", "banan", "cheresha", "banan", "banan",
//     "yagoda", "dyulya", "banan", "grozde"];

// var bananCount = 0;
// var indexOfBanan = plodove.indexOf("banan");
// while (indexOfBanan !== -1) {
//     bananCount++;
//     indexOfBanan = plodove.indexOf("banan", indexOfBanan+1);
// }

// console.log(bananCount);

