/*if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
  */

 const time = new Date().getHours();

if (time < 20) {
console.log("Good morning");
} else if (time < 12) {
console.log( "Good day");
} else {
  console.log("Good evening");
}