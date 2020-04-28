/*
  Borrowed from here: https://dev.to/amit_merchant/essential-vanilla-javascript-functions
*/


// Merge two arrays
// arrayMerge([1, 2, 3], [4, 5]);
// [1, 2, 3, 4, 5]
function arrayMerge(arr1, arr2) {
  for(var i=0; i<arr2.length; i++){
    arr1.push(arr2[i]);
  }

  return arr1;
}


// Inserts a specified number of items, with a specified value, to an array
// arrayPad([1,2,3,4], 2, "unicorn");
// [ 1, 2, 3, 4, 'unicorn', 'unicorn' ]
function arrayPad(arr, size, value) {
  for(var i=0; i<size; i++){
    arr.push(value);
  }
  return arr;
}

module.exports = { arrayMerge, arrayPad };
