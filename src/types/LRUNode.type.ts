export declare type LRUNode<K, T> = {
    key: K | undefined,
    value: T,
    next: LRUNode<K, T> | undefined,
    prev: LRUNode<K, T> | undefined,
}
