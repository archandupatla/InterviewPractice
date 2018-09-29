// const l1 = new LinkedList();
// l1.insertLast(1);
// l1.insertLast(2);
// l1.insertLast(3);
// l1.insertLast(4);
// l1.insertLast(5);
// l1.insertLast(5);
// console.log(l1.midPoint());
// console.log(l1)

//map array helper
// const arr = ['Abilash', 'reddy']
// const ab = [...arr].map(el=> `${el} is a good boy`);
// console.log(ab);
// console.log(arr);

//function to flatten array
console.log(flat([1,2,3,4,[2,4,[10,22]]]));
function flat(arr){
let newArr = [];
arr.forEach((el)=>{
if(Array.isArray(el)){
    newArr = newArr.concat(...el)
}
else{
    newArr.push(el)
}
})
return newArr;
}
//function to play with objects
function play(){
const state = {
    meat:1,
    bacon: 2,
    cheese: 3
}
const newArray = [];
for(let key in state){
newArray.push(Array(state[key]));
}
console.log(newArray);
let r = newArray.reduce((a, c)=>{
return a.concat(c)
}, [])
console.log(r)
}

play();

//function to filter array
console.log(filterArray(['Abilash', 'reddys', 'Abilash']))
function filterArray(arr){
    return arr.filter((el)=>{
        return el.split('').includes('s');
    })
}
//function to calculate factorial
console.log(factorial(5))
function factorial(n){
    if(n == 0){
        return 1
    }
   if(n>0){
       return n*factorial(n-1)
   }
}

//function to print range of two numbers

function range(x,y, arr = []){
    let newArr = [];
    if(x + 1 === y){
        console.log(arr)
        return;
    }
newArr.push(x+1);
return range(x+1, y, arr.concat(newArr))
}


range(2,9)

//function to play for each
function mapForEach(arr, cb){
    const newArr = [];
    for(let i = 0; i<arr.length; i++){
     newArr.push(cb(arr[i]));
    }
    return newArr;
}
const a = [1,2,4]
const returned = mapForEach(a, (function(limiter){
return function(item){
    return item>limiter
}
}(3)));

console.log(returned)

//function to check even or not

function evenOrNot(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(evenOrNot(100))

//function to write sum of array

function SumOfArray(arr){
    let sum = 0;
    return arr.reduce((acc, el)=>{
        return acc + el
    })
}
console.log(SumOfArray([1,2,3,4,5]))

//find the gcd of two numbers
function gcd(x,y){
    let i;
    if(x>=y){
        i = x;
    }
    if(y>=x){
        i = y;
    }
    while(i>0 && x>0 && y>0){
        if(x%i ==0 && y%i==0){
            return i;
        }
        i--;
    }
}
console.log(gcd(100, 1000))

//prototype play
String.prototype.dummy = function(q){
    console.log(this, q)
}
'thing'.dummy('random');


//function to find prime factors;

function primeFactorss(n){
    const primeFac = [];
    let div = 2;
    while(n>div){
        if(n%div === 0){
            checkPrime(div) ? primeFac.push(div) : null;
        }
        div++;
    
    }
    return primeFac;
    }
    function checkPrime(n){
    let div = 2;
    while(n>div){
    if(n%div === 0){
    return false;
    }
    else{
    div++;
    }
    }
    return true
    }

    console.log(primeFactorss(99));


    
    function merged(a, b){
        const merged = [];
        let i = 0;
        let j = 0;
        if(a && !b){
            console.log(a);
            return;
        }
        if(b && !a){
           console.log(b);
           return;
        }
        while(a[i] || b[j]){
            if(a[i]>=0 && b[j]>=0 && a[i] <= b[j]){
                merged.push(a[i]);
                i++;
            }
            else if(a[i]>=0 && b[j]>=0 && a[i] >= b[j]){
                merged.push(b[j]);
                j++;
            }
            else if(a[i] && !b[j]){
                 merged.push(a[i]);
                 i++;
            }
            else if(!a[i] && b[j]){
                merged.push(b[j]);
                j++;
           }

        }
        console.log(merged);
    }
    merged([1,2,3], [1,1,1])

//string reverse using map

function rev(str){
    const newArr = str.split('').reduce((acc, cv)=>{
     return cv+ acc;
    }, '')
    return newArr;
}
console.log(rev('vishnu'))


//function to flatteb

function flatten(arr){
    let newArr = [];
    for(let i = 0; i< arr.length; i++){
    if(Array.isArray(arr[i])){
    newArr = newArr.concat(flatten(arr[i]));
    }
    else{
    newArr.push(arr[i])
    }
    }
    return newArr;
    }
    
    console.log(flatten([1,2,3]))

//find factorial of a number with recursion
function factorial(n, result = 1){
    if(n == 0){return 1}
    if(n==1){
      return result;
    }
    result = result * n;
    
    return factorial((Math.sign(n)*n) - 1, result)
    
  }
  console.log(factorial(-10))

  //
  const table = document.querySelector('table');
  console.log(table)














