// returns a string with all capitilized first letters of every word.

function titleCase(str) {
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1).toLowerCase();
    }
    return str.join(" ");
}

let str = "sHort And sTouT";
console.log(titleCase(str));