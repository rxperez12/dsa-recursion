/** everyOther: return a string with every other letter. */

function everyOther(str: string): string {

  if (str.length <= 0) return "";

  let currentChar = str.slice(0,1)
  const newStr = str.slice(2)
  return currentChar += everyOther(newStr)
}

export { everyOther };