function isPalindrome(string) {
  // Start coding here
  let reversed = string
  reversed = reversed.split('')
  reversed = reversed.reverse()
  reversed = reversed.join('')
  return string == reversed
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false
