'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Input: "I did my waiting 12 years of it in Azkaban"
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {
    // write your code here
    /* let last = "";
     let found = false;
 
     //reverse order (the input is str)
     for(let i = str.length -1; i>= 0; i--){
         if(str[i] !== ' '){
             found = true;
             last = str[i] + last;
         }else if(found){
             break;
         }
         return last;
     }*/


    str = str.trim();

    const lastw = str.lastIndexOf(' ');

    const last = str.slice(lastw + 1);

    return last;
}

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
    // write your code here
    /*let lastW= '';
    let wFound = false;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== ' ') {
            wFound = true;
            lastW= str[i] + lastW;
        } else if (wFound) {
            break;
        }
    }
    return lastW;*/

    const arr = str.split(' ');
    return arr[arr.length - 1];

}

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//

const replaceWords = (str) => {
    // write your code here
    /*//without using method
     let result = '';
     let word = '';
     let wordStarted = false;
     for (let i = 0; i < str.length; i++) {
         if (str[i] === ' ' || i === str.length - 1) {
             if (i === str.length - 1 && str[i] !== ' ') {
                 word += str[i];
             }
             if (word === 'I') {
                 result += 'We';
             } else if (word === 'am') {
                 result += 'are';
             } else if (word === 'was') {
                 result += 'were';
             } else {
                 result += word;
             }
             word = '';
             wordStarted = false;
 
             if (i !== str.length - 1) {
                 result += ' ';
             }
         } else {
             word += str[i];
             wordStarted = true;
         }
     }
 
     return result;*/
    let rep = str.split(' ');

    for (let i = 0; i < rep.length; i++) {
        if (rep[i] === "I") {
            rep.splice(i, 1, "We");
        }
        else if (rep[i] === "am") {
            rep.splice(i, 1, "are");
        }
        else if (rep[i] === "was") {
            rep.splice(i, 1, "were");
        }
    }

    return rep.join(' ');
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words
//
// Input:["move","it","away","from","the","street"] 
// Output: "move it away from the, street" 
//

const arrToStr = (arr) => {
    // write your code here
    //without join
    /*let res = '';
    let wCount = 0;

    for (let i = 0; i < arr.length; i++) {
        res += arr[i];

        wCount++;

        if (i < arr.length - 1 && wCount % 5 === 0) {
            res += ', ';
        } else if (i < arr.length - 1) {
            res += ' ';
        }
    }

    return res;*/
   /* let result = '';
    for (let i = 0; i < words.length; i++) {
        result += words[i];
        if ((i + 1) % 5 === 0 && i !== words.length - 1) {
            result += ', ';
        } else if (i !== words.length - 1) {
            result += ' ';
        }
    }
    return result;*/

}
    


// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"
//
// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };