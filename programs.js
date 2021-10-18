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
else if (num2 > num3)
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

for (var i = 1; i <= num; i++)
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

//Reverse a number

function reverse(n) {
    var arr = [];
    var reverse = 0;
    while (n > 0)
        (arr.push(n % 10), n = Math.floor(n / 10));
    while (arr.length)
        reverse = reverse * 10 + arr.shift();
    return reverse;
}

console.log(reverse(12345678))

//Calculate the Power of a Number

var b = 10;
var e = 3;
var r = 1;
var i = 1;
while (i <= e) {
    r *= b;
    i++;
}
console.log("power is ", r)

//Check Whether a Number is Palindrome or Not

var rem, temp, final = 0;
var number = 151;
temp = number;
while (number > 0) {
    rem = number % 10;
    number = parseInt(number / 10);
    console.log(number);
    final = final * 10 + rem;
}
if (final == temp) {
    console.log("it is palindrome");
} else {
    console.log("it is not a palindrome");
}

//Check Whether a Number is Prime or Not

var n = 4,
    i, flag = 0;
for (i = 2; i <= n / 2; ++i) {
    if (n % i == 0) {
        flag = 1;
        break;
    }
}
if (flag == 0)
    console.log("it is a prime number");
else
    console.log("it is not a prime number");

//Display Prime Numbers Between Two Intervals

var low = 3,
    high = 10,
    i, flag;
while (low < high) {
    flag = 0;
    if (low <= 1) {
        ++low;
        continue;
    }
    for (i = 2; i <= low / 2; ++i) {

        if (low % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0)
        console.log("The prime numbers are ", low)
        ++low;
}

//Display Factors of a Number

var num = 100;
for (var i = 1; i <= num; ++i) {
    if (num % i == 0) {
        console.log(i)
    }
}

//Check Armstrong Number

var n = 153;
var r;
var sum = 0;
var temp;
temp = n;
while (n > 0) {
    r = n % 10;
    sum = sum + (r * r * r);
    n = parseInt(n / 10);
}
if (temp == sum) {
    console.log("It is an Armstrong number");
} else {
    console.log("It is not an Armstrong number");
}

//Find Largest Element in an Array

function largest(arr) {
    var i;
    var max = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }

    return max;
}
var arr = [10, 20, 40, 99, 200];
console.log("Largest of the given array ", largest(arr))