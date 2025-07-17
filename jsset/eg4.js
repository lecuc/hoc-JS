function egset_mang() {
  let traiCay = ["tao", "chuoi", "xoai", "tao"];
  let traiCay_set = new Set(traiCay); // loại trùng

  traiCay_set.delete("tao"); // xóa "tao"
  
  // Chuyển Set thành mảng
  let traiCay_array = Array.from(traiCay_set);

  // Thêm "le" vào vị trí 0
  traiCay_array.unshift("le");

  // Tạo chuỗi để in ra
  let text = "";
  for (let x of traiCay_array) {
    text += x + " ";
  }

  console.log(text);
}

egset_mang();