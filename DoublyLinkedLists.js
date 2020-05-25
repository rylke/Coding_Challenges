
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
}

let dll = new DoublyLinkedList()
dll.unshift(1)
dll.unshift(2)
console.log(dll.get(2))