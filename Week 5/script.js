/*let myName = "Erin";
console.log("hello", myName)*/

//let myName = prompt("What is your name, friend?")
//console.log("hello", myName, "my dear friend")

// let myName = "Erin";
// let mySirname = "Krejany";

// let myFullName =`my full name is ${myName} ${mySirname}`
// console.log(myFullName);

//f]let temp = prompt ("How we feelin today broski?");

// if (temp>20 && temp<30)
// {
//     console.log("ahhhhh feels nice");
// }
// else if (temp>=10 && temp<20)
// {
//     console.log("it feels cold fam");
// }
// else if (temp>= 30)
// {
//     console.log("im boiling rn fuckin save me");
// }
// else if (temp <10)
// {
//     console.log ("im freezing my tits off bro fuck you");
// }

function checkWeather(){
 console.log("I am just being clicked");
let myInput = document.querySelector("#myTemp");
let temp = myInput.value;
console.log("current temp is", temp);
if (temp> 20 && temp<30)
 {
     console.log("ahhh feels nice"); }
 else if (temp>= 10 && temp<20)
 {
     console.log("it feels cold fam");
 }
else if (temp>= 30)
{
     console.log("its boiling bro my ass cheeks are sweating");
}
else if (temp <10)
 {
     console.log ("its freezing fuck you");
}
}