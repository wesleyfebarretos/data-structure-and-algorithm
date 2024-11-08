type BTNode<T> = {
    value: T;
    left: BTNode<T>;
    right: BTNode<T>;
}

function walk(curr: BTNode<number>, path: number[]): number[] {
    if(!curr) {
        return path;
    }

    //  First recurse and then visit the node;
    walk(curr.left, path);

    walk(curr.right, path)

    path.push(curr.value);

    return path;
}

export default function postOrderSearch(root: BTNode<number>): number[] {
    return walk(root, []);
}
