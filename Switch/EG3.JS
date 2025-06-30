
let time;
let hour =  new Date().getHours(); //new Date().getHours()	Lấy giờ hiện tại (0 → 23)
   console.log(hour );
switch (true) //Cho phép kiểm tra điều kiện theo range giờ
{
    case ( hour >=5 && hour <12):
        time = "Good morning";
    break;
    case (hour >=12 && hour <18):
        time = " Good afternoon";
    break;
    default:
        time = " Good evening";
   }
   console.log( time);