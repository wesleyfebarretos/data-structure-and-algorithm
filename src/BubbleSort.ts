function bubbleSort(arr: number[]): void {

    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {

            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }

        }
    }

}


const _unsortedArr = [100, -1, 300, -1000, 2000, 1225, 22, -22, -12, -1, 22];

for (let i = 0; i < 10_000; i++) {
    _unsortedArr.push(Math.random() * i)
}

const _now = Date.now();

bubbleSort(_unsortedArr);

console.log(Date.now() - _now);

console.log(_unsortedArr);
