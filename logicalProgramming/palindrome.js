

//(1). USING LOOP
function reverseString(str) {
    let result = '';
    for(let i=str.length - 1; i>=0; i--){
        result += str[i]
    }
    return result === str;
}

console.log(reverseString("gadag"));


//(2). Using split(), reverse(), join()
const str1 = "gadag";
const reverseResult = str1.split("").reverse().join("");

console.log(reverseResult === str1); // Output: true