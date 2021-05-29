//1. Given a number. Print “odd” if the number is odd and “even” if it’s even.

let number = prompt("The number is ");
if(number % 2 == 0) {
    console.log("The number is even")
}else {
    console.log("The umber is odd")
}


//2. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
//number. If the last digit of the inserted number is 0, number remains the same.

let number7 = +prompt("The number is ");

let lastDigit = number7 % 10
console.log(lastDigit)

let midledigit = ((number7-lastDigit)/10)%10

let num = number7
var firstDigit = num;
var lastDigit = num % 10;
while (firstDigit>= 10) {
    firstDigit= parseInt(firstDigit/10)
}
 




// 3. Given five numbers as input. Calculate and print the average of the numbers(without
//using arrays).

let a = 45
let b = -12
let c = 0
let d = 3
let e = -15
let f = (a + b + c + d + e) / 5
console.log(f)

let number1 = +prompt("The first number is ")
let number2 = +prompt("The second number is ")
let number3 = +prompt("The third number is ")
let number4 = +prompt("The forth number is ")
let number5 = +prompt("The fifth number is ")

let num6 = (number1 + number2 + number3 + number4 + number5 )/5
console.log(num6)

//4. Given three numbers. Sort them by the ascending order.

let o, p, q 
if(o < p && p < q){
    console.log(o, p, q)
}else if (p < o && o < p){
    console.log(p,  o , q)
}else if (q < o && o < p){
    console.log(q , o , p)
}else if ( o < q && q < p){
    console.log(o,  q ,  p)
}else if( p < q && q < o){
    console.log(p ,  q, o)
}else {
    console.log(q ,  p , o)
}
sort(5,6,2)


let l, m, n 
if (l > m && l > n){
    console.log(l)
}else if (m > l && m >n){
    console.log(m)
}else {
    console.log(n)
}

//5. Given the following code rewrite it using only two if operators. (Hint: use logical
//operators).

var n = +prompt()
var i = 0
var j = 0
if (n%2 ===0){
    if (!Math.floor(n/10)) {
        i += 1;
    }
}
if (n%3 ===0) {
    if (n%10 ===1) {
        j += 1
    }
}
   
   ///////////
if (n%2 ===0 && Math.floor(n/10)) {
    console.log(i)
    i++
}
if (n%3===0 && n%10===1){
    console.log(j)
    j++
}



    //////////
     
     var n = +prompt()
     let i = 0
     let j = 0
     if (n%2===0){
         console.log(Math.floor(n/10 + 1))
     }

     if (n%3 ===0) {
         console.log(n%10 ===1)
         j++
     }

    //////////

     var n = +prompt()
     let i = 0
     let j = 0
     if (n%2 ===0, i++){
         if( n%3 ===0 || n%10===1, j++)
         console.log(j)
     }

     //////////

     var n = +prompt()
     var i = 0
     var j = 0
        if (n%2 ===0 || n%3 ===0 || n%10 ===1, i++){
        if(!Math.floor(n/10)){
            console.log(j)
            j++
        }
     }
       