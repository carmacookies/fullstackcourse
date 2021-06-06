//print the arrey in accending order

let ary = [];
let temp;
ary[0]= window.prompt("enter a number");
ary[1]= window.prompt("enter a number");
ary[2]= window.prompt("enter a number");
if(ary[0] > ary[1])
{
    temp = ary[0];
    ary[0] = ary[1];
    ary[1] = temp;
    if (ary[1] >ary[2])
    {
        temp = ary[1];
        ary[1] = ary[2];
        ary[2] = temp;
    }
}
else if (ary[1] > ary[2])
{
    temp = ary[1];
    ary[1] = ary[2];
    ary[2] = temp;
}
document.write(ary);