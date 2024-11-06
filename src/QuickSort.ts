function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1;

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) return;

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}
function quickSort(arr: number[]): void {
    const lo = 0;
    const hi = arr.length - 1;

    qs(arr, lo, hi);
}


const unsortedArr = [100, -1, 300, -1000, 2000, 1225, 22, -22, -12, -1, 22];

for (let i = 0; i < 10_000; i++) {
    unsortedArr.push(Math.random() * i)
}

const now = Date.now();

quickSort(unsortedArr)

console.log(Date.now() - now);

console.log(unsortedArr);
