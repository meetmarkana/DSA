let nums  = [-2,1,-3,4,-1,2,1,-5,4]

let max1 = 0
let max2 = 0

let min1 = 0
let min2 = 0

for(let i = 0 ; i<nums.length ; i++){
    max1 = Math.max(0 , nums[i]+=max1)
    max2 = Math.max(max1,max2)
}

for(let i = 0 ; i<nums.length ; i++){
    min1 = Math.min(0 , nums[i]+=min2)
    min2 = Math.min(min1,min2)
}

console.log("MaxSumOf Subarray : " + max2)
console.log("MinSumOf Subarray : " + min2)