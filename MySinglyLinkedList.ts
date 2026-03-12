

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
        if(pos >= this.size || pos < 0) return undefined;


        let node = this.head;

        for(let i = 0; i < pos; i++) {
            node = node!.next;
        }

        return node ?? undefined;
    }

    set(pos: number, newValue: number):boolean {

        if(pos >= this.size || pos < 0) return false;

        let node = this.head;

        for(let i = 0; i < pos; i++) {
            node = node!.next;
        }

        node!.value = newValue;

        return true;
    }

    insert(pos:number, val: number) : boolean {

        if(pos > this.size || pos < 0) return false;

        if(pos === 0) {
            this.unshift(val);
            return true;
        }

        if(pos === this.size) {
            this.push(val);
            return true;
        }


        const current = this.get(pos)!;
        const prev = this.get(pos - 1)!;

        const node = new MyNode(val);

        prev.next = node;
        node.next = current;
        this.size++;

        return true;
    }

    remove(pos:number):boolean {

        if(pos < 0 || pos >= this.size) return false;

        if(pos === 0) {
            this.shift();
            return true;
        }

        if(pos === this.size) {
            this.pop();
            return true;
        }

        const prev = this.get(pos - 1)!;
        const next = this.get(pos + 1)!;

        prev.next = next;
        this.size--;

        return true;
    }

    print() {
        const arr = [];
        let current = this.head;

        while(current) {
            arr.push(current.value);
            current = current.next;
        }

        console.log(arr);
    }

    reverse():this {
        if(!this.head) return this;

        let current = this.head;
        let prev = null;
        this.tail = current;

        for(let i = 0; i < this.size; i++ ) {
            let next_node = current.next!;
            current.next = prev;
            prev = current;
            current = next_node;
        }

        this.head = prev;

        return this;
    }
    
}

const list = new MySinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

list.reverse();

list.print();
