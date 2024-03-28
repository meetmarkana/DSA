let array = [0,0,1,1,1,2,2,3,3,4]

function duplicateRemove(arr) {
    if (arr.length === 0) return 0

    let k = 1

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[k] = arr[i]
            k++
        }
    }

    return k
}



console.log(duplicateRemove(array))