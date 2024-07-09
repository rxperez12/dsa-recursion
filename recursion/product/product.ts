import { LLNodeNum } from "../common/ll";

/** product: calculate the product of a linked list of numbers. */

function product(nums: LLNodeNum | null): number {
  // Base case
  // node.next === null
  // if we reach the end of list, return node.val
  if(nums === null) return 1;

  //take first number of list and call rest of list with product funciton
  return nums.val * product(nums.next)
}

export { product };