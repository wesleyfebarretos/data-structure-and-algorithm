import { LRU } from "../src/LRUCache"

describe("LRU Cache", () => {
    let lru = new LRU(5);

    beforeEach(() => {
        lru.update("one", 1)
        lru.update("two", 2)
        lru.update("three", 3)
        lru.update("four", 4)
        lru.update("five", 5)
    })

    it("should make sure that length is working", () => {
        expect(lru.length).toEqual(5);
        lru.update("six", 6)
        lru.update("seven", 7)
        lru.update("eight", 8)
        lru.update("nine", 9)
        expect(lru.length).toEqual(5);
    })

    it("should get all values", () => {
        expect(lru.get("one")).toEqual(1);
        expect(lru.get("two")).toEqual(2);
        expect(lru.get("three")).toEqual(3);
        expect(lru.get("four")).toEqual(4);
        expect(lru.get("five")).toEqual(5);
    })

    it("should make sure that lru implementation is working", () => {
        lru.update("six", 6);

        expect(lru.get("one")).toEqual(undefined);

        lru.update("two", 2)
        lru.update("seven", 7);

        expect(lru.get("three")).toEqual(undefined);
        
        lru.update("eight", 8);
        lru.update("nine", 9);

        expect(lru.get("four")).toEqual(undefined);
        expect(lru.get("five")).toEqual(undefined);
        expect(lru.get("seven")).toEqual(7);

        lru.update("ten", 10);

        expect(lru.get("six")).toEqual(undefined);
        expect(lru.length).toEqual(5);
    })
})
