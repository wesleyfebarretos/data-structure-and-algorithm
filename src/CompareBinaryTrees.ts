import { BTNode } from "./types";

function compare<T>(root1: BTNode<T> | undefined, root2: BTNode<T> | undefined): boolean {
    if (root1 === undefined && root2 === undefined) return true;

    if (root1 === undefined || root2 === undefined) return false;

    if (root1.value !== root2.value) return false;

    return compare(root1.left, root2.left) && compare(root1.right, root2.right);
}

export function compareBinaryTrees<T>(root1: BTNode<T>, root2: BTNode<T>): boolean {
    return compare(root1, root2);
}
