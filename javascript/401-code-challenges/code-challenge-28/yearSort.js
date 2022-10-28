'use strict';

function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}
function yearSort(arr) {
  let n = arr.length;
  var i, j;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j].year > arr[j + 1].year) {
        swap(arr, j, j + 1);

      }
    }
  }
  return arr;
}
module.exports = yearSort;
