//1. Given a number print its digits count.
let num = prompt();
let count  = num.length
console.log(count)


let num = +prompt()
let  digitsC

digitsC = num.toString().length
console.log(digitC)


function newN(n) {
  numD = 0 
  numInt = Math.abs(n)
  while (numInt > 0) {
    numInt = (numInt - numInt % 10) / 10
    numD++
  }
  return numD
}
console.log(newN(456))




//2. Count numbers of digit 9 in a number.

let num1 = +prompt()
let num2 = +prompt()
function countNum(num1, num2) {
  let count = 0
  while (num1>0) {
    count = (num1 % 10 == num2)? count + 1 : count 
    num1 = parseInt(num1/10)
  }
  return count
}
console.log(countNum(num1,num2))

/////////
function numberOfTwo(n, m) {
  let count = 0
  while(n > 0) {
      if (n % 10 == m )
         count++
         n = parseInt(n / 10)
  }
  return count
}
console.log(numberOfTwo(4589966455, 9))



// 3. Given two numbers. Print powers of 2 between that numbers. (without using Math.pow)
 
function myFunc(num,num1) {
  let a = 0
    for (i=0; i < b; i++ )  {
    a = (num + 1)*2
    a++
  }
 return a
}

let num 
let num1
let a = num + 1
for (let i = 0; i < num1; i++) {

}



//4 Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.
let a = +prompt();
function threeZeros(a) {
    let count = 1;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === a[i + 1] && a[i] === '0') {
            count++;
        }
    }
    return count === 3 ? 'Yes' : 'No';
}
console.log(threeZeros(a.toString()));




//5. Insert two positive integers n and m between 1 and 10.
// Compute and print n m .

n = +prompt()
m = +prompt()
if(n%2 ===0, n > 1, n <10 && m % 2 ===0 && m > 1 && m <10) {
  console.log(Math.pow(n, m))
}else  {
  console.log("Wrong number")
}

