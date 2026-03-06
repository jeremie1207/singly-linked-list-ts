// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World"
console.log(anExampleVariable)

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.

// interface User {
//     name: string;
//     id: number;
// }

// const user: User = {
//     name: "Hayes", 
//     id: 0,
// }

// class UserAccount {
//     name: string;
//     id: number;

//     constructor(name: string, id: number) {
//         this.name = name;
//         this.id = id;
//     }
// }

// const user: User = new UserAccount("Murphy", 1);

// type MyBool = true | false;

// type WindowStates = "open" | "closed" | "minimized";


// const getLength = (obj: string | any[]) => obj.length;

// console.log(getLength(['a', 'b', 1]));
// console.log(getLength('jeremie'));

// type StringArray = Array<string>;

// const stringArray : StringArray = ['a', 'b', 'c', 'd'];

// stringArray.forEach(str => {
//     console.log(str);
// })
  

class MyNode {
    value : number;
    next : MyNode | null;

    constructor(value : number) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    head: MyNode | null;
    tail : MyNode | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(value : number) : this{
        const newNode = new MyNode(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail!.next = newNode;
            this.tail = newNode; 
        }
        this.size++;

        return this;
    }

    traversal() {
        let node = this.head;

        while (node) {
            console.log(node);
            node = node.next;
        }
    }

    pop(): MyNode | undefined {
        if(!this.head) {
            return;
        }
        if(this.head === this.tail) {
            const node = this.head;
            this.head = null;
            this.tail = null;
            this.size = 0;
            return node;
        }

        let current = this.head;
        let previous = current;
        
        while(current!.next) {
            previous = current;
            current = current!.next;
        }

        previous!.next = null;
        this.tail = previous;
        this.size--;

        return current;
    }

    shift(): MyNode | undefined {
        if(!this.head) return;

        const current = this.head;
        this.head = current.next;
        this.size--;
        if(this.size === 0) {
            this.tail = null;
        }
        current.next = null;

        return current;
    }

    unshift(value : number) : this{
        const node = new MyNode(value);
        if(!this.head) {
            this.tail = node;
        } else {
            node.next = this.head;
            
        }

        this.head = node;

        this.size++;
        
        return this;
    }

    search(key: number):boolean {
        for(let node = this.head; node; node = node.next) {
            if(node.value === key) return true;
        }

        return false;
    }

    get(pos : number) : MyNode | undefined {
        if(!this.head || pos >= this.size) return undefined;


        let node = this.head;

        for(let i = 0; i < pos; i++) {
            node = node.next;
        }

        console.log(node);
        
        return node ?? undefined;
    }
    
}

const list = new MySinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

// list.pop();
// list.shift();
// list.unshift(0);
// list.traversal();

// console.log(list.search(3));

list.get(5);



