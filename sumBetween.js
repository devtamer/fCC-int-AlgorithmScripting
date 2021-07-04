// Finding sum between 2 elements in array including those inbetween them
// for example: (sumAll([1, 4]) should return 10

function sumAll(arr) {
    // let maxNum = Math.max(arr[0], arr[1]);
    // let minNum = Math.min(arr[0], arr[1]);
    let sumBetween = 0;

    for (let i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
        sumBetween += i;
    }
    return sumBetween;

}

// Solution 2 

const sumAll2 = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];

    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;

    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
};

console.log(sumAll([1, 10000]))
console.log(sumAll2([0, 4]));