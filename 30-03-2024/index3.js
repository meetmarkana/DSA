let arr = [[1,2,3],[7,8,9]]
   
  
    for(let i = 0; i<arr.length;i++){
        let sum = 0
              for(let j = 0; j<arr[i].length;j++){
       sum += arr[i][j]
        }
        console.log(sum)   
    }