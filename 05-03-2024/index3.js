let array =  [1]

let max1 = 0
let max2 = 0

let min1 = 0
let min2 = 0

for(let i = 0 ; i<array.length ; i++){
    max1 = Math.max(0 , array[i]+=max1)
    max2 = Math.max(max1,max2)
}

for(let i = 0 ; i<array.length ; i++){
    min1 = Math.min(0 , array[i]+=min2)
    min2 = Math.min(min1,min2)
}

console.log("MaxSumOf Subarray : " + max2)
console.log("MinSumOf Subarray : " + min2)