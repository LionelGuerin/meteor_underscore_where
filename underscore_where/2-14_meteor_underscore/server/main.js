import { Meteor } from 'meteor/meteor';
import { _ } from "meteor/underscore";

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

Meteor.methods({
  underscoreTest: function() {
    console.log("underscoreTest", _.where(testArray, { tofind: true }))
  }
})
