# Challenge Summary
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual. Once you are done with your article, code a working, tested implementation of Merge Sort based on the pseudocode provided.
Time = O(n*logn) as entire input must be iterated through, and this must occur O(log(n)) times (the input can only be halved O(log(n)) times). n items iterated log(n) times gives O(n log(n)). source Space = O(n) since the space used scales directly with n due to the recursion.

After some googling I think the time efficiency will be O(n*logn) because the entire input must be interated through O(log(n)) times. The space efficiency will be O(n) because it will have to scale directly with n.

The provided pseudo code, mergeSort() takes in an array of integers as an argument and sorts them in place from the lowest value to the highest value. Here is what the code is doing line by line.

DECLARE n <-- arr.length This line initializes variable n equal to the array length.
if n > 1 This line checks if the array length is greater than 1.
DECLARE mid <-- n/2 On this line the variable mid is initalized equal to n/2.
DECLARE left <-- arr[0...mid] On this line the variable left is initialized as an array of numbers from index 0 through the variable mid.
DECLARE right <-- arr[mid...n] This line is initializing variable right as an array of numbers from mid through the index n.
Mergesort(left) On this line the mergeSort function is called on the left array.
Mergesort(right) On this line the mergeSort function is called on the right array.
Merge(left, right, arr) On this line the left and right sides are merged together.
The next part of the pseudo code creates a helper function called merge()

DECLARE i <-- 0 On this line, variable i is initialized equal to 0.
DECLARE j <-- 0 On this line, variable j is initialized equal to 0.
DECLARE k <-- 0 On this line, variable k is initialized equal to 0.
while i < left.length && j < right.length This line will loop while i is less than the length of the left array AND while j is less than the right array.
if left[i] <= right[j] This line is saying if the value in the left array at index i is less than or equal to the value in the right array at index j...
arr[k] <-- left[i] This line is a continuation from the last line saying if the previous condition is met, assign the value in the original array at index k to the value in the left array at index i.
i <-- i + 1 This line is saying to increment by 1.
else arr[k] <-- right[j] On this line the value in the original array at index k is being assigned to the value in the right array at index j.
j <-- j + 1 This line is saying to increment j by 1.
k <-- k + 1 This line is saying to increment k by 1.
if i = left.length This line checks to see if variable i is equal to the length of the left array.
set remaining entries in arr to remaining values in right This line is saying to loop through the remaining indexes in the array and the right array and set it equal to the remaining values in the right array.
else set remaining entries in arr to remaining values in left This line is saying to loop through the remaining indexes in the array and the left array and set it equal to the remaining values in the left array.

## Whiteboard Process
![Code Challenge 27](../Images/Challenge-27.jpg)

## Approach & Efficiency
Reading Jeffrey Smith's code, as well as Brooke's code. Also, help from TA's to help me understand.

## Solution
Test: npm test code-challenge-27
