import { breadthFirstSearch } from "../src/BinaryTreeBreadthFirstSearch";
import { BTNode } from "../src/types";

describe("BT Breadth First Search", () => {
    let root: BTNode<number>;

    beforeEach(() => {
        root = { value: 5 } as BTNode<number>;
        root.left = { value: 5 } as BTNode<number>;
        root.right = { value: 4 } as BTNode<number>
        root.left.right = { value: 3 } as BTNode<number>
        root.left.left = { value: 2 } as BTNode<number>
    });

    it("should find all values in tree", () => {
        expect(breadthFirstSearch(root, 5)).toBeTruthy()
        expect(breadthFirstSearch(root, 4)).toBeTruthy()
        expect(breadthFirstSearch(root, 3)).toBeTruthy()
        expect(breadthFirstSearch(root, 2)).toBeTruthy()
    })

    it("should return false on try to get non existent value", () => {
        expect(breadthFirstSearch(root, 10)).toBeFalsy()
    })
})
