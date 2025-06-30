
let time;
let hour =  new Date().getHours();
   console.log(hour );
switch (hour)
{
    case 0:
        time = "Good morning";
    break;
    case 1:
        time = " Good day"
    break;
    default:
        time = " Good evening"
   }
   console.log( time);