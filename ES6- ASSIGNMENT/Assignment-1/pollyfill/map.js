let array = [0,1,2,3,4,5,6,7,8,9]

function mapPolyfill(arr, operation){
    let newArr = [];
    let size= arr.length;
    for(let i = 0; i < size; i++){
        newArr.push(operation(arr[i]))
    }
    return newArr;
}

function multiplyTwo(value){
    return (value*2)
}

function square(value){
    return (value**2)
}

function cube(value){
    return (value**3)
}

console.log(mapPolyfill(array, multiplyTwo));
console.log(mapPolyfill(array, square));
console.log(mapPolyfill(array, cube));

