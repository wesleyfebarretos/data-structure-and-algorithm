type QNode<T> = {
    value: T;
    next: QNode<T> | undefined;
}

class Queue<T> {
    private _length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this._length = 0;
    }

    get length() {
        return this._length;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    enqueue(item: T) {
        const node = { value: item } as QNode<T>;

        this._length++;

        if(!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque() { 
        if(!this.head) return undefined;

        this._length--;

        const head = this.head;
        this.head = this.head.next;

        //  free
        head.next = undefined;

        if(this._length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }
}

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(6);

console.log("queue length -> ", queue.length)

while(queue.peek()) {
    console.log(queue.peek());
    queue.deque();
}

