type BTNode<T> = {
    value: T;
    left: BTNode<T>;
    right: BTNode<T>;
}

function walk(curr: BTNode<number>, path: number[]): number[] {
    if(!curr) {
        return path;
    }

    //  First visit the node and after recurse
    path.push(curr.value);

    walk(curr.left, path);
    walk(curr.right, path)

    return path;
}

export default function preOrderSearch(root: BTNode<number>): number[] {
    return walk(root, []);
}
