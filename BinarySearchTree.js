
class Node{
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}
class BinarySearchTree{
    constructor() {
        this.root = null
    }

    insert(value){
        let node = new Node(value)
        if(!this.root){
            this.root = node
            return this
        }else{
            let current = this.root
            while(true){
                if(value === current.value) return null
                if(value < current.value){
                    if(current.left === null){
                        current.left = node
                        return this
                    }
                    current = current.left
                }else if(value > current.value){
                    if(current.right === null){
                        current.right = node
                        return this
                    }
                    current = current.right
                }
            }
        }
    }

    find(value){
        if(!this.root) return false
        let current = this.root
        let found = false
        while(current && !found){
            if(value === current.value){
                found = true
            }else if(value > current.value){
                current = current.right
            }else if (value < current.value){
                current = current.left
            }
        }
        return found
    }

    BFS(){
        if(!this.root) return null
        let queue = []
        let result = []
        queue.push(this.root)
        while(queue.length){
            let currentNode = queue.shift()
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
            result.push(currentNode.value)
        }
        return result
    }
        
}

let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(6)
bst.insert(15)
bst.insert(3)
bst.insert(8)
bst.insert(12)
bst.insert(20)
console.log(bst.BFS())
