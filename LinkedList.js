import Node from './Node.js';



class LinkedList{
    constructor (head = null){
        this.head = head
        this.nodes = 0
    }

    append(value){
        this.nodes++
        let node = new Node(value)
        if(!this.head){
            this.head =  node
            console.log(this)
            return this
        }

        let tail = this.tail()
        tail.next = node
        console.log(this)
        return this
    }

    prepend(value){
        this.nodes++
        let newHeadNode = new Node(value)
        let oldHead = this.head 


        this.head = newHeadNode
        this.head.next  = oldHead
        console.log(this)
        return this
    }
    size(){
        return this.nodes
    }

    getHead(){
        return this.head
    }   
    tail(){
        let currNode = this.head 
        while(currNode.next){
            currNode = currNode.next
        }
        return currNode
    }
    at(index){
        let currNode = this.getHead() 
        for(let i = 0; i < index; i++){
            currNode = currNode.next
        }
        return currNode
    }
    pop(){
        
    }
}




let linkedList1 = new LinkedList()

linkedList1.append(4)
linkedList1.append(6)
linkedList1.append(7)
linkedList1.append(8)

linkedList1.prepend(2)

console.log(linkedList1.at(2));