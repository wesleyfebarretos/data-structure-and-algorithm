import { MinHeap } from "../src/MinHeap"

describe("Min Heap", () => {
    const minHeap = new MinHeap();

    it("should validate min heap", () => {
        minHeap.insert(30);
        minHeap.insert(29);
        minHeap.insert(29);
        minHeap.insert(10);
        minHeap.insert(1);
        minHeap.insert(-10);


        expect(minHeap.length).toEqual(6);
        expect(minHeap.delete()).toEqual(-10);
        expect(minHeap.length).toEqual(5);
        expect(minHeap.delete()).toEqual(1);
        expect(minHeap.length).toEqual(4);
        expect(minHeap.delete()).toEqual(10);
        expect(minHeap.length).toEqual(3);
        expect(minHeap.delete()).toEqual(29);
        expect(minHeap.length).toEqual(2);
        expect(minHeap.delete()).toEqual(29);
        expect(minHeap.length).toEqual(1);
        expect(minHeap.delete()).toEqual(30);
        expect(minHeap.length).toEqual(0);
        expect(minHeap.delete()).toEqual(null);
        expect(minHeap.length).toEqual(0);
    })
})
