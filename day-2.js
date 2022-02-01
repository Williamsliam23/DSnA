/* 1784. Check if Binary String Has at Most One Segment of Ones
 * @param {string} s
 * @return {boolean}
 */
 var checkOnesSegment = function(s) {
  if(s.length <= 2){return true}
  let continuous = 1
  for(let i = 1; i < s.length; i++){
      if(s[i] === "1" && continuous === 0){
          return false;
      }else if(s[i] === "0"){
          continuous = 0;
      }
  }
  return true
};

