"use strict"

var array = ["a", "b", "c", "d"];

function revers(arr) {
    var newArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArray.push(arr[i])
    }
    return newArray;
}

var res = revers(array);
console.log(res);