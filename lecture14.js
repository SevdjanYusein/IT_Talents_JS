// function makeNumber() {
//     var num = Math.floor(Math.random() * 100 + 1);
//     console.log(num);
//     return function(number){
//         if(num===number){
//             console.log("ednakvo");
//         }
//         if(number<num){
//             console.log("nagore");
//         }else{
//             console.log("nadolu");
//         }
//     }
// }

// var guess = makeNumber();
// guess(55);


// const names = ["Pesho", "Gosho", "Misho"];
// const songs = [
//     ["a", "b", "c"],
//     ["d", "e", "f"],
//     ["g", "h", "i"]
// ];

// function player(name) {
//     if (names.indexOf(name) !== -1) {
//         const singer = names.indexOf(name);

//         function song(num) {
//             if (isNaN(+num) || num < 0 || num >= songs[singer].length) {
//                 console.log("sbirkan nomer na pesen");

//             } else {
//                 console.log("Sega shte izslushash " + songs[singer][num]);
//             }
//         }

//         return song;
//     } else {
//         return function () {
//             console.log("sbirkano ime");
//         }
//     }
// }

// var play = player("Gosho");
// play(-2);
// player("Pesho")(2);


// var napraviPastet, vkarayPatka;
// const patki = ["sisi", "mimi", "pepi", "tedi"];

// function dokarayKamiona() {

//     napraviPastet = function () {
//         if (patki.length < 1) {
//             console.log("patkite svirshiha");
//         } else {
//             console.log("patka " + patki[patki.length - 1] + " stana na pastet");
//             patki.pop();
//         }
//     }
//     vkarayPatka = function (name) {
//         if (typeof name !== "string" || name.trim().length === 0) {
//             console.log("nevalidno ime");
//         } else {
//             patki.unshift(name);
//         }
//     }
// }

// dokarayKamiona();
// napraviPastet();
// vkarayPatka("tita");



//var zar = [⚀,⚁,⚂,⚃,⚄,⚅];

var zar1 = [1, 3, 2, 1, 2, 1, 4, 5, 6, 2, 5, 3, 4, 1];
var zar2 = [3, 2, 5, 6, 1, 4, 1, 2, 1, 3, 5, 4, 2, 6];

var superGyska = gyski.find(function(gyska) {
    return gyska.length > 50;
});
var superGyskaIndex = gyski.findIndex(function(gyska) {
    return gyska.length > 50;
});

console.log(superGyska);
console.log(superGyskaIndex);
