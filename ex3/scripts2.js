//print if the sum of three numbers is positive or negetive

let var1 = window.prompt("choose a number: ");
let var2 = window.prompt("choose another number: ");
let var3 = window.prompt("choose another number: ");
document.write("    the answer to the second exercise is: ");
let sum = var1 + var2 + var3;
if (sum > 0)
{
    document.write("the sum is positive + "); 
}
else if (sum == 0)
{
    document.write("the sum is zero"); 
}
else 
{
    document.write("the sum is negtive - "); 
}