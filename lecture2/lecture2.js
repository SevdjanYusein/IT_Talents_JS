// Задача 1

var a = Math.floor(Math.random() * 101);
var b = Math.floor(Math.random() * 101);
var c = Math.floor(Math.random() * 101);

console.log('A = ' + a);
console.log('B = ' + b);
console.log('C = ' + c);

if ((c > a) && (c < b)) {
    console.log('The number ' + c + ' is between ' + a + ' and ' + b);
}
else {
    console.log("The number " + c + " isn't between " + a + " and " + b);
}

//Задача 2

var num1 = 6;
var num2 = 2;

var sum = num1 + num2;
console.log('Sum = ' + sum);
var diff = Math.abs(num1 - num2);
console.log('Diff = ' + diff);
var product = num1 * num2;
console.log('Product = ' + product);
var withRemainder = num1%num2;
console.log('With rem = '+withRemainder);
var woRemainder = num1/num2;
console.log('Without rem = '+woRemainder);


//задача 3

var a = 3;
var b = 6;

var c = a;
a = b;
b = c;
console.log(a);
console.log(b);

//Задача 4

var n = Math.floor(Math.random() * 101);
var m = Math.floor(Math.random() * 101);

console.log(n, m);

if (n <= m) {
    console.log(n, m);
} else {
    console.log(m, n);
}

// Задача 5

var p = Math.floor(Math.random() * 101);
var q = Math.floor(Math.random() * 101);
var r = Math.floor(Math.random() * 101);

console.log(p, q, r, 0);

if ((p >= q) && (p >= r)) {
    if (q >= r) {
        console.log(p, q, r);
    } else {
        console.log(p, r, q);
    }
}
if ((q >= p) && (q >= r)) {
    if (p >= r) {
        console.log(q, p, r);
    } else {
        console.log(q, r, p);
    }
}
if ((r >= p) && (r >= q)) {
    if (p >= q) {
        console.log(r, p, q);
    } else {
        console.log(r, q, p);
    }
}


// Задача 6

var a1 = Math.floor(Math.random() * 101);
var a2 = Math.floor(Math.random() * 101);
var a3 = Math.floor(Math.random() * 101);
console.log(a1, a2, a3);

var b = a1;
a1 = a2;
a2 = a3;
a3 = b;
console.log(a1, a2, a3);

// Задача 7

var money = 0;
var amIHealthy = false;

if (amIHealthy) {
    if (money < 10) {
        console.log("I'll going to caffee");
    }
} else {
    if (money>0){
        console.log("I'll buy medicine");
    }else{
        console.log("I'll stay at home and drink hot tea");
    }
}