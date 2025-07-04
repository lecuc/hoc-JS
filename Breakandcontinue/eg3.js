function eg2(){
    let text = 1;
    do {
        if (text === 3) {
            text++; // vẫn cần tăng để tránh vòng lặp vô hạn.  Phải đảm bảo phần text++ không bị "nhảy qua" do continue, 
            // và bạn cần đặt continue trước text++ nếu muốn bỏ qua console.log tại text === 3, hoặc dùng khối if hợp lý hơn.
            continue;
        }
        console.log("Giá trị text là:", text);
        text++;
    } while(text < 7);
}

eg2();

/*so sánh với vidu 2
let text = 1;
function eg2(){
    do {
        console.log("Giá trị text là:", text);
    text++;
    if (text ===3){
    break;
     //if sài continue; //Câu lệnh continue nằm trong do...while, nhưng không có khối block bao trọn vòng lặp, nên vòng
    //  lặp sẽ chạy mãi mãi (vòng lặp vô hạn), vì continue bỏ qua lần kiểm tra điều kiện while(text < 15).
//continue sẽ bỏ qua tất cả phần còn lại của vòng lặp, bao gồm luôn cả điều kiện while trong do...while.
    }
    }
    while(text<15);

}
eg2();*/