function truthyCheck(collection, pre) {
    return collection.every(function (item) {
        return item.hasOwnProperty(pre) && Boolean(item[pre])
    })
}

console.log(truthyCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"))