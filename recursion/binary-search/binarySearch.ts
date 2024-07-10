/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {

  /**
   * base case = if the function returns true
   * [1, 2, 3, 4 ] , 4
   * [4, 5] , 4
   * [5], 4
   * false
   * check a single number (middle number) in the array against val
   * if mid > val, give the right side of array
   * if mid < val, give the left side of the array
   */

  if (arr.length === 0 || left < 0 || right > arr.length || left > right)
     return false;

  const midPoint = Math.floor((right+left)/2)
  let answer = false

  if (arr[midPoint] === val){
    answer = true

  } else if (arr[midPoint] < val){
    answer = binarySearch(arr, val, left = midPoint + 1, right = arr.length)

  } else if (arr[midPoint] > val){
    answer = binarySearch(arr, val, left = 0, right = midPoint - 1)
  }

  return answer;
}

export { binarySearch };