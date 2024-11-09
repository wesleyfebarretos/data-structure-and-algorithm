import { BTNode } from "./types";

function walk(curr: BTNode<number>, path: number[]): number[] {
    if(!curr) {
        return path;
    }

    //  First recurse to left side and then visit the node
    walk(curr.left, path);

    path.push(curr.value);

    walk(curr.right, path)

    return path;
}

export default function InOrderSearch(root: BTNode<number>): number[] {
    return walk(root, []);
}
