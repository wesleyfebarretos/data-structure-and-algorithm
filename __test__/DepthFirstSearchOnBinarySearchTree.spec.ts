import { dFSOnBST } from "../src/DepthFirstSearchOnBinarySearchTree";
import { BTNode } from "../src/types";

describe("Depth First Search On Binary Search Tree", () => {
    let root: BTNode<number>;

    beforeEach(() => {
        root = { value: 5 } as BTNode<number>;
        root.left = { value: 5 } as BTNode<number>;
        root.right = { value: 6 } as BTNode<number>
        root.left.left = { value: 3 } as BTNode<number>
        root.left.left = { value: 2 } as BTNode<number>
    });

    it('should find and return true', () => {
        expect(dFSOnBST(root, 6)).toBeTruthy();
        expect(dFSOnBST(root, 2)).toBeTruthy();
    })

    it('should find and return false', () => {
        expect(dFSOnBST(root, 8)).toBeFalsy();
    })
})
