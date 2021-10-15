const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

const selectionSort = (arr) => {
    const newArr = [];
    const arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        const smallestIndex = findSmallest(arr);
        newArr.push(arr[smallestIndex]);
        arr.splice(smallestIndex, 1);
    }

    return newArr;
}

const result = selectionSort([11, 2, 7, 4, 22, 9, 1]);

console.log(result);