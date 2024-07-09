/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {

  // [0, 1, 2, 3]

  // 1

  //check 0 index, haven't reach base yet
  // 1 + findIndex([1, 2, 3]) etc.
  // keep adding, arr[0] is not equal to value we're looking for
  // return if isVal false, return 1
  // return if isVal
  // reach the base and get -1
  //
  //base case reach end of array return -1

  if(arr.length === 0) return -1;

  if(arr[0] === val) return 0;

  const subIndex = findIndex(arr.slice(1), val)

  if(subIndex !== -1){
    return subIndex + 1
  }

  return -1
}

export { findIndex };

/// [1, 2, 3]
// searching for 4
//[2, 3]
//[3]
//[]
//