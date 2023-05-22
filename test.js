const prompt = require("prompt-sync")({ sigint: true});

//EXERCISE 1 -- SUM OF TWO NUMBERS
/*a = parseInt(prompt("What is the first number? "));
b = parseInt(prompt("What is the second number? "));
console.log("the sum of the first and second number is " + (a+b))*/


//EXERCISE 2 -- DIVISION OF TWO NUMBERS
/*a = parseInt(prompt("What is the first number? "));
b = parseInt(prompt("What is the second number? "));
console.log("the division of the first number by the second  is " + (a/b))*/


//EXERCISE 3 -- MODULO OF TWO NUMBERS
/*a = parseInt(prompt("What is the first number? "));
b = parseInt(prompt("What is the second number? "));
console.log("the modulo of the first number by the second  is " + (a%b))*/


//EXERCISE 4 -- CONCATENATION
/*a = (prompt("What is your first sentence? "));
b = (prompt("What is your second sentence? "));
console.log(a + " " + b)*/


//EXERCISE 5 -- VAT
/*a = parseInt(prompt("Price? (VAT excl.) "));
console.log("The total price (VAT incl) is: " + (a + (a*21/100)))*/

//EXERCISE 6 -- SURFACE OF A CIRCLE CALCULATOR
/*console.log("Let's calculate the surface of a circle.");
a = parseInt((prompt("What is the radius? ")));
console.log("With a radius of " + a + ", the surface of the circle will be " + ((Math.pow(a,2)) * Math.PI))*/


//EXERCISE 7 -- TIME IN SECOND 
/*console.log("Let's change the time of the day into a number of second. What time is it? (in hours, minutes, seconds)");
h = parseInt((prompt("It is currently: (hour)")));
m = parseInt((prompt("(minutes)")));
s = parseInt((prompt("(seconds)")));

let hs = h*60*60
let ms = m*60

console.log("Since midnight, " + (hs+ms+s) + " seconds have passed")*/


// __________CONDITIONS__________

//EXERCISE 1 -- CINEMA TICKETS
/*const full = 10
const redu = 8
reduction = (prompt("Do you have a reduction? Please type Y for yes and N for no "));
if (reduction==="Y") {
    console.log("The price of your ticket is " + redu + "€")
} else if (reduction==="N") {
    console.log("The price of your ticket is " + full + "€")
} else {
    console.log("Please answer the question correctly")
}*/

//EXERCISE 2 -- MAXIMUM
/*num1 = parseInt((prompt("First number? : ")));
num2 = parseInt((prompt("Second number? : ")));
num3 = parseInt((prompt("Third number? : ")));
if (num1 > num2 && num1 > num3) {
    console.log("The maximum is " + num1)
} else if (num2 > num1 && num2 > num3) {
    console.log("The maximum is " + num2)
} else if (num3>num1 && num3>num2) {
    console.log("The maximum is " + num3)
} else {
    console.log("Error")
}*/

//EXERCISE 3 -- DICE
/*let dice1=Math.floor(Math.random() * 6 +1); 
let dice2=Math.floor(Math.random() * 6 +1); 
let dice3=Math.floor(Math.random() * 6 +1);

console.log("The three dice are " + dice1 + ", " + dice2 + " and " + dice3 )

if (dice1 == dice2 && dice1 == dice3) {
    console.log("The three are identical")
} else if (dice1 == dice2 || dice1 == dice3 || dice2 == dice3) {
    console.log("Two dice are identical")
} else {
    console.log("The dice are not identical")
}*/

//EXERCISE 4 -- NAME OF DAYS
/*num = parseInt((prompt("please give a number between 1 & 7 ")));

if (num<=0 || num>7) {
    console.log("Number has to be between 1 & 7")
} else if (num==1) {
    console.log("The corresponding day is Monday")
} else if (num==2) {
    console.log("The corresponding day is Tuesday")
} else if (num==3) {
    console.log("The corresponding day is Wednesday")
} else if (num==4) {
    console.log("The corresponding day is Thursday")
} else if (num==5) {
    console.log("The corresponding day is Friday")
 }else if (num==6) {
    console.log("The corresponding day is Saturday")
} else if (num==7) {
    console.log("The corresponding day is Sunday")
}*/

//EXERCISE 5 - PRINT SHOP
/*const firstprice = 0.12;
const secondprice = 0.11;
const thirdprice = 0.10;

num = parseInt((prompt("please give a number of copies ")));
if (num<0) {
    console.log("Number has to be above 0")
} else if (num<=10) {
    console.log("Total price will be " + (num*firstprice) + "€")
} else if (num<=20 && num>10) {
    console.log("Total price will be " + (10*firstprice + (num-10)*secondprice) + "€")
} else if (num>20) {
    console.log("Total price will be " + (10*firstprice + 10*secondprice + (num-20)*thirdprice + "€"))
}*/


// __________LOOPS__________

num = parseInt((prompt("please give a number: ")));

/*console.log("Numbers between 1 and your number are :")
for (let i=2; i<num; i++) {
    console.log(i)
}*/

/*console.log("Numbers between 1 and your number are in descending order:")
for (let i=num-1; i>1; i--) {
    console.log(i)
}*/

/*console.log("Numbers from -*your number* to your number are:")
for (let i=-(num-1); i<num; i++) {
    console.log(i)
}*/

console.log("Odd numbers between 1 and your number are:")
for (let i=3; i<num; i=i+2) {
    console.log(i)
}