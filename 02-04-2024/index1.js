let nums =  [2,7,11,15]
let target = 9

function SumTwo(arr,target){
    let sum=0
    let newarray=[]
    for(let i=0;i<arr.length;i++){
            if(sum == target){
                break
            }else{
                sum=sum + arr[i]
                newarray.push(i)
            }
    }

    return newarray   
}
console.log(SumTwo(nums,target))