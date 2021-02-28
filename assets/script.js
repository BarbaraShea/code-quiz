var gamePlay = document.getElementById("questions");
var timer = document.getElementById("timer");
var highscores = document.getElementById("highscores");
var startGame = document.querySelector("button")


//Questions and answer array`
var questionsArray = [
    {question:"What is the basic data structure of Javascript?", answers: { a:"a function", b: "an object", c: "a variable"}, correctAnswer:"b"},
    {question:"What is used to perform the same action multiple times in a row?", answers: { a:"a loop", b: "a conditional", c: "a variable"}, correctAnswer:"a"},
    {question:"What allows an app to choose between one or more courses of action based one whether a condition is true?", answers: { a:"an object", b: "a conditional", c: "a variable"}, correctAnswer:"b"},
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


//start timer at button click

startGame.addEventListener("click", setTime);

startGame.addEventListener("click", runQuestions);


//Populates questions to the page
function runQuestions(){
     
        showOrHideDiv();
          
        // questions
        var questionEl = document.createElement("h1")
        console.log(questionEl);
        questionEl.innerHTML = questionsArray[0].question;
        gamePlay.append(questionEl);

        //answers
     for (var i = 0; i < questionsArray.length; i++) {
        var answerEl = document.createElement("button")
        console.log(answerEl);
        answerEl.innerHTML = questionsArray[0].answers;
        gamePlay.append(answerEl);
      
      }


    }

//logic for correct answers

var userAnswer = //click event? 

if (userAnswer == correctAnswer){
  highscores++;
} else {
  alert("Incorrect!");
}