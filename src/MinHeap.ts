interface IMinHeap {
    insert(n: number): void;
    delete(): number | null;
}
export class MinHeap implements IMinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    show() {
        console.log(this.data)
    }

    insert(n: number): void {
        this.data[this.length] = n;
        this.heapifyUp(this.length);
        this.length++;

    }

    delete(): number | null {
        if (this.length === 0) return null;

        this.length--;

        const out = this.data[0];

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];

        this.data.pop()

        this.heapifyDown(0);

        return out;
    }

    private leftChildIdx(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChildIdx(idx: number): number {
        return idx * 2 + 2;
    }

    private parentIdx(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parentIdx = this.parentIdx(idx);
        const parentValue = this.data[parentIdx];
        const currValue = this.data[idx];

        if (currValue < parentValue) {
            this.data[idx] = parentValue;
            this.data[parentIdx] = currValue;
            this.heapifyUp(parentIdx);
        }
    }

    private heapifyDown(idx: number): void {
        if (idx >= this.length) return;

        const leftChildIdx = this.leftChildIdx(idx);

        if (leftChildIdx >= this.length) return;

        const rightChildIdx = this.rightChildIdx(idx);

        const rightValue = this.data[rightChildIdx];
        const leftValue = this.data[leftChildIdx];
        const currValue = this.data[idx];

        if (leftValue >= rightValue && currValue > rightValue) {
            this.data[idx] = rightValue;
            this.data[rightChildIdx] = currValue;
            this.heapifyDown(rightChildIdx);
        } else if ((rightValue > leftValue || !rightValue) && currValue > leftValue) {
            this.data[idx] = leftValue;
            this.data[leftChildIdx] = currValue;
            this.heapifyDown(leftChildIdx);
        }
    }
}
