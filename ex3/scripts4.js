//print the biggest number in the arrey
let ary = [];
ary[0]= window.prompt("enter a number");
ary[1]= window.prompt("enter a number");
ary[2]= window.prompt("enter a number");
ary[3]= window.prompt("enter a number");
ary[4]= window.prompt("enter a number");
let temp = ary[0];
if(temp < ary[1])
{
    temp = ary[1];
}
else if(temp < ary[2])
{
    temp = ary[2];
}
else if(temp < ary[3])
{
    temp = ary[3];
}
else if(temp < ary[4])
{
    temp = ary[4];
}
document.write(temp + ' is the biggest number');