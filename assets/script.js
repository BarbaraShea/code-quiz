var gamePlay = document.getElementById("container");
var question = document.getElementById("question")
var choices = Array.from(document.getElementsByClassName("choice-text"));
var timer = document.getElementById("timer");
var startGame = document.querySelector("button");
var score = 0;
var currentQuestion= {};
var questionCounter= 0;
availableQuestions=[];

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
//     {question:"What is the basic data structure of Javascript?", answers: { a:"a function", b: "an object", c: "a variable"}, correctAnswer:"b"},
//     {question:"What is the basic data structure of Javascript?", answers: { a:"a function", b: "an object", c: "a variable"}, correctAnswer:"b"},
//     {question:"What is the basic data structure of Javascript?", answers: { a:"a function", b: "an object", c: "a variable"}, correctAnswer:"b"},
]

console.log(questionsArray[0]);

//function to hide button on game play
function showOrHideDiv() {
  var v = document.getElementById("showOrHide");
  if (v.style.display === "none") {
     v.style.display = "block";
  } else {
     v.style.display = "none";
  }
}

//timer
var secondsLeft = 120;

var setTime = function() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft + " seconds left.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
      }
  
    }, 1000);
}


//start timer and start game at button click

startGame.addEventListener("click", setTime);

startGame.addEventListener("click", runQuestions);


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

function getNewQuestion(){

  if(availableQuestions.length === 0){
    //place holder-- will ask for user initials and display highscores
    alert("Game Over!");
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

    getNewQuestion();
  });
});

function keepScore(){
  if (selectedAnswer === correctAnswer){
    console.log("Got It!");
  }
}

