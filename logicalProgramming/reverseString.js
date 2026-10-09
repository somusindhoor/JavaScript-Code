//"I initialize an empty result string. Then I iterate through the input string from the last index to the first index and append each character to the result.
// ? Once the loop reaches index 0, I return the result.

//(1). USING LOOP
function reverseString(str) {
    let result = '';
    for(let i=str.length - 1; i>=0; i--){
        result += str[i]
    }
    return result;
}

console.log(reverseString("Gadag"));

//(2). Using split(), reverse(), join()
const str1 = "Soma";
const reverseResult = str1.split("").reverse().join("");

console.log(reverseResult); // Output: amoS


//(3). Using recursion — no loop
function reverse(str){
    if(str === ""){
        return "";
    }
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse("Gadag"));
//FLOW
// reverse("hello")
//     ↓
// reverse("ello") + "h"
//     ↓
// reverse("llo") + "e" + "h"
//     ↓
// reverse("lo") + "l" + "e" + "h"
//     ↓
// reverse("o") + "l" + "l" + "e" + "h"
//     ↓
// reverse("") + "o" + "l" + "l" + "e" + "h"
//     ↓
// "olleh"