const myNumbers = {};

// Tạo Iterable đúng chuẩn
myNumbers[Symbol.iterator] = function () {
  let n = 0;
  return {
  next() {
    if (n >= 100) {
      console.log("→ STOP: done = true");
      return { done: true };
    }

    n += 10;
    console.log("→ STEP: value =", n);
    return { value: n, done: false };
  }
};
};
// Lặp qua và in ra tất cả số (bao gồm 100)
let text = "";
for (const num of myNumbers) {
  text += num + "\n";
}

console.log(text);

/* các bước chạy ngầm
const iterator = myNumbers[Symbol.iterator]();
let result = iterator.next();

while (!result.done) {
  const value = result.value;
  // Gán vào biến `num` trong for-of
  text += value + "\n";

  // Gọi next lần kế tiếp
  result = iterator.next();
}
  */