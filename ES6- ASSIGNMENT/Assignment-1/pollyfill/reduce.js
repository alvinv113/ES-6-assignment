function reducePoly(arr, cb, initial = arr[0]) {
    let acc = initial;
for (let i = 1; i < arr.length; i++) {
        acc = cb(arr[i], acc);
    }
    return acc;
}
function sum(x, acc) {
    return x + acc;
}
let arr=[1,2,3,4,5];
console.log(reducePoly(arr, sum));

