//print which one is the bigger number
let num1 = window.prompt("choose a number: ");
let num2 = window.prompt("choose another number: ");
document.write("the answer to the first exercise is: ");
if (num1 > num2)
{
    document.write(num1 + " is the bigger number");
}
else if (num2 == num1)
{
    document.write("both numbers are the same");
}
else
{
    document.write(num2 + " is the bigger number");   
}
