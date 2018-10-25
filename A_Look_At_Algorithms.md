## Exercises

1. Out of the sorting algorithms introduced, or any others you have encountered, which is the quickest or most efficient in sorting a set of data and why?

    The best sorting algorithm depends on the data that is being sorted. If you have a small data set then using something like Bubble Sort will work just fine, for larger data sets you probably want to go with QuickSort though. Again, it really depends on the data though. If the data is small there isn't really a point writing the more complex code for a QuickSort when you can pretty quickly write the code for a Bubble Sort and get your results.

2. Why is Binary Search more efficient than Linear Search for most cases?

    A Linear Search checks every item in a data set in a linear manner until it finds the one it is looking for. This means that if the item you are looking for is towards the end of your data set, the Linear Search will have to go through almost all the elements before finding what it is looking for. This can become especially inefficient for large data sets. With a Binary Search though, you automatically keep getting rid of half of the data set until the item you are looking for is found.

3. Code an implementation of Bubble Sort and test it on an integer array of your choice.

```javascript
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 1; j < array.length; j++) {
      if(array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}

let t = [5, 8, 10, 2, 4];
console.log(bubbleSort(t));```
