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

        let currNode = this.getHead()
        while(currNode.next.next !== null){
            currNode = currNode.next
        }
        currNode.next = null
        return this.tail()
    }

    contains(value){
        let currNode = this.getHead()
        while(currNode !== null){
            if(currNode.value == value){
                return true
            }
            currNode = currNode.next
        }
        return false
    }

    find(value){
        let count = 0 
        let currNode =this.getHead()
        while(currNode !== null){
            if(currNode.value == value){
                return count
            }
            currNode = currNode.next
            count++
        }
        return null
    }
    toString(){
        let currNode = this.getHead()
        let str = ''

        while(currNode !== null){
            let value = `(${currNode.value}) -> `
            str+= value
            currNode = currNode.next
        }
        str+= 'null'
        return str
    }

    insertAt(value, index){
        let length = this.size()
        
        if(index === 0){
            this.prepend(value)
        }
        
        if(index > length){
            this.append(value)
        }
        
        let prevNode = this.at(index-1)
        let newNode = new Node(value,prevNode.next)
        prevNode.next = newNode

        return this.toString()
    
    }

    removeAt(index){
        
        if(index === 0 ){
            this.head = this.head.next 
            return this.toString()   
        }

        if(index > this.size() - 1) return this.toString()

        let prevNode = this.at(index-1)
        prevNode.next = prevNode.next.next

        return this.toString()
    }

}




let linkedList1 = new LinkedList()

linkedList1.append(4)
linkedList1.append(6)
linkedList1.append(7)
linkedList1.append(8)

linkedList1.append(9)
linkedList1.prepend(2)

console.log(linkedList1.removeAt(3));