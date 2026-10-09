function secondLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[0];
}

console.log(secondLargest([10, 5, 20, 8, 15]));