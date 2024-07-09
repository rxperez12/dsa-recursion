/** find: return t/f is val is in arr. */

function find(arr: number[], val: number): boolean {

  // base case if you get to the end of the array
  if(arr.length <= 0) return false;

  const isVal = arr[0] === val

  const restNums = arr.slice(1)

  return isVal || find(restNums, val)
}

export { find };