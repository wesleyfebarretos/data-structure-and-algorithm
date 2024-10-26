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

const disorderedArr = [5,1,6,10,2,20,1,33,-1,-2,100,20000,-40];

bubbleSort(disorderedArr);

console.log(disorderedArr);
