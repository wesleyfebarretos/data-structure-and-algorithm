interface ILinkedList<T> {
    removeAt(idx: number): T | undefined;
    getAt(idx: number): T | undefined;
    get(value: T): T | undefined;
    remove(value: T): T | undefined;
    insertAt(idx: number, value: T): void;
    append(value: T): void;
    prepend(value: T): void;
    toString(): string;
    get length(): number;
}

type Node<T> = {
    value: T,
    next: Node<T> | undefined,
    prev: Node<T> | undefined,
}

export class LinkedList<T> implements ILinkedList<T> {
    private _length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this._length = 0;
    }

    getAt(idx: number): T | undefined {
        return this.getNodeAt(idx)?.value;
    }

    get length(): number {
        return this._length;
    }


    removeAt(idx: number): T | undefined {
        const node = this.getNodeAt(idx);
        return this.removeNode(node)?.value
    }

    get(value: T): T | undefined {
        return this.findNodeByValue(value)?.value;
    }

    remove(value: T): T | undefined {
        const node = this.findNodeByValue(value);
        return this.removeNode(node)?.value
    }

    insertAt(idx: number, value: T): void {
        const node = this.getNodeAt(idx);

        if (!node) return;

        if (node === this.head) {
            this.prepend(value);
            return;
        }

        this._length++;

        const newNode = { value } as Node<T>;

        if (node === this.tail) {
            newNode.prev = this.tail.prev;
            newNode.next = this.tail
            this.tail.prev = newNode;

            if (newNode.prev) {
                newNode.prev.next = newNode;
            }

            return;
        }

        newNode.prev = node.prev;
        newNode.next = node;
        node.prev = newNode;

        if (newNode.prev) {
            newNode.prev.next = newNode;
        }

        return;
    }

    append(value: T): void {
        const node = { value } as Node<T>;

        this._length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    prepend(value: T): void {
        const node = { value } as Node<T>;

        this._length++;

        if (!this.head) {
            this.head = this.head = node;
            return;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    private getNodeAt(idx: number): Node<T> | undefined {
        if (idx < 0 || idx >= this._length) return;

        let curr = this.head;

        if (!this.head) return;

        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        return curr;
    }

    private findNodeByValue(value: T): Node<T> | undefined {
        let curr = this.head;

        if (!this.head) return;

        for (let i = 0; curr && i < this._length; i++) {
            if (curr.value === value) {
                return curr;
            }

            curr = curr.next;
        }

        return curr;
    }

    private removeNode(node: Node<T> | undefined): Node<T> | undefined {
        if (!node) return;

        this._length--;

        if (this._length === 0) {
            this.head = this.tail = undefined;
            return node;
        }

        if (node === this.head) {
            this.head = node.next;

            if (this.head) {
                this.head.prev = undefined;
            }

            return node;
        }

        if (node === this.tail) {
            this.tail = node.prev;

            if (this.tail) this.tail.next = undefined;

            return node;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        node.prev = node.next = undefined;

        return node;
    }

    toString(): string {
        let out = "{"

        let curr = this.head;

        if (!this.head) return '';

        for (let i = 0; curr && i < this._length; i++) {

            out += ` ${i} => ${curr.value}`
            curr = curr.next;
        }

        out += ' }'

        return out
    }
}
