class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    push(value){
       let node = new Node(value)
       if(this.size === 0){
           this.head = node
           this.tail = node
       }else{
           this.tail.next = node
           this.tail = node
       }
       this.size += 1
       return true
    }

    pop(){
        if(this.size < 1) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.size--;
        if(this.size === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(this.size === 0) return undefined
        let current = this.head
        this.head = current.next
        this.size--
        return current.value
    }

    unshift(value){
        let newHead = new Node(value)
        if(this.size === 0){
            this.push(value)
        }else{
            newHead.next = this.head
            this.head = newHead
        }
        this.size++
        return true
    }

    get(index){
        if(index > this.size || index < 0) return null
        let current = this.head
        let counter = 0;
        while(counter < index){
            current = current.next
            counter++
        }
        return current
    }

    set(index, value){
        let current = this.get(index)
        if(current){
            current.value = value
            return true
        }
        return false
    }

    insert(index, value){
        if(index < 0 || index > this.size) return false
        if(index === this.size) return !!this.push(value)
        if(index === 0) return !!this.unshift(value)
           
        let newNode = new Node(value)
        let previousNode = this.get(index-1)
        newNode.next = previousNode.next
        previousNode.next = newNode
        this.size++
        return true
    }

    remove(index){
        if(index < 0 || index >= this.size) return null
        if(index === this.size - 1) return this.pop()
        if(index === 0) return this.shift()

        let nodeToRemove = this.get(index)
        let previousNode = this.get(index - 1)
        previousNode.next = nodeToRemove.next
        this.size--
        
        return nodeToRemove;
    }

    reverse(){
        if(this.size === 0) return null
        if(this.size === 1) return this.head

        let count = this.size
        while(count > 0){
            count--
            let current = this.get(count)
            let previous = this.get(count - 1)
            current.next = previous
        }
        let temp = this.head
        this.head = this.tail
        this.tail = temp
    }

}

let single = new SinglyLinkedList()
single.push(1)
single.push(2)
single.push(3)
single.push(4)
single.reverse()
console.log(single)