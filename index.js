const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  //array of objects
  let result=array.find(element=>element.result==="W")
  if(result){
    return result.year
  }
  else
  return undefined

}
