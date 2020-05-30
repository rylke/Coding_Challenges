class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    push(value){
        let node = new Node(value)
        if(this.size === 0){
            this.first = this.last = node
        }else{
            node.next = this.first
            this.first = node
        }
        return ++this.size
    }

    pop(){
        if(this.size === 0) return null
        let node = this.first
        if(this.size === 1){
            this.first = this.last = null
        }else{
            this.first = this.first.next
            node.next = null
        }
        this.size--
        return node.value
    }
}

let stack = new Stack()
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log(stack.pop())
