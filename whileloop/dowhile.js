
    function dowhile() {
  let i = 0;
  do {
    console.log("Giá trị i là:", i);
    i++;
  } while (i <= 0);
  return i; // Trả về giá trị cuối cùng của i
}

const result = dowhile();

if (result !== 0) {
  console.log("Không có giá trị hợp lệ");
} else {
  console.log("Đã hoàn thành vòng lặp với i =", result);
}