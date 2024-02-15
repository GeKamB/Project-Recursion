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
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const merge = (left, right) => {
        let result = [];
        while (left.length && right.length) {
            result.push(left[0] < right[0] ? left.shift() : right.shift());
        }
        return result.concat(left.length ? left : right);
    };
    return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}
