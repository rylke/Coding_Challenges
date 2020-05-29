
class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value){
        let node = new Node(value)
        if(this.length === 0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.previous = this.tail
            this.tail = node
        }
        this.length++
        return this
    }

    pop(){
        if(this.length === 0) return null
        let nodeToPop = this.tail
        if(this.length === 1){
            this.tail = this.head
        }else {
            this.tail = nodeToPop.previous
            this.tail.next = null
        }
        this.length--
        if(this.length === 0){
            this.head = this.tail = null
        }
        return nodeToPop
    }

    shift(){
        if(this.length === 0) return null
        let elementToShift = this.head
        if(this.length === 1){
            this.head = this.tail = null    
        }else{
            this.head = this.head.next
            this.head.previous = null
            elementToShift.next = null
        }
        this.length--
        return elementToShift
    }

    unshift(value){
        let node = new Node(value)
        if(this.length === 0){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.previous = node
            this.head = node
        }
        this.length++
        return this
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.previous;
                count--;
            }
        }
        return current;
    }

    set(index, value){
        let current = this.get(index)
        if(!current) return false
        current.value = value
        return true
    }

    insert(index, value){
        if(index < 0 || index >= this.length) return null
        let node = new Node(value)
        if(this.length === 0){
            this.head = this.tail = node
        }else{
            let current = this.get(index)
            let previous = this.get(index - 1)
            node.next = current
            previous.next = node
            node.previous = previous
        }
        this.length++
        return this
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        let nodeToRemove = this.get(index)
        nodeToRemove.previous.next = nodeToRemove.next
        nodeToRemove.next.previous = nodeToRemove.previous
        nodeToRemove.next = null
        nodeToRemove.previous = null
        this.length--
        return nodeToRemove
    }
}

let dll = new DoublyLinkedList()
dll.push(1)
dll.push(2)
dll.push(3)
// console.log(dll)
console.log(dll.remove(2))
console.log(dll)