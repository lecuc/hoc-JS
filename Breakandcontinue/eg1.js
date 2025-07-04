let i = 0;
function eg1(){
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  console.log(i);
}
}
eg1();