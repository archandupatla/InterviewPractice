class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }
    add(data){
        this.children.push(new Node(data));
    }
    remove(data){
        this.children.filter((node)=>{
          return node.data !== data;
        })
    }
}
class Tree{
    constructor(){
        this.root = null;
    }
    traverseBF(cb){
        const arr = [this.root];
        while(arr.length){
            const n = arr.shift();
            arr.push(...n.children);
            cb(n);
        }
    }
    depthFirst(cb){
        const arr = [this.root];
        while(arr.length){
            const n = arr.shift();
            arr.unshift(...n.children);
            cb(n);
        }
    }
    levelWidth(root){
        const arr = [root, 's'];
        const counter = [0];
        while(arr.length>1){
            let node = arr.shift();
            if(node === 's'){
                arr.push('s');
                counter.push(0);
            }
            else{
                arr.push(...node.children);
                counter[counter.length - 1] += 1; 
            }
        }
        return counter;
    }
}