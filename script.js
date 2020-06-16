//VARIABLES 
var questionBoxEl = document.querySelector("#questionbox");
var buttonsBtn = document.querySelector(".buttons");
var progressEl = document.querySelector("#progress");
var ans0 =document.querySelector("#btn0")
var ans1 =document.querySelector("#btn1")
var ans2 =document.querySelector("#btn2")
var ans3 =document.querySelector("#btn3")
var countDownEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
// var welcomeStatement = document.querySelector("");
// var endOfQuiz = document.querySelector("");

// create an object Data Type with questions,options, and answers 
var questions = [
    {questionNew: "typeOf is a ?", options: ["method", "type","property", "string"], answer: "method"},
    {questionNew: "globally scoped varibales are located where in relation to the function?", options: ["dependent", "inside", "outside", "independent"], answer: "outside"},
    {questionNew: "where should you include your css link?", options:["at the end of your body section", "in the footer tag","in the head tag", "before the html tag"], answer:"in the head tag"},
    {questionNew: "what is the termimal command to merge a  repository from a local folder to the master folder?", options: ["git add .", "git commit -m", "git push", "git pull"], answer: "git pull"},
    {questionNew: "Which of these is not a JavaScript Data Type?", options:["string", "boolean", "container", "array"], answer:"container"}
];

// Create a number Data Type and set it equal to the variable "score". We start the game with a score of 0.
var score = 0;
var index = 0;

//FUNCTIONS 
// Start with a welcome function IF NOT WORKING COMMENT OUT 
// function welcome () {
//   questionBoxEl.textContent = ("Welcome to the coding quiz! You have 60 seconds to complete this quiz. Click 'start' to begin");
//   document.querySelector(".buttons").style.display = "none";
//   document.querySelector("#progress").style.display ="none";
// }

//create function that starts timer on start button click 
function runTimer() {
  var timeLeft = 10;

  var timeInterval = setInterval(function() {
    countDownEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      countDownEl.textContent = "";
      document.querySelector("#timer").style.display = "none";
      endGame();
      clearInterval(timeInterval);
    }
    else{
      askQuestion();
      showProgress();
    }

  }, 1000);
  
}

// create a function that runs through the questions in the object "questions" 
 function askQuestion(questionNew,options,answer){
    //create element
    questionBoxEl.textContent=questions[index].questionNew;
    //buttonsBtn.textContent=questions.options[i];
    ans0.textContent=questions[index].options[0];
    ans1.textContent=questions[index].options[1];
    ans2.textContent=questions[index].options[2];
    ans3.textContent=questions[index].options[3];

    document.querySelector("#start").style.display = "none";
    
  
}


//create a function that cycles through the questions when a user clicks the answer choice
function userAnswer(event){
  index++
  if (index === uestion.length){
    endGame();
  }
  else{
    askQuestion();
  }
}

function showProgress(){
  
  progressEl.textContent = (index + " / " + questions.length + " completed");
}
//execute the function
showProgress();

//IF NOT WORKING COMMENT OUT 
// function userScore(){
//   var userChoice = value of click 
//   if(questions[index].answer === userChoice){
//     score +++
//   }
// }

function endGame(){
  
  clearInterval(timeInterval);
  //show user score
  questionBoxEl.textContent = ("Congratulations, you got " + userChoice + " right!")
  //allow user to record score 
  //remove excess components 
  document.querySelector("#progress").style.display = "none";
  document.querySelector(".buttons").style.display = "none";

}





//show user final score by concatenating JavaScript string operators  
// ("You got " + userScore() + "/" + questions.length)

//display the new question on the HTML page 

startBtn.addEventListener("click", runTimer);
ans0.addEventListener("click", userAnswer);
ans1.addEventListener("click", userAnswer);
ans2.addEventListener("click", userAnswer);
ans3.addEventListener("click", userAnswer);

// userAnswer.addEventListener("click", userScore());







