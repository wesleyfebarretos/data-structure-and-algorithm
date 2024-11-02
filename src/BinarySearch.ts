function binarySearch(haystack: number[], needle: number): number {
    let lo = 0;
    let hi = haystack.length - 1;
    
    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v =  haystack[m];

        if(v === needle) {
            return m;
        } else if(v > needle) {
            hi = m - 1;
        } else {
            lo = m + 1;
        }
    } while (lo <= hi);

    return -1
}

const args = process.argv.slice(2);

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

console.log(binarySearch(arr, parseInt(args[0])));

