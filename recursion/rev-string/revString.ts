/** revString: return a copy of a string, but in reverse. */

function revString(str: string): string {

  /**
   * take a string and then reverse it
   * base case = str.length === 0
   *
   * we want to create an answer with the last letter in the string
   * we want to re-run the function with the new string without last letter
   *
   * APE
   * E + revString(str)=PA
   * EP + revString(str)=A
   * EPA + revString(str)=""
   */

  if (str.length === 0){
    return ""
  }

  const lastChar = str.slice(str.length-1)
  const choppedStr = str.slice(0, str.length-1)
  let newStr =  lastChar + revString(choppedStr)

  return newStr;
}

export { revString };