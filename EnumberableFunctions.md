## Questions

1. Describe the `map()` function.

    The `map()` function iterates over each item in an array and transforms it, returning a new array. For example:
    `var array = [1, 2, 3];
    var newArray = array.map(item => item + 2);
    console.log(array); // The original array is unchanged. This will log [1, 2, 3]
    console.log(newArray); //This will log [3, 4, 5]`

2. Describe the `filter()` function.

    The `filter()` function acts like a filter, iterating through the array and filtering out any items that don't match the given condition. In other words, it will keep items when the condition evaluates to true and get rid of those that evaluate to false. For example:
    `var array = [3, 7, 10, 12];
    var greaterThanOrEqualToTen = array.filter(item => item >= 10);
    console.log(array); //logs [3, 7, 10, 12]
    console.log(greaterThanOrEqualToTen); //logs [10, 12]`

3. What is the difference between the `map()` and `filter()` functions?

    The main difference between the `map()` and `filter()` functions is that `map()` completely changes the values of the original array, while map keeps the original values but only returns those that meet the desired condition. 
