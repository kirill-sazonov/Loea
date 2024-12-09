function Partition(array, low, high) {
  let pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }

  [array[i + 1], array[high]] = [array[high], array[i + 1]]; // Swap pivot
  return i + 1;
}

// Example usage within quicksort:
function quicksort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    let pi = Partition(array, low, high);

    quicksort(array, low, pi - 1);
    quicksort(array, pi + 1, high);
  }
}

// Example usage:
let arr = [10, 7, 8, 9, 1, 5];
quicksort(arr);
console.log('Sorted array:', arr); // Output: [1, 5, 7, 8, 9, 10]
