import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {

  /**
   * { val: "apple" , next: { val: "orange", next: { val: "cherry", next: null } } }
   *
   * base case: if next === null
   * regular case:
   *  - check the length of my val
   *  - compare it to the length of my next's val
   *  - check function scope counter and return???
   * can we update a counter in the function scope??
   */

  if (words === null) return 0;

  const currentValLength = words.val.length
  const maxLength = longest(words.next)

  return (currentValLength > maxLength)? currentValLength : maxLength
}

export { longest };
