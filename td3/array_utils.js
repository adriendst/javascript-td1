export function getSum41(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

export function getNumberOfEven42(arr) {
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            number++;
        }
    }
    return number;
}

export function getMaxEven45(...arr) {
    let maxEven = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] > maxEven) {
            maxEven = arr[i];
        }
    }
    return maxEven;
}

export function binarySearch44(arr, element) {
    let result = -1;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end && result === -1) {
        const half = Math.round((end + start) / 2);
        if (element === arr[half]) {
            result = half;
        } else if (element > arr[half]) {
            start = half + 1;
        } else {
            end = half - 1;
        }
    }
    return result;
}