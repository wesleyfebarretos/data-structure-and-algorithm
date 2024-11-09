import InOrderSearch from "../src/BinaryTreeInOrder";
import postOrderSearch from "../src/BinaryTreePostOrder";
import preOrderSearch from "../src/BinaryTreePreOrder";
import { BTNode } from "../src/types";

describe("Binary Tree Search", () => {
    let root: BTNode<number>;

    beforeEach(() => {
        root = { value: 5 } as BTNode<number>;
        root.left = { value: 5 } as BTNode<number>;
        root.right = { value: 4 } as BTNode<number>
        root.left.right = { value: 3 } as BTNode<number>
        root.left.left = { value: 2 } as BTNode<number>
    });

    it("should print in pre order", () => {
        expect(preOrderSearch(root)).toEqual([5, 5, 2, 3, 4])
    })

    it("should print in order", () => {
        expect(InOrderSearch(root)).toEqual([2, 5, 3, 5, 4])
    })

    it("should print in post order", () => {
        expect(postOrderSearch(root)).toEqual([2, 3, 5, 4, 5])
    })
})
