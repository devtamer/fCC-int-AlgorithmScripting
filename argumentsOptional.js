function addTogether() {

    function checkNum(num) {
        return (typeof num === "number")
    }
    if (arguments.length === 2) {
        let first = arguments[0]
        let second = arguments[1]
        if (checkNum(first) && checkNum(second)) {
            return first + second
        } else {
            return undefined
        }
    } else if (arguments.length === 1) {
        let first = arguments[0]
        if (checkNum(first)) {
            function addSecond(second) {
                if (checkNum(second)) {
                    return first + second;
                } else {
                    return undefined;
                }
            };
            return addSecond
        } else {
            return undefined
        }
    } else {
        return undefined
    }



}

// alternative solution
function addTogether() {
    var args = Array.from(arguments)
    return args.some(n => typeof n !== "number") ?
        undefined : args.length > 1 ?
            args.reduce((acc, n) => (acc += n), 0) :
            n => (typeof n === "number" ? n + args[0] : undefined)
}

console.log(addTogether(5)(7))