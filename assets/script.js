var gamePlay = document.getElementById("container");
var question = document.getElementById("question")
var choices = Array.from(document.getElementsByClassName("choice-text"));
var timer = document.getElementById("timer");
var startGame = document.querySelector("button");
var score = 0;
var currentQuestion= {};
var questionCounter= 0;
availableQuestions=[];
var scoreDisplay = document.getElementById("score-display");
var submitEl = document.querySelector(".submit");
var showScore = document.getElementById("displayScore");


//Questions and answer array`
var questionsArray = [
{
    question:"What is the basic data structure of Javascript?", 
    choice1: "a function", 
    choice2: "an object", 
    choice3: "a variable", 
    correctAnswer: 2,
},

{
    question:"What is used to perform the same action multiple times in a row?",
    choice1: "a loop", 
    choice2: "a conditional", 
    choice3: "a variable", 
    correctAnswer: 1,
},

{
    question:"What allows an app to choose between one or more courses of action based one whether a condition is true?", 
    choice1: "an object", 
    choice2: "a conditional", 
    choice3: "a variable", 
    correctAnswer: 2,
},

{
  question:"Inside which HTML element do we put the JavaScript?", 
  choice1: "<javascript>", 
  choice2: "<script>", 
  choice3: "<js>", 
  correctAnswer: 2,
},

{
  question:"Where is the correct place to insert a JavaScript?", 
  choice1: "<head>", 
  choice2: "<footer>", 
  choice3: "<body>", 
  correctAnswer: 3,
},

{
  question:"How do you create a function in JavaScript?", 
  choice1: "function= myFunction()",
  choice2: "function: myFunction()", 
  choice3: "function myFunction()", 
  correctAnswer: 3,
},

{
  question:"How do you call a function named 'myFunction'?", 
  choice1: "call myfunction", 
  choice2: "myFunction()", 
  choice3: "call function myFunction()", 
  correctAnswer: 2,
},

{
  question:"How to write an IF statement in JavaScript?", 
  choice1: "if i =4 then", 
  choice2: "if i = 4", 
  choice3: "if (i == 4)", 
  correctAnswer: 3,
},

{
  question:"How can you add a comment in a JavaScript?", 
  choice1: "//This is a comment", 
  choice2: "<!--This is a comment-->", 
  choice3: "**This is a comment**", 
  correctAnswer: 1,
},
{
  question:"What is the correct way to write a JavaScript array?", 
  choice1: "var colors = 'red', 'green, 'blue'", 
  choice2: "var colors = {'red', 'green, 'blue'}", 
  choice3: "var colors = ['red', 'green, 'blue']", 
  correctAnswer: 3,
},
]
console.log(questionsArray[0]);


//function to hide button on game play
function showOrHideDiv() {
  var v = document.getElementById("hideStartBtn");
  if (v.style.display === "none") {
     v.style.display = "block";
  } else {
     v.style.display = "none";
  }
}
// function to show or hide form
function showOrHideForm() {
  var v = document.querySelector("form");
  if (v.style.display === "none") {
     v.style.display = "block";
  } else {
     v.style.display = "none";
  }
}

//function show or hide container
function showOrHideQuestions() {
var v = document.getElementById("container");
if (v.style.display === "none") {
   v.style.display = "block";
} else {
   v.style.display = "none";
}
}
//timer
var timeLeft = 120;
var setTime = function() {
    var timerInterval = setInterval(function() {
      timeLeft--;
      var str = parseInt(timeLeft / 60) + ':' + (timeLeft % 60);

      timer.textContent = str;
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
        endGame();
      }
  
    }, 1000);
}


//start timer and start game at button click

startGame.addEventListener("click", setTime);

startGame.addEventListener("click", runQuestions);


function endGame (){
  highScores();
  showOrHideForm();  
  // clearInterval(timerInterval);

  showScore.textContent=("Your score is: " + score);
}

//stores scores
function highScores(){
  var setScore = score;
  var highScores = JSON.parse(localStorage.getItem("highScores"));
  if (!highScores){
    highScores = [];
  }
  
  submitEl.addEventListener("click", function(event){
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    
    var currentScore = {
      score: setScore,
      initials: initials,
    }
  
    highScores.push(currentScore);
    
    localStorage.setItem("highScores", JSON.stringify(highScores));

    var x = document.querySelector("form");
    if (x.style.display === "none") {
     x.style.display = "block";
  } else {
     x.style.display = "none";
  }

  var x = showScore;
  if (x.style.display === "none") {
   x.style.display = "block";
} else {
   x.style.display = "none";
}
    showHighscores();
  })

}

//show high scores

function showHighscores (){

}

//clear highscores

function clearHighscores (){
  localStorage.clear();
}


//Populates questions to the page
function runQuestions(){
      //hide start button
      showOrHideDiv();

      questionCounter = 0;
      score = 0;

      availableQuestions = [ ... questionsArray];
      console.log(availableQuestions) 
      
      getNewQuestion();
}

// populates new question each time
function getNewQuestion(){

  if(availableQuestions.length === 0){

  endGame();  

  }

  questionCounter++;
  var questionIndex = Math.floor(Math.random()* availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.textContent = currentQuestion.question;

  choices.forEach(choice => {
    var number = choice.dataset["number"];
    choice.textContent = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
};

//user clicks
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    console.log(e.target);
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.dataset["number"];

      if (selectedAnswer == currentQuestion.correctAnswer){
        score++;
        scoreDisplay.textContent = score;
        
      }

    getNewQuestion();
  });
});



