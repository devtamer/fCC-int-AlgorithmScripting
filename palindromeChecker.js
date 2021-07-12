// works for single words or fragments 
function palinedromeChecker(str) {
    let backwards = str.split("").reverse().join("").replace(/[^0-9a-z]/gi, '').toLowerCase()
    let forwards = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
    return (backwards == forwards)
}

console.log(palinedromeChecker("A man, a plan, a canal. Panama"))