let array1 =  [2,7,11,15]
let target1 = 9

let array2 = [3,2,4]
let target2 = 6

let array3 = [3,3] 
let target3 = 6

function BinarySearch(arr,target){
    let sum=0
    let newarray=[]
    for(let i=0;i<arr.length;i++){
      if(sum == target){
            break
        }else{
            sum=sum + arr[i]
            newarray.push(i )
        }
    }

    return newarray   
}
console.log("Output of Example 1 :- " + BinarySearch(array1,target1))
console.log("Output of Example 2 :- " + BinarySearch(array2,target2))
console.log("Output of Example 3 :- " + BinarySearch(array3,target3))
