var questionBox = document.getElementById("#questionbox");
var answerBox = document.getElementsByClassName(".buttons");

// create an object Data Type with questions,options, and answers 
var questions = [
    {questionNew: "typeOf is a ?", options: ["method", "type","property", "string"], answer: "method"},
    {quesitonNew: "Globally scoped varibales are ______ of the function?", options: ["dependent", "inside", "outside", "independent"], answer: "outside"},
    {questionNew: "where should you include your css link?", options:["at the end of your body section", "in the footer tag","in the head tag", "before the html tag"], answer:"in the head tag"},
    {questionNew: "What is the termimal command to merge a  repository from a local folder to the master folder?", options: ["git add .", "git commit -m", "git push", "git pull"], answer: "git pull"},
    {quesitonNew: "Which of these is not a JavaScript Data Type?", options:["string", "boolean", "container", "array"], answer:"container"}
];
// Create a number Data Type and set it equal to the variable "score". We start the game with a score of 0.
var score = 0;
//create variables
var answer = (questions[i].answers);
var userAnswer = (questions[i].options);
//display the object on the HTML page 
document.getElementById("#questionbox")=askQuestion(questions[i]);
document.getElementsByClassName(".buttons");
document.getElementsByClassName("#progress");

// create a function that runs through the question rounds 
function askQuestion(questionNew,options,answer){
    return (questionNew,options,answer);
}
//execute the function
askQuestion();

//create a function that calculates user score 
function userScore(){
// Loop over every question object
for (var i = 0; i < questions.length; i++) {
    // Compare answers. if the answer equals the index of the variable add 1 to score 
    if (answer === userAnswer){
      // Increase score
      score++; 
      console.log(score);
    }  
  }
}
// execute the function
userScore();

    // show question on the page associated with the #questions

    // show the questions on the buttons

// if user clicks button then allows the question to go to the next index

    // record users answers and commpare them to the correct answer; boolean 

    // update the users score for loop
   
    //timer if the user doesn't complete in given time use "break" and go to last page that shows score 

    //show user how many questions they have left with #progress 
    ("You have " + askQuestion() + "/" + questions.length)=document.getElementById("#progress")

    //show user final score by concatenating JavaScript string operators  
    ("You got " + userScore() + "/" + questions.length)