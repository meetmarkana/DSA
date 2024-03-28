let array1=[1,2,3,0,0,0]

let array2= [2,5,6,7]

let m=3

let n=3

function merge(arr1, arr2, m, n) {
    let array3 = []
    for (let i = 0; i < m; i++) {
        array3.push(arr1[i])
        array3.push(arr2[i])
    }
    arr3 = arr3.sort((a, b) => a - b)
    return arr3
}

console.log(merge(array1, array2, m, n))