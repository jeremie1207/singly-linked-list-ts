class MySinglyLinkedList {
    head: MyNode | null;
    tail : MyNode | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(value : number) {
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
        
        if(current === this.tail) {
            this.head = null;
            this.tail = null;
            this.size = 0;
        } else {
            this.head = current.next;
            this.size--;
        }

        current.next = null;

        return current;
    }
}

const list = new MySinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

list.pop();
list.shift();
list.traversal();
