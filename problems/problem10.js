var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "happy days",
  "decodemtl is the best",
  "tottenham hotspur",
  "baby jayden"
]

let outputs = [
  "Happy Days",
  "Decodemtl Is The Best",
  "Tottenham Hotspur",
  "Baby Jayden"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) { 
        var arrOfWords = str.toLowerCase().split(" ");
        for (let i = 0; i < arrOfWords.length; i++) {
            arrOfWords[i] = arrOfWords[i].charAt(0).toUpperCase() + arrOfWords[i].slice(1); 
        } 
        return arrOfWords.join(" ");
    }
    
    



function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
// runTest(1);
// runTest(2);
// runTest(3);
// runTest(4);

