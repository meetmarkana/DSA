class Queue{
    constructor (){
        this.queue = []
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        if(this.queue.length === 0 ){
            return "Queue is Empty"
        }else{
            return this.queue.shift()
        }
    }
    front(){
        if(this.queue.length === 0 ){
            return "Stack is Empty"
        }else{
            return this.queue[0]
        }
    }
    size(){
        return this.queue.length
    }
    isEmpty(){
        return this.queue.length === 0
    }
}

let queue = new Queue
queue.enqueue(11)
queue.enqueue(22)
queue.enqueue(33)
queue.enqueue(44)
queue.enqueue(5)
// console.log(queue)
queue.dequeue()
console.log("Front Element of Queue = "+queue.front())
console.log("Size of Queue = "+queue.size())    
console.log("Is Queue Empty ?? "+queue.isEmpty())
