let str = "Hello"

function rev(str){
    let stack = []
    let revstring = ""

    for(let i=0 ; i < str.length ; i++){
            stack.push(str[i])
            
    }
    for(let i=0;i<str.length ;i++){
        revstring += stack.pop()
    }
    return revstring
}

console.log(rev(str))