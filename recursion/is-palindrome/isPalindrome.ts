/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {
  /**
   * is the word spelled the same forward and backward
   *
   * base case: str.length <=1
   * take first and last letter, check if same
   * if same, cut them off and pass the remaining to the function
   * if not same, return false
   * return true by default
   */


  if (str.length <= 1) return true;

  const lastIdx = str.length-1
  let palindromeCheck = true

  if (str[0] !== str[lastIdx]){
    palindromeCheck = false;
  }

  const newStr = str.slice(1, lastIdx)

  return palindromeCheck? isPalindrome(newStr) : false

}

export { isPalindrome };