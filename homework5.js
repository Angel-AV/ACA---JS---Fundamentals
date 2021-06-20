//1. Given an array of numbers. Write a function to separate odd and even numbers in different
//arrays.
function oddEndEven(num) {
    let odd = [];
    let even = [];
    for(let i = 0; i < num.length; i++) {
        if(num[i] % 2 === 0) {
            even.push(num[i])
        }else  {
            odd.push(num[i])
        }
    }
    let oddEven = {even,  odd}
    return oddEven;
}

console.log(oddEndEven([45, 12, 15, 2, 0]));


////////

const number = [10, 15, 2, 65, 12, 0]
function oddEndEven (number) {
   const evenNumbers = number.filter((item) => !(item % 2));
   const oddNumbers = number.filter((item) => item % 2);

   return {
       evenNumbers,
       oddNumbers
   }

}
console.log(oddEndEven(arr));


//2. Given a word and a list of possible anagrams, select the correct sublist.


let mainWorld = ['listen'];
let someWords = ['enlists', 'google', 'inlets', 'banana'];

mainWorld = sortString(mainWorld.join());

function sortString(str) {
    let arr = str.split('');
    let sorted = arr.sort();
    return sorted.join('');
}

const newArr = someWords.map((item) => (item = sortString(item)));
const resultId = newArr.findIndex((item) => item === mainWorld);
const nessWord = someWords[resultId];
console.log(nessWord);




//3. Write a function which receives two strings and removes appearances of the second string from
//the first one.

function strReplace(myStr,char, emptyStr) {  
    let char  = /is/g
    let secondOne;
    if (myStr.length > 0) {
        console.log(myStr)
    }
  
    for (let i = 0; i < myStr.length; i++) {
         secondOne = myStr.replace(char, emptyStr);
    }
   return secondOne
}

console.log(strReplace("This is some text.", ""))




//4. Given an array of numbers. Create an array containing only unique elements.
function uniqueArray(array) {
    let unique = [];
    if (array.length > 0) {
            unique[0] === array[0]
        }
        for(let i = 0; i < array.length; i++) {
        let result = false;
        
        for (let j = 0; j < unique.length; j++) {
            if (array[i] == unique[j]) {
                result = true;
                break;
            }
             else {
                result = false;
            }
       }
    if (result == false ) {
        unique[unique.length] = array[i]
    }
}
    return unique;
}
console.log(uniqueArray([1,2,3,3,6,5,5]))



//5.Given a string and symbols. Change first symbol by the second one in the string.


////
function strReplace(myStr) {
    let newStr = myStr.replace(/t/g, "w")
    console.log(newStr)
}
console.log(strReplace("The results are not recorded yet"))


////

function myFunc(mainSent, letter1, letter2) {
    
    let newSent =[]
    for (let i = 0; i < mainSent.length; i++) {
        if (mainSent[i] == letter1) {
        newSent = mainSent.replace(/o/g, letter2)
    }
  }
    return newSent
}
console.log(myFunc("does the following code", "o", "0"))