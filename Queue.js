class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(value){
        let node = new Node(value)
        if(this.size === 0){
            this.first = this.last = node
        }else{
            this.last.next = node
            this.last = node
        }
        return ++this.size
    }

    dequeue(){
        if(this.size === 0) return null
        let node = this.first
        if(this.size === 1){
            this.last = null
        }else{
            this.first = this.first.next
            node.next = null
        }
        this.size--
        return node.value
    }
}

let queue = new Queue()
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.dequeue())
console.log(queue)