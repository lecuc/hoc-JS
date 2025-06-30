
const d = new Date(); //date chứa ngày h hiên tại
console.log(d);

if (d.getHours() < 2) { // lấy giờ hiện tại 
  console.log("Good day!");
} else {
  console.log("Good evening!");
}