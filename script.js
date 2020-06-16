//when the user clicks the start button, the timer starts 
//when someone enters initials, it will show scores 
//show high scores
//OBJECTS WITH QUESTIONS AND ANSWERS 
//when person selects wrong answer, the timer looses time
//game over event when times runs out or 
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

function prepareQuiz(){
  
  runTimer();
  askQuestion();
}

function runTimer() {
  var timeLeft = 10;
  console.log('hello')

  var timeInterval = setInterval(function() {
    countDownEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;
    console.log('hi')

    if (timeLeft === 0) {
      countDownEl.textContent = "";
      endGame();
      clearInterval(timeInterval);
    }

  }, 1000);
  
}

// create a function that runs through the question rounds 
 function askQuestion(questionNew,options,answer){
   //start timer 
  
    //create element

    questionBoxEl.textContent=questions[index].questionNew;
    //buttonsBtn.textContent=questions.options[i];
    ans0.textContent=questions[index].options[0];
    ans1.textContent=questions[index].options[1];
    ans2.textContent=questions[index].options[2];
    ans3.textContent=questions[index].options[3];
  
}
//execute the function
// askQuestion();

function endGame(){
  alert("game over")
}


buttonsBtn.addEventListener("click",function(event){
  console.log(event.target.textContent);
  index++
  if(index === question.length){
    endGame();
  } else {
    askQuestion();
  }
  
  
})
//create a function that calculates user score 
// function userScore(){
//   //set varibale userAnswer = whatever the user clicks 
//     var userAnswer = 
// //     // Compare answers. if the answer equals the index of the variable add 1 to score 
//     if (userAnswer === questions[index].answer){
//       // Increase score
//       score++; 
//     }  
// //   }
//  }
// execute the function
//  userScore();

function showProgress(){
  
  progressEl.textContent = ("You have " + askQuestion() + "/" + questions.length)
}
//execute the function
showProgress();
//show user how many questions they have left with #progress 


//show user final score by concatenating JavaScript string operators  
// ("You got " + userScore() + "/" + questions.length)

//display the new question on the HTML page 

startBtn.addEventListener("click", prepareQuiz);
questionBoxEl.addEventListener("click", askQuestion);
progressEl.addEventListener("click", showProgress);

// userAnswer.addEventListener("click", userScore());













    // show question on the page associated with the #questions

    // show the questions on the buttons

// if user clicks button then allows the question to go to the next index

    // record users answers and commpare them to the correct answer; boolean 

    // update the users score for loop
   
    //timer if the user doesn't complete in given time use "break" and go to last page that shows score 