
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
}

let bst = new BinarySearchTree()
bst.insert(55)
bst.insert(44)
bst.insert(66)
console.log(bst.insert(33))
