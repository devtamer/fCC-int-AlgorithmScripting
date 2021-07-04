// remove all values that are false booleans  

function bouncer(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) tempArr.push(arr[i]);
  }

  return tempArr;
}

console.log(bouncer([null, NaN, 1, 2, undefined]))