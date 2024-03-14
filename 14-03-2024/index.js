class Stack{
        constructor (){
            this.stack = []
        }
        push(element){
            this.stack.push(element)
        }
        pop(){
            if(this.stack.length === 0 ){
                return "Stack is Empty"
            }else{
                return this.stack.pop()
            }
        }
        peek(){
            if(this.stack.length === 0 ){
                return "Stack is Empty"
            }else{
                return this.stack[this.stack.length-1]
            }
        }
        size(){
            return this.stack.length
        }
        isEmpty(){
            return this.stack.length === 0
        }
}

let stack = new Stack
stack.push(11)
stack.push(22)
stack.push(33)
stack.push(44)
stack.push(5)
stack.pop()
console.log("Peek Element of Stack = "+stack.peek())
console.log("Size of Stack = "+stack.size())    
console.log("Is Stack Empty ?? "+stack.isEmpty())
