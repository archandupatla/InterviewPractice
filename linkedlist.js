class Node{
    constructor(val = null, next = null){
        this.val = val;
        this.next = next;
    }
}
class LinkedList{
    constructor(head){
        this.head = head || null;
    }
    insertLast(data){
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        let node = this.head;
        while(node.next){
            node = node.next;
        }
        node.next = new Node(data);
    }
    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }
    midPoint(){
     if(!this.head){
         return null;
     }
     let first = this.head;
     let second = this.head;
     while(second.next && second.next.next){
         first =  first.next;
         second = second.next.next;
     }
     return first;
    }

    fromLast(n){
        if(!this.head){
            return null;
        }
        let slow = this.head;
        let fast = this.head;
        while(n>0){
            fast= fast.next;
            n--;
        }
        while(fast.next){
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }
}