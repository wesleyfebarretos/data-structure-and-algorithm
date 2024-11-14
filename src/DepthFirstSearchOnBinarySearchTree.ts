import { BTNode } from "./types";

function search(curr: BTNode<number>, needle: number): boolean {
    if (!curr) return false;

    if (curr.value === needle) return true;

    if (curr.value < needle) {
        return search(curr.right, needle)
    }

    return search(curr.left, needle)
}

export function dFSOnBST(head: BTNode<number>, needle: number): boolean {
    return search(head, needle);
}
