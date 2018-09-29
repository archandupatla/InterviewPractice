class Node{
    constructor(data){
        this.data = data || null;
        this.left = null;
        this.right = null;
    }
    insert(data){
      //  const newNode = new Node(data);
        if(this.data < data && this.right){
         this.right.insert(data);
        }
        else if(this.data > data && this.left){
              this.left.insert(data);
        }
        else if(this.data< data && !this.right){
            this.right = new Node(data);
        }
        else if(this.data > data && !this.left){
            this.left = new Node(data);
        }
    }
    contains(data){
        if(this.data === data){
            return this;
        }
        else if(this.data < data && this.right){
            this.right.contains(data);
        }
        else if(this.data > data && this.left){
            this.right.contains(data);
        }
        else{
            return null;
        }
    } 
}
class BinarySearchTree{
    constructor(){

    }
}