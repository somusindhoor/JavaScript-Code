

// 1. Using Set()
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 3]));

// 2. Using filter()
function removeDuplicates(arr) {
    return arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    });
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 3]));

// 3. Using for loop
function removeDuplicates(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 3]));

// 4. Using reduce()
function removeDuplicates(arr) {
    return arr.reduce((result, value) => {
        if (!result.includes(value)) {
            result.push(value);
        }

        return result;
    }, []);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 3]));