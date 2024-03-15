let exp = "(]"

function isBalanced(str){
    let stack = []
    for(i = 0 ; i < str.length ; i++){
        let char = str[i]

        if(char === "{" || char === "(" || char === "["){
            stack.push(char)
        }else{
            if(stack.length === 0){
                return false
            }
            let tptr = stack.pop()

            if(char === "}" && tptr != "{" || char === "]" && tptr != "[" || char === ")" && tptr != "("){
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(isBalanced(exp))