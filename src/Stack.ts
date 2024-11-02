type SNode<T> = {
    value: T,
    prev: SNode<T>
}

class Stack<T> {
    head?: SNode<T>
    length: number;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    push(item: T): void {
        const node = { value: item } as SNode<T>;

        this.length++;
        if (!this.head) {
            this.head = node
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        const head = this.head;

        if (this.length === 0) {
            this.head = undefined;
            return head?.value;
        }

        this.head = head?.prev;

        //  free

        return head?.value
    }
}

const stack = new Stack<number>();


for (let i = 1; i <= 15; ++i) {
    stack.push(i);
}

let v;

while (v = stack.pop()) {
    console.log(v)
}
