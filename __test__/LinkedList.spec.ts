import { LinkedList } from "../src/LinkedList";

describe("Linked List", () => {
    let linkedList: LinkedList<number>;

    beforeEach(() => {
        linkedList = new LinkedList();
    })

    it("should be abble to append", () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        expect(linkedList.length).toEqual(3);
        expect(linkedList.get(1)).toBeDefined();
        expect(linkedList.get(2)).toBeDefined();
        expect(linkedList.get(3)).toBeDefined();
        expect(linkedList.getAt(0)).toEqual(1);
        expect(linkedList.getAt(1)).toEqual(2);
        expect(linkedList.getAt(2)).toEqual(3);
        expect(linkedList.get(1)).toEqual(1);
        expect(linkedList.get(2)).toEqual(2);
        expect(linkedList.get(3)).toEqual(3);
    })

    it("should be able to preppend", () => {
        linkedList.prepend(1);
        linkedList.prepend(2);
        linkedList.prepend(3);

        expect(linkedList.length).toEqual(3);
        expect(linkedList.get(1)).toBeDefined();
        expect(linkedList.get(2)).toBeDefined();
        expect(linkedList.get(3)).toBeDefined();
        expect(linkedList.getAt(0)).toEqual(3);
        expect(linkedList.getAt(1)).toEqual(2);
        expect(linkedList.getAt(2)).toEqual(1);
        expect(linkedList.get(1)).toEqual(1);
        expect(linkedList.get(2)).toEqual(2);
        expect(linkedList.get(3)).toEqual(3);
    })


    it("should be able to remove", () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        const v1 = linkedList.remove(3);
        const v2 = linkedList.remove(1);
        const v3 = linkedList.remove(4);

        expect(v1).toEqual(3);
        expect(v2).toEqual(1);
        expect(v3).toEqual(4);
        expect(linkedList.length).toEqual(2);
        expect(linkedList.get(3)).toBeUndefined();
        expect(linkedList.get(1)).toBeUndefined();
        expect(linkedList.get(4)).toBeUndefined();
        expect(linkedList.getAt(0)).toEqual(2);
        expect(linkedList.getAt(1)).toEqual(2);
    })

    it("should be able to removeAt", () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        const v1 = linkedList.removeAt(3);
        const v2 = linkedList.removeAt(0);
        const v3 = linkedList.removeAt(2);

        expect(v1).toEqual(3);
        expect(v2).toEqual(1);
        expect(v3).toEqual(4);
        expect(linkedList.length).toEqual(2);
        expect(linkedList.get(3)).toBeUndefined();
        expect(linkedList.get(1)).toBeUndefined();
        expect(linkedList.get(4)).toBeUndefined();
        expect(linkedList.getAt(0)).toEqual(2);
        expect(linkedList.getAt(1)).toEqual(2);
    })

    it("should be able to get", () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);


        expect(linkedList.length).toEqual(4);
        expect(linkedList.get(1)).toEqual(1);
        expect(linkedList.get(2)).toEqual(2);
        expect(linkedList.get(3)).toEqual(3);
        expect(linkedList.get(4)).toEqual(4);
    })

    it("should return undefined on try to get an index out of bounds", () => {
        const v1 = linkedList.get(-1);
        const v2 = linkedList.get(3);

        expect(v1).toBeUndefined();
        expect(v2).toBeUndefined();
    })

    it("should be able to get at", () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);


        expect(linkedList.length).toEqual(4);
        expect(linkedList.getAt(0)).toEqual(1);
        expect(linkedList.getAt(1)).toEqual(2);
        expect(linkedList.getAt(2)).toEqual(3);
        expect(linkedList.getAt(3)).toEqual(4);
    })

    it("should return undefined on try to get at an index out of bounds", () => {
        const v1 = linkedList.getAt(-1);
        const v2 = linkedList.getAt(3);

        expect(v1).toBeUndefined();
        expect(v2).toBeUndefined();
    })

    it("should be able to insert at some position", () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        linkedList.insertAt(0, 1000);
        expect(linkedList.length).toEqual(5);
        expect(linkedList.getAt(0)).toEqual(1000);

        linkedList.insertAt(4, 1001);
        expect(linkedList.length).toEqual(6);
        expect(linkedList.getAt(4)).toEqual(1001);


        linkedList.insertAt(3, 1002);
        expect(linkedList.length).toEqual(7);
        expect(linkedList.getAt(3)).toEqual(1002);
    })
})
