const unSortedArray = [40, 53, 44, 21];

const bubbleSort = (unsortedArr) => {
  for (let element = 0; element < unsortedArr.length; element++) {
    for (let inner = 0; inner <= unsortedArr.length - element - 1; inner++) {
      if (unsortedArr[inner] > unsortedArr[inner + 1]) {
        let temp = unsortedArr[inner];
        unsortedArr[inner] = unsortedArr[inner + 1];
        unsortedArr[inner + 1] = temp;
      }
    }
  }
  return unSortedArray;
};

// console.log(bubbleSort(unSortedArray));
// const unSortedArray = [40, 53, 44, 21];
const insertionSort = (arr) => {
  for (let index = 1; index < arr.length; index++) {
    let current = arr[index]; // 53 // 44
    let j = index - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
};

const merge = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
};

const mergeSort = (arr) => {
  const mid = arr.length / 2;
  if (arr.length < 2) {
    return arr;
  }
  const left = arr.splice(0, mid);
  return merge(mergeSort(left), mergeSort(arr));
};

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = arr.filter((x) => x < pivot);
  let right = arr.filter((x) => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
};


