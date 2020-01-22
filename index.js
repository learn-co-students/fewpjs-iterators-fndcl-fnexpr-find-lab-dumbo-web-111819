const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = (recordArr) => {
  // console.log(record)
  let result = recordArr.find((record) =>
   record.result === "W"
 )
 if (result){

   return result.year
 } else {
   return undefined
 }

}
