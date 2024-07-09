/** everyOther: return a string with every other letter. */

function everyOther(str: string): string {

  if (str.length <= 0) return "";

  let currentChar = str.slice(0,1)
  const newStr = str.slice(2)
  return currentChar += everyOther(newStr)
}

export { everyOther };

// function everyOther2(str: string, sofar: string): string {
//   let resultStr = ""

//   if (str.length <= 0) return "";

//   let currentChar = str.slice(0,1)
//   const newStr = str.slice(2)

//   resultStr += everyOther(newStr)

//   return currentChar
// }


// function sumNums(nums: number[]){

//   if (nums.length === 0) return 0

//   const newNums = nums.slice(1)

//   return nums[0] + sumNums(newNums)

// }

// function sumNums2(nums: number[], soFar: number = 0){
//   if (nums.length === 0){
//     return soFar
//   }

//   return sumNums2(nums.slice(1), nums[0] + soFar)

// }
