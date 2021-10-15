const binarySearch = (arr, item) => {
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        let guess = arr[mid];

        if (guess === item) {
            return arr[mid];
        }

        if (guess > item) {
            high -= mid;
        } else {
            low += mid;
        }
    }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let output = binarySearch(arr, 5);

console.log(output);