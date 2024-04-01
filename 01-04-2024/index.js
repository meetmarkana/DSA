function quickSortDes(arr){
 if(arr.length <= 1){
        return arr
 }

    const pivot = arr[0]
    const left = []
    const right = []

    for(let i = 1; i < arr.length ; i++){
        if(pivot < arr[i]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSortDes(left) , pivot , ...quickSortDes(right)]
}

function quickSort(arr){
    if(arr.length <= 1){
           return arr
    }
   
       const pivot = arr[0]
       const left = []
       const right = []
   
       for(let i = 1; i < arr.length ; i++){
           if(pivot < arr[i]){
               left.push(arr[i])
           }else{
               right.push(arr[i])
           }
       }
       return [...quickSort(right) , pivot , ...quickSort(left)]
   }
   

console.log("Descending :- " + quickSortDes([3,5,6,9,2,5,1]))
console.log("Ascending :- " + quickSort([3,5,6,9,2,5,1]))   
