

/* In this example we will use the same setup as before.. but just use it over and over. 
Try for yourself .. create a new prompt assigned to a variable 
and display it on the html page with agetElementbyID   */


const d = new Date();
d.setDate(0);
document.getElementById("Date").innerHTML = d;

document.getElementById("myname").innerHTML = 'Myoungju Cha';


var questionOne = prompt("What is your name?");
document.getElementById("blankOne").innerHTML = questionOne;

var questionOne = prompt("What is your favorite thing?");
document.getElementById("blankTwo").innerHTML = questionOne;


/* for the final version we will add a string to the varable for the printout */

var questionOne = prompt("tell me who your favorite member of your family ");
document.getElementById("blankThree").innerHTML = 'oops!' + questionOne ;


var questionOne = prompt("adorable! please tell me the moment you never want to remember in your life ");
document.getElementById("blankFour").innerHTML = questionOne + '!!!!!!!!' ;


