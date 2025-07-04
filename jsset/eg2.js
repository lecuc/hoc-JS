function egset() {
  const numbers = [1, 2, 3, 2, 4, 1, 5, 3];
  const uniqueSet = new Set(numbers); // loại trùng

  uniqueSet.delete(2);
  uniqueSet.delete(1);

  let A= "";
  for (let x of uniqueSet) {
    A += x + " ";
  }
return A;
}
let result = egset();  // Gọi hàm và lấy kết quả
//console.log(result);   // In kết quả ra màn hình

function egset1() {
  const numbers1 = [1, 2, 6, 4, 1, 5, 3];
  const uniqueSet1 = new Set(numbers1); // loại trùng
  uniqueSet1.delete(1);

  let B = "";
  for (let x of uniqueSet1) {
    B += x + " ";
  }
  return B;
}
let result1 = egset1();
//console.log(result1);
function gopkq(){
  const C = result1 +result;
  return C;
}
let result3 = gopkq();  // Gọi hàm và lấy kết quả
console.log(result3);   // In kết quả ra màn hình



//note:Nếu muốn dùng Set logic (union, intersection, difference...), hãy để các hàm return Set và truyền tham số rõ ràng.