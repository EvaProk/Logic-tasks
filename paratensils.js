var isValid = function(s) {
  // const parObj= {
  //     "(" : ")",
  //     "{" : "}",
  //     "[" : "]"     
  // }
  // for(let i = 0; i <= s.length; i++){
  //     if( i === "(" && i[i+1] === parObj["("] || i === "{" && i+1 === parObj["{"] ){
  //         return true;
  //     };}

  
    const parObj={
        ")" : "(",
        "}" : "{",
        "]" : "["     
    }
    
   const arr =[];
    for(let i of s){
        //checks if the character is an opening bracket, not a closing one . Adds and opening bracket to the array
        if ( !parObj[i] ){ // 
           arr.push(i);
        }
        // if the bracket is the closing bracket compares it to the last bracket in the array. If they don't match , then brackets don't match
        else if(arr.pop() !== parObj[i]) {
            return false
        }
    }
    //retutn true if the arr length is 0 (means all opening brackets found a closing bracket)
    return arr.length === 0
};