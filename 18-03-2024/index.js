let stack = []
function Greater(stk){
    let max = Math.max(...stk)

    for(let i = 0; i < stk.length ; i++){
        if(stk[i] === max){
            stack.push(-1)
        }else{
            stack.push(stk[i]+1)
        }
    }
    return stack
}
let arr = [1,2,3,4]
console.log(Greater(arr))