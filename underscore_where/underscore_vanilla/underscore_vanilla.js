var _ = require('underscore')._;

const testArray = [{
  randomid: "KqOZCTZBts",
  tofind: false
}, {
  randomid: "0DVVuahGdr",
  tofind: true
}, {
  randomid: "PoeKJANDmn",
  tofind: false
}, {
  randomid: "6DAPnPUk7k",
  tofind: true
}, {
  randomid: "CpHdnm6wOO",
  tofind: false
}]

console.log("underscoreTest", _.where(testArray, { tofind: true }))
