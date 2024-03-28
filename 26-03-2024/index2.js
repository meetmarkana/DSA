let array = [4,3,2,1]
function plus(el) {
    const n = el.length
    for (let i = n - 1; i >= 0; i--) {
        if (el[i] < 9) {
            el[i]++
            return el
        } else {
            el[i] = 0
        }
    }
    el.unshift(1)
    return el
}


console.log(plus(array))