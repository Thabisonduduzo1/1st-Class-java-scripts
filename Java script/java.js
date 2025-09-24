let myClass = 5
console.log( myClass)

const isAccepted = 15
const isRejected = 15


if( isAccepted =>15 ){console.log("The test is passed",isAccepted)} //if else

else{console.log("the test failed score is -",isAccepted)};


const age = 17;
const driverLicence = (age >=18)? "Eligible" : "Not Eligable" ;      //tanery operator
console.log(driverLicence);


//logical operator

let matric = "true";
let application ="False";

console.log( matric && application );  //and

console.log(matric|| application);      //or

console.log(!matric);            //not


//arrithmetic

let a =4;
let b = 5;

console.log( a+b);

// Template literals
const naam = "Thabiso";
const myCar =`${naam} stays is Taboti. ${naam} does not work. ${naam} studies fullstack dev.`;
console.log(myCar);


//Prompt and Alert

//const username = prompt("Please enter your username");
//console.log(username);
//alert(username);

// String and number conversion

const year = "2025";
const newYear = parseInt(year);
console.log(newYear);

//note prompts only capture values as string
//const firstYear = parseInt(prompt("enter the year of start"));
//console.log(firstYear);
//alert(firstYear);


//Testing

//const address = parseInt(prompt("please enter your addess number"))
//const addressCheck =  address>15? "Enter" : "Dont Enter"
//console.log(addressCheck)
//alert(addressCheck)


//OTP Example
/*const otpGeneration = Math.ceil( Math.random() * 10000)
const requestOTP = parseInt(prompt(`please enter the OTP provided -  ${otpGeneration}`))
console.log(otpGeneration)
const otpCheck = requestOTP === otpGeneration? alert("Successfully Authenticated") : alert("Unsuccessfull")
console.log(otpCheck)*/


//Questions On Conditional statenment (If Else and Else If)s

 

/*



5. Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0*/



//1. Write a program that determines whether a given number is positive or negative.

/*const number = parseInt(prompt("Enter any number"))
const numberCheck = number >= 0? alert("Positive Number") : alert("Negavite Number")
console.log(numberCheck)*/


//2. Write a program that checks if a number is even or odd.
/*const number1 = parseInt(prompt("enter an number"))
console.log(number1)
 if(number1 % 2 == 0) { alert("Number is Even")}
 else{ alert("Number is odd")}*/

 //4. Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

 const ageTicket = parseInt(prompt("Please enter your Age"))
 if( ageTicket <12) { alert("Ticket price is R5")}
 else if(ageTicket<18 && ageTicket>=12) {alert("Ticket price is R10")}
 else if(ageTicket<60 && ageTicket>=18) {alert("Ticket price is R20")}
  else if(ageTicket>=60) {alert("Ticket price is R15")}
  else{"Entered age is not valid"}


  //5. Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0*/




//function

const myName = () => {console.log("Thabiso")}
myName()

//function with parameter

const reusable = (name) => { console.log(name)}

reusable("Thabsio")
reusable("Ngcobo")



//function of addding numbers

const numberAdd = (n1,n2,n3) => {console.log(n1+n2+n3)}

numberAdd(2,3,4)
numberAdd(10,20,30)


//funtion to tell highest of two numbers 
//3. Write a program to determine the greater of two numbers.

const highNum = (n1,n2) => {console.log( n1>n2? "N1 is greater":"N2 is greater" )}
highNum(15,4)






   



