/* Return true if the string in the first element of the array contains all of the letters of the
 string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string
are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien. */

function checkLetterContains(arr) {
    test = arr[0].toLowerCase();
    target = arr[1].toLowerCase();
    let newArr = [];
    for (let i = 0; i < test.length; i++) {
        return newArr.push(target.indexOf(test[i]) < 0);
    }
    return newArr;


}
console.log(checkLetterContains(["test", "test"]));
