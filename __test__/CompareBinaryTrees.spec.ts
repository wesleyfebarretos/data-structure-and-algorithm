import { compareBinaryTrees } from "../src/CompareBinaryTrees";
import { BTNode } from "../src/types";

describe("Compare Binary Trees", () => {
    let root1: BTNode<number>;
    let root2: BTNode<number>;

    beforeEach(() => {
        root1 = { value: 5 } as BTNode<number>;
        root1.left = { value: 5 } as BTNode<number>;
        root1.right = { value: 4 } as BTNode<number>
        root1.left.right = { value: 3 } as BTNode<number>
        root1.left.left = { value: 2 } as BTNode<number>

        root2 = { value: 5 } as BTNode<number>;
        root2.left = { value: 5 } as BTNode<number>;
        root2.right = { value: 4 } as BTNode<number>
        root2.left.right = { value: 3 } as BTNode<number>
        root2.left.left = { value: 2 } as BTNode<number>
    });

    it('it should return true cause the trees are equal', () => {
        expect(compareBinaryTrees(root1, root2)).toBeTruthy();
    })

    it('it should return false cause the trees are different in shape', () => {
        root2.left.left.left = { value: 2 } as BTNode<number>
        expect(compareBinaryTrees(root1, root2)).toBeFalsy();
    })

    it('it should return false cause the trees are different in values', () => {
        root2.left.left.left = { value: 3 } as BTNode<number>
        expect(compareBinaryTrees(root1, root2)).toBeFalsy();
    })
})
