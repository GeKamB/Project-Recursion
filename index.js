function fibs(n) {
    let fibSequence = [0, 1];
    if (n < 2) {
        return n;
    } else {
        for (let i = 2; i < n; i++) {
            let nextFib = fibSequence[i - 1] + fibSequence[i - 2];
            fibSequence.push(nextFib);
        }
        return fibSequence;
    }
  }
  console.log("fibs: " + fibs(50))
  console.log("fibsRec: " + fibsRec(4))
    
  
    function fibsRec(n) {
    if (n <= 2) {
      return n === 0 ? [] : [0, 1];
  } else {
        let fibSequence = fibsRec(n - 1);
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
        return fibSequence;
    }
  }

  function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: If the array has 0 or 1 elements, it is already sorted
    }
  
    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
  
    // Recursively sort the left and right halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from left and right arrays and merge them into the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
  
    // Merge any remaining elements from the left and right arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }