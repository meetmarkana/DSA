class Queue {
    constructor(){
        this.stk1 =[]
        this.stk2 =[]
    }
    enqueue(ele){
        while(this.stk1.length != 0){
            this.stk2.push(this.stk1.pop())
        }
        this.stk1.push(ele)
        while(this.stk2.length != 0){
            this.stk1.push(this.stk2.pop())
        }

    }

    dequeue(){

        if(this.stk1.length == 0){
            return -1
        }

        let el = this.stk1[this.stk1.length-1]
        this.stk1.pop()
        return el
    }
}

let queue = new Queue

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue)

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())