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
const otpGeneration = Math.ceil( Math.random() * 10000)
const requestOTP = parseInt(prompt(`please enter the OTP provided -  ${otpGeneration}`))
console.log(otpGeneration)
const otpCheck = requestOTP === otpGeneration? alert("Successfully Authenticated") : alert("Unsuccessfull")

   



