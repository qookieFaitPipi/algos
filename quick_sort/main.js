const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];

  const lessArray = [];
  const moreArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i !== pivotIndex) {
      if (array[i] < pivot) {
        lessArray.push(array[i]);
      } else {
        moreArray.push(array[i]);
      }
    }
  }

  return [...quickSort(lessArray), pivot, ...quickSort(moreArray)];
}

const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(array);
console.log(sortedArray);
