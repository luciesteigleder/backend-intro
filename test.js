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
} else if (num<=30 && num>10) {
    console.log("Total price will be " + (10*firstprice + (num-20)*secondprice) + "€")
} else if (num>30) {
    console.log("Total price will be " + (10*firstprice + 20*secondprice + (num-30)*thirdprice + "€"))
}*/


// __________LOOPS__________

//num = parseInt((prompt("please give a number: ")));

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

/*console.log("Odd numbers between 1 and your number are:")
for (let i=3; i<num; i=i+2) {
    console.log(i)
}*/

//perfect number
/*num = parseInt((prompt("please give a number: ")));
let sumDiv = 0
//numDiv = parseInt((prompt("please give a diviser: ")));
for (i=1; i<num; i++) {
    if (num%i==0) {
    sumDiv= sumDiv+i
    //console.log( i + " + divisor")
} else {
    //console.log( i + " + not divisor")
}}
console.log(sumDiv)

if (sumDiv==num) {
    console.log("perfect number")
} else {
    console.log("not perfect number")
}*/


// __________ARRAYS__________


//Add values to an array
/*let add_value = (prompt("What would you want to add to the array? "));
const array1 = new Array()
array1.push(add_value)

while (add_value!==null) {
    console.log(array1)
    add_value = (prompt("What would you want to add to the array? "));
    array1.push(add_value)
}*/

//Maximum of an array
/*let array2 = [(Math.floor(Math.random()*100)),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
console.log(array2)
console.log("the maximum number is " + Math.max(array2[0],array2[1],array2[2],array2[3],array2[4],))*/

//Minimim of an array
/*let array3 = [(Math.floor(Math.random()*100)),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
console.log(array3)
console.log("the minimum number is " + Math.min(array3[0],array3[1],array3[2],array3[3],array3[4],))*/

//Ascending array
/*let array4 = [(Math.floor(Math.random()*100)),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
console.log(array4)
let score = 0
let ascending = false
for (i=0; i<(array4.length)-1; i++) {
    if (array4[i]<array4[i+1]) {
        score++
    } else {
        score
    }
}
if (score==4) {
    ascending=true
} else {
    ascending=false
}

console.log("the final score is " + score + ", the answer is " + ascending)*/

//this code gives us a true or a false for each comparison
/*for (i=0; i<(array4.length)-1; i++) {
    if (array4[i]<array4[i+1]) {
        console.log("true")
    } else {
        console.log("false")
    }
}*/


// __________FUNCTIONS__________

//VAT 
/*price = parseInt((prompt("What is the price (VAT-excl.) ? ")));

function vat(price) {
    return (price + (price*21/100))
}
console.log(vat(price))*/

//HOW TO CREATE A RANDOM ARRAY OF RANDOM DICE THROWS
/*let diceLength=Math.floor(Math.random() * 10 +1);
let arrayDice = []

for (i=0; i<diceLength; i++) {
    arrayDice.push(Math.floor(Math.random() * 6 +1))
}*/

// Identical dice
/*let dice1=Math.floor(Math.random() * 6 +1); 
let dice2=Math.floor(Math.random() * 6 +1); 
let dice3=Math.floor(Math.random() * 6 +1);

console.log("The three dice are " + dice1 + ", " + dice2 + " and " + dice3 )

const ident = (a, b, c) => {
    for (i=0; i<3; i++)
    if (dice1 == dice2 && dice1 == dice3) {
        return "The three are identical"
    } else if (dice1 == dice2 || dice1 == dice3 || dice2 == dice3) {
        return "Two are identical"
    } else {
        return "They are not identical"
    }
}
console.log(ident(dice1, dice2, dice3))*/


// EXERCISE LOOP THROW DICE
/*let numthrow = parseInt((prompt("how many times do you want to throw the dice? ")));
let impNumber = parseInt((prompt("Which number (from 1 to 6) do you want to focus on? ")));
let NumImpNum = 0

let arrayDice2 = []
for (i=0; i<numthrow; i++) {
    arrayDice2.push(Math.floor(Math.random() * 6 +1))
}
console.log("Your result is " + arrayDice2)

const howManyImpNumber = (numthrow, impNumber) => {
    for (i=0; i<arrayDice2.length; i++) {
        if (arrayDice2[i] == impNumber) {
            NumImpNum++
        }
    }
    return NumImpNum
}

console.log(howManyImpNumber(numthrow, impNumber))*/

//PERFECT NUMBER IN FUNCTION

/*num = parseInt((prompt("please give a number: ")));
let sumDiv = 0

const isPerfectNumber = (num) => {
    for (i=1; i<num; i++) {
        if (num%i==0) {
        sumDiv= sumDiv+i
        }
    }
    if (sumDiv==num) {
        return "Perfect Number"
    } else {
        return "not perfect number"
    }
}

console.log(isPerfectNumber(num))*/

//ORDERED ARRAY
/*let array4 = [(Math.floor(Math.random()*100)),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100)]

console.log(array4)
const isSmaller = (currentValue, index, array) => {
    if(index === array.length - 1){
        return true
    }else{
       return currentValue < array[index + 1];
    }
}

console.log(array4.every(isSmaller));*/




// __________STRINGS__________

//EXERCISE 1: CONCATENATION
//Two strings that are put together in one string

/*string1 = prompt("What do you want to write? ");
string2 = prompt("What else do you want to write? ");

console.log(string1 +" "+ string2)*/

//EXERCISE 2: LOWERCASE
/*string3 = prompt("What do you want to write? (In uppercase) ");
console.log(string3.toLowerCase())*/

//EXERCISE 3: UPPERCASE
/*string4 = prompt("What do you want to write? ");
const changeToUpper = (string) => {
    return string.toUpperCase()
}

console.log(changeToUpper(string4))*/

//EXERCISE 4: CHANGE OF NAME FORMAT
/*let name = prompt("What is your name? (in the John, Doe format)")

let name2Array = name.split(", ")
console.log(name2Array)
let name2 = name2Array.reverse().join(" ")
console.log(name2)*/

//EXERCISE 5: NO SPACE
let string5 = "Hello, the sky is blue and the sun is shining today"

const toNoSpace = (string) => {
    string = string.split(" ").join("")
    return string
}
/*let string5Array = string5.split (" ")
let string5NoSpace = string5Array.join("")*/
console.log(toNoSpace(string5))
