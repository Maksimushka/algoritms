function quickSort(arr) {
    if (arr.length < 2) return arr;

    let max = arr.length - 1;
    let rand = Math.floor(1 + Math.random() * (max));
    let pivot = arr[rand];

    const left = [];
    const right = [];

    arr.splice(arr.indexOf(pivot), 1);
    arr = [pivot].concat(arr);

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))
}

const result = quickSort([4, 8, 3, 11, 5, 6]);

console.log(result);