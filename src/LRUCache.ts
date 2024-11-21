import { LRUNode } from "./types";

interface ILRU<K, V> {
    update(key: K, value: V): void,
    get(key: K): V | undefined;
}

function createNode<K, V>(key: K, value: V): LRUNode<K, V> {
    return { key, value } as LRUNode<K, V>;
}

export class LRU<K, V> implements ILRU<K, V> {
    private _length: number;
    private head?: LRUNode<K, V>;
    private tail?: LRUNode<K, V>;

    private lookUp: Map<K, LRUNode<K, V>>;
    private capacity: number;

    constructor(capacity: number = 8) {
        this.head = this.tail = undefined;
        this._length = 0;
        this.lookUp = new Map<K, LRUNode<K, V>>();
        this.capacity = capacity;
    }

    get length() {
        return this._length;
    }

    update(key: K, value: V): void {

        let node = this.lookUp.get(key);

        if (!node) {
            const node = createNode(key, value);
            this._length++;
            this.prepend(node);
            this.trimCache();
            this.lookUp.set(key, node);
        } else {
            this.detach(node);
            this.prepend(node);
            node.value = value;
        }
    }

    get(key: K): V | undefined {

        const node = this.lookUp.get(key);

        if (!node) {
            return undefined;
        }

        this.detach(node);
        this.prepend(node);

        return node.value;
    }

    private detach(node: LRUNode<K, V>): void {
        if (node === this.head) {
            this.head = this.head.next;
        }

        if (node === this.tail) {
            this.tail = this.tail.prev;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        node.prev = undefined;
        node.next = undefined;
    }

    private prepend(node: LRUNode<K, V>): void {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        if (node === this.head) {
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    private trimCache(): void {
        if (this._length <= this.capacity) {
            return;
        }

        const tail = this.tail as LRUNode<K, V>;

        this.detach(tail);
        this.lookUp.delete(tail.key as K);
        this._length--;

        tail.key = undefined;
    }

}
