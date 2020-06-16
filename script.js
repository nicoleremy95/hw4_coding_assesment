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
var highScoreEl = document.querySelector("#highscore");
var recordScoreCard = document.querySelector(".recordscorecard");
var firstNameInput = document.querySelector("#first-name");
var recordScoreBtn = document.querySelector("#recordscorebutton");
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
// create a number Data Type and set it equal to teh varibale "index". We start the game with question index of 0.
var index = 0;
var timeLeft = 10;

//FUNCTIONS 
// Start with a welcome function IF NOT WORKING COMMENT OUT 
function welcome () {
  questionBoxEl.textContent = ("Welcome to the coding quiz! You have 60 seconds to complete this quiz. Click 'start' to begin");
  document.querySelector(".buttons").style.display = "none";
  document.querySelector("#progress").style.display ="none";
  document.querySelector(".recordscorecard").style.display = "none";
  document.querySelector("#start").style.display = "block";
}
welcome();

//create function that starts timer on start button click 
function runTimer() {
  // var timeLeft = 10;

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
    //create elements
    questionBoxEl.textContent=questions[index].questionNew;
    ans0.textContent=questions[index].options[0];
    ans1.textContent=questions[index].options[1];
    ans2.textContent=questions[index].options[2];
    ans3.textContent=questions[index].options[3];

    document.querySelector("#start").style.display = "none";
    document.querySelector(".recordscorecard").style.display = "none";
    document.querySelector(".buttons").style.display = "block";
    document.querySelector("#progress").style.display ="block"; 
}

//create a function that cycles through the questions when a user clicks the answer choice
function userAnswer(event){
  //add to the index (move to next question) when function is called
  index++
  //set conditions for end of game
  if (index === questions.length){
    endGame();
  }
  else{
    askQuestion();
  }
}

//create a function that shows your progress
function showProgress(){ 
  progressEl.textContent = (index + " / " + questions.length + " completed");
}

//IF NOT WORKING COMMENT OUT 
function userScore() {
  //add a point to the score if the answer is correct
  if(event.target.textContent===questions[index].answer){
    score++
    console.log("correct");
  } 
}

function endGame(){
  var timeLeft = 0;
  var timeInterval = 0;
  clearInterval(timeInterval);


  //show user score
  questionBoxEl.textContent = ("Congratulations, you got " + score + " right!");
  //allow user to record score 
  document.querySelector(".recordscorecard").style.display = "block";
  //use local storage to save user score
  // if (firstNameInput === "") {
  //   alert("error", "First name cannot be blank");
  //show high score
  // highScore.textContent = ("this is your high score");
  //remove excess components 
  document.querySelector("#progress").style.display = "none";
  document.querySelector(".buttons").style.display = "none";
  document.querySelector("#highscore").style.display = "block";
 
}
// recordScoreBtn.addEventListener("click",function (event){
//   event.preventDefault
// }


//event listeners 
startBtn.addEventListener("click", runTimer);
ans0.addEventListener("click", userAnswer);
ans1.addEventListener("click", userAnswer);
ans2.addEventListener("click", userAnswer);
ans3.addEventListener("click", userAnswer);










