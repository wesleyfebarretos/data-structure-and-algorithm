import { BTNode } from "./types";

export function breadthFirstSearch<T>(head: BTNode<T>, needle: T): boolean {
    const q: (BTNode<T> | undefined)[] = [head];


    while (q.length) {
        const curr = q.shift();

        if (!curr) continue;

        if (curr.value === needle) return true;

        q.push(curr.left);
        q.push(curr.right);
    }

    return false;
}
