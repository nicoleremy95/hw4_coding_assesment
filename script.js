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

var recordScoreCard = document.querySelector(".recordscorecard");

var recordScoreBtn = document.querySelector("#recordscorebutton");
var timeInterval="";



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
//create a number Data Type and set it equal to the variable "timeLeft". The game starts with 60 seconds. 
var timeLeft = 60;

//FUNCTIONS 
// Start with a welcome function  
function welcome () {
  questionBoxEl.textContent = ('Welcome to the coding quiz! You have 60 seconds to complete this quiz. Click "start" to begin!');
  document.querySelector(".buttons").style.display = "none";
  document.querySelector("#progress").style.display ="none";
  document.querySelector(".recordscorecard").style.display = "none";
  document.querySelector("#start").style.display = "block";
}
welcome();

//create function that starts timer on start button click 
function runTimer() {
  askQuestion();
 
    timeInterval = setInterval(function() {
    countDownEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft <= 0 ) {
      countDownEl.textContent = "";
      // document.querySelector("#timer").style.display = "none";
      endGame();
      clearInterval(timeInterval);  
    }  

    else{
      showProgress();
    }

  }, 1000);
  
}

// create a function that runs through the questions in the object "questions" 
 function askQuestion(){
    //create elements
    questionBoxEl.textContent=questions[index].questionNew;
    ans0.textContent=questions[index].options[0];
    ans1.textContent=questions[index].options[1];
    ans2.textContent=questions[index].options[2];
    ans3.textContent=questions[index].options[3];
    //control visibility
    document.querySelector("#start").style.display = "none";
    document.querySelector(".recordscorecard").style.display = "none";
    document.querySelector(".buttons").style.display = "block";
    document.querySelector("#progress").style.display ="block"; 
}

//create a function that cycles through the questions when a user clicks the answer choice
function userAnswer(event){
  //add to score if answer is correct 
  if( event.target.textContent===questions[index].answer){
    score++
    console.log("correct");
  }
  //subtract time if answer is incorrect 
  if( event.target.textContent!==questions[index].answer){
    timeLeft -= 5
     console.log("wrong");
  }
  
  //set conditions for end of game
  if (index >= questions.length -1){
    endGame();
  }
  else {
    index++
    askQuestion();
  }
}

//create a function that shows your progress
function showProgress(){ 
  progressEl.textContent = (index + " / " + questions.length + " completed");
}

//create a function that ends the game, prompts user to input score
function endGame(){
  // clears the timer function 
  clearInterval(timeInterval)
  //show user score
  questionBoxEl.textContent = ("Congratulations, you got " + score + " right!");
  //control display 
  document.querySelector(".recordscorecard").style.display = "block";
  document.querySelector("#progress").style.display = "none";
  document.querySelector(".buttons").style.display = "none";
  // document.querySelector("#highscore").style.display = "block";
}

TODO: //create a function that displays messge if user does not input message 


//create a function that records the user score and brings you back to the welcome page 
function recordScore (event){
  event.preventDefault();

  // reset timeLeft, index, and score
  timeLeft = 60;
  index = 0;
  score = 0;
  //run welcome function
  welcome();
  
  var userNamesUl = document.querySelector("#usernamesul");
  var userScoresUl = document.querySelector("#userscoresul");
  var firstNameInput = document.querySelector("#first-name");
  var namesArray = localStorage.getItem("names") ?
  JSON.parse(localStorage.getItem("names")) : []
  var scoresArray = localStorage.getItem("scores")?
  JSON.parse(localStorage.getItem("scores")) : []

  localStorage.setItem("names", JSON.stringify(namesArray))
  var nameData = JSON.parse(localStorage.getItem("names"))

  var liMakerName = text => {
    var li = document.createElement("li")
    li.textContent = text
    userNamesUl.appendChild(li)
  }

  namesArray.push(firstNameInput.value)
  localStorage.setItem("names", JSON.stringify(namesArray))
  liMakerName(firstNameInput.value)
  firstNameInput.value = ""

  nameData.forEach(name => {
    liMaker(name)
  })

  
  






 // create variables for the user input 
  // var newName = firstNameInput.value;
  // console.log(newName);
  // var newScore = score;
  // console.log(newScore);

  // if (newName){
  //   localStorage.setItem(newName)
  // }

  // for (i=0; i<localStorage.length; i++){
  //   var newName = localStorage.newName(i);
  //   userNamesUl.innerHTML+=`${newName}`;
  // }

  // if (newScore){
  //   localStorage.setItem(newScore)
  // }

  // for (i=0; i<localStorage.length; i++){
  //   var newScore = localStorage.newScore(i);
  //   userScoresUl.innerHTML+=`${newScore}`;
  // }









  // var namesArray = [];
  // var scoresArray = [];
  //store user name locally 
  // localStorage.setItem("userNamesUl", JSON.stringify(newName));
  // localStorage.getItem("userNamesUl");

  // //store user score locally 
  // localStorage.setItem("userScoresUl", JSON.stringify(newScore));
  // localStorage.getItem("userScoresUl");

  // //give user input a value 
  // userNamesUl.textContent = newName;
  // userScoresUl.textContent = newScore;

  // // create name list and append to ul
  // liMakerName = text => {
  //   var li = document.createElement("li")
  //   li.textContent = text;
  //   userNamesUl.appendChild(li);
  // };
  // // liMakerName();
  //  liMakerScore = text => {
  //   var li = document.createElement("li")
  //   li.textContent = text;
  //   userScoresUl.appendChild(li);
  // };
  // liMakerScore();

  
}

//event listeners 
startBtn.addEventListener("click", runTimer);
ans0.addEventListener("click", userAnswer);
ans1.addEventListener("click", userAnswer);
ans2.addEventListener("click", userAnswer);
ans3.addEventListener("click", userAnswer);
recordScoreBtn.addEventListener("click", recordScore);










