var userInput = prompt("Enter a number: ");
var userInput2 = prompt("Enter a second number: ");
var userInput3 = prompt("Enter a third number: ");

var sum = parseInt(userInput) + parseInt(userInput2) + parseInt(userInput3);

if (sum > 21) {
    console.log("Bust");
}
else if (sum == 21){
    console.log("BlackJack!");
}
else if (sum < 21) {
    console.log(sum);
}



// grade
var gradePrompt = prompt("Enter your grade: ");

if (gradePrompt >= 90) {
    console.log("A");
}
else if (gradePrompt >=80){
    console.log("B");
}
else if (gradePrompt >=70) {
    console.log("C");
}
else if (gradePrompt >=60) {
    console.log("D");
}
else if (gradePrompt <=59)  {
    console.log("F");
}
 else if (gradePrompt > 100) {
     console.log("Error!")
}




//age
var userAge = prompt("What is your age: ");

if (userAge > 0){
    console.log("Real Age!")
}

else if (userAge > 125) {
    console.log("Not a real age!")
}

else if (userAge < 0) {
    console.log("Not a real age!")
}