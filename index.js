function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split('').reverse().join('')
}

/* 
  Add your pseudocode here
  //return statement should be a true or false expression
  // word is equal to word => split into array => reversed => joined back into a string
*/

/*
  Add written explanation of your solution here
  See pseudocode above
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
