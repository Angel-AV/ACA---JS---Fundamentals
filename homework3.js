// 1. Given a number round it to the nearest 50 without using “if” operator
//(conditions).


let num = +prompt("the number is ")
if (num < 25) {
console.log(result = 0)
}
if (num >= 25 && num <75){
 console.log(result = 50)
}
if (num >= 75){
console.log(result = 100)
}

let num = +prompt("the number is ")
function roundN(num) {
   return Math.round(num / 50) * 50
}
console.log(roundN(num))

// 2. Find the sign of product of three numbers without multiplication
//operator. Display the s pecified sign.

let num1 = +prompt("Enter a number ");
let num2 = +prompt("Enter a number ");
let num3 = +prompt("Enter a number ");

if (num1 > 0 && num2 > 0 && num3 > 0) {
    alert("+")
}else if (num1 < 0 && num2 < 0 && num3 > 0) {
    alert("+")
}else if (num1 > 0 && num2 < 0 && num3 < 0) {
    alert("+")
}else if (num1 < 0 && num2 > 0 && num3 < 0) {
    alert("+")
}else if (num1 < 0 && num2 < 0 && num3 < 0) {
    alert("-")
}else if (num1 < 0 && num2 > 0 && num3 > 0) {
    alert("-")
}else if (num1 > 0 && num2 < 0 && num3 > 0) {
    alert("-")
} else {
    alert("-")
}


// 3. Insert a digit and a number. Check whether the digits contains in the
//number or not.

let num = +prompt()
let digit = +prompt()
if (num[0] === digit || num[1] === digit || num[2] === digit || num[3] === digit || num[4] ===digit) {
    console.log("Yes")
}else {
    console.log("No")
}

////////////////////

let number = +prompt()
 let digit = +prompt() 

for (let i = 0; i <= number; i++) {
   if (i == digit ){
       console.log("yes")
   } else {
       console.log("No")
   }
}



// 4. Enter a number. Find the difference between its biggest and smallest
// digits.


let number = prompt();
let max = number[0]
let min = number[0]
for (let i = 0; i < number.length; i++) {
    if (number[i] >= max) {
        max = number[i]
    }
     if (number[i] < min) {
        min = number[i]
    }
}
console.log(max - min)




// 5. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.
let num = +prompt()
if (num % 2 != 0 || num % num == 1) {
    console.log("yes")
}else {
    console.log("No")
}