function egset() {
  const numbers = [1, 2, 3, 2, 4, 1, 5, 3];
  const uniqueSet = new Set(numbers); // loại trùng

  uniqueSet.delete(2);
  uniqueSet.delete(1);

  let text = "";
  for (let x of uniqueSet) {
    text += x + " ";
  }

  console.log(text);
}

egset();