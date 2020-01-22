const testVar = {}

function testFunc() {
  return "hi"
}

// const record = [
//   { year: "2018", result: "N/A"},
//   { year: "2017", result: "L"},
//   { year: "2016", result: "W"},
//   { year: "2015", result: "N/A"}
// ]

superbowlWin = (record) => {
  let result = record.find(record => record.result === "W")
  return !!result ? result.year : undefined
}