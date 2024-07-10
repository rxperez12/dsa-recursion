/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {

  /**
   * base case = if the function returns true
   * [1, 2, 3, 4, 5] , 7
   * [4, 5] , 7
   * [5], 7
   * false
   * check a single number (middle number) in the array against val
   * if mid > val, give the right side of array
   * if mid < val, give the left side of the array
   */

  if (arr.length === 0) return false;

  const midPoint = Math.floor((right-left)/2)

  if (arr[midPoint] === val){
    return true

  } else if (arr[midPoint] > val){
    binarySearch(arr, val, left = midPoint, right = arr.length)

  } else if (arr[midPoint] < val){
    binarySearch(arr, val, left = 0, right = midPoint)
  }


  return false;
}

export { binarySearch };