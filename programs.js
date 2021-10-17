//positive number or negative number

var num = 5;
if (num >= 0)
    console.log("Positive number");

else
    console.log("Negative number");

//swapping of two numbers

var a = 2;
var b = 4;
var c;

console.log("Before swapping %i %i ", a, b);

c = a;
a = b;
b = c;
console.log("After swapping %i %i ", a, b);

//Check Whether a Character is an Alphabet or not

var ch = '5';
if ((ch >= 97 && ch <= 122) || (ch >= 65 && ch <= 90))
    console.log("It is an alphabet");
else
    console.log("It is not an alphabet");

//Check Whether a Character is a Vowel or Consonant

var ch = 's';
var lower = (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u');
var higher = (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U');
if (lower || higher)
    console.log("It is a vowel");
else
    console.log("It is a consonent");

//Find the Largest Number Among Three Numbers

var num1 = 47;
var num2 = 35;
var num3 = 100;
if (num1 > num2 && num1 > num3)
    console.log("num1 is the largest number");
else if (num2 > num1 && num2 > num3)
    console.log("num2 is the largest number");
else
    console.log("num3 is the largest number");

//Find the Roots of a Quadratic Equation



//Check leap year

var year = 2001;
if (year % 4 == 0) {
    console.log("it is a leap year");
} else {
    console.log("it is not a leap year");
}

//Factorial

var num = 7;
var first = 1;
var i;

for (i = 1; i <= num; i++)
    first = first * i;

console.log("Factorial is " + first);

//Generate Multiplication Table

var num = 3;
var i;

for (i = 1; i <= 10; i++) {
    var result = num * i;

    console.log(`${num} * ${i} = ${result}`);
}

//Display Fibonacci Sequence

var num = 10;
var n1 = 0;
var n2 = 1;
var nextTerm;
console.log('Fibonacci Series:');
for (var i = 1; i <= num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

//Find GCD of two Numbers

var n1 = 10;
var n2 = 5;
var i;
var gcd;
for (i = 1; i <= n1 && i <= n2; ++i) {
    if (n1 % i == 0 && n2 % i == 0)
        gcd = i;
}
console.log("G.C.D of 10 and 5 is " + gcd);

//Find LCM of two Numbers

var n1 = 15;
var n2 = 60;
var max;
max = (n1 > n2) ? n1 : n2;
while (1) {
    if (max % n1 == 0 && max % n2 == 0) {
        console.log("LCM of 15 and 60 is " + max);
        break;
    }
    max++;
}

//Display Characters from A to Z Using Loop

var i = 65;
var j = 91;

for (k = i; k < j; k++) {
    var str = String.fromCharCode(k);
    console.log(str);
}

//Count Number of Digits in an Integer

var n1 = 12387;
var num = 0;
if (n1 >= 1) ++num;
while (n1 / 10 >= 1) {
    n1 /= 10;
    ++num;
}
console.log("Number of digits= ", num);