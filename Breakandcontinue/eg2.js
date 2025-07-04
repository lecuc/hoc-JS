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
eg2();