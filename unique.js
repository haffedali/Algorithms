function uniqueInOrder(iterable){
  var answer = []  
  for (let i=0;i<iterable.length;i++){
      var char = iterable[i]
      if (!answer[answer.length-1]){
          answer.push(char)
      }
      if (answer[answer.length -1] !== char){
          answer.push(char)
      }  
  }
  return answer
}

uniqueInOrder("AAABBasssssssBSSSIIffffwwICOdaSSSK")