/*
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
*/
const hour = new Date().getHours();

if (hour < 2 ){
  console.log("Good day!");
} else {
  console.log("Good evening!");
}