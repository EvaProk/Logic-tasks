// A phrase is a palindrome if, after converting all uppercase letters into 
// lowercase letters and removing all non-alphanumeric characters, it reads 
// the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


var isPalindrome = function(s) {
  let res =s.replace(/[^0-9a-z]/gi, '').split(" ").join("").toLowerCase();
  
  let rev = res.split("").reverse().join("")
  if(res !== rev){
      return false;    
  }
  
   return true;   
};