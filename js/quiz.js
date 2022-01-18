var startContainer = document.querySelector("#startbutton");
var startButton = document.querySelector("#start");
var submitButton = document.querySelector("#submit");
var questionContainer = document.querySelector("#questions-card");
var question = document.querySelector("#question");
var options = document.querySelector("#options");
var result = document.querySelector("#result");
var timer;
var time = 60;
var timercount = document.querySelector("#timercount");
var correct = document.querySelector("#correct");
var score = document.querySelector("#score");
var scoreSheet = document.querySelector("#scoresheet");
var initialsEl = document.querySelector("#initials");

var index = 0;

// just some variables I might use
// var incorrect
// var correct
// var timer
// var timerCount

// var points
// var score
// var highScores
// var isCorrect

// start quiz

function startQuiz() {
  startContainer.setAttribute("class", "hide");
  questionContainer.removeAttribute("class");

  timer = setInterval(function () {
    time--;
    timercount.textContent = time;
    if (time <= 0) {
      endQuiz();
    }
  }, 1000);

  timercount.textContent = time;
  viewQuestions();
}

function viewQuestions() {
  var currentQ = questions[index];
  question.textContent = currentQ.title;
  
  options.innerHTML = "";
  
  currentQ.choices.forEach(function (choice) {
    var choiceBtn = document.createElement("button");

    choiceBtn.textContent = choice;
    choiceBtn.setAttribute("value", choice);

    choiceBtn.onclick = checkAnswer;

    options.append(choiceBtn);
  });


  
  //     }
  //     document.getElementById("options").innerHTML = text ;
  // add a button click (look into .onclick)
  // append the buttons to the question choices container.
  //no more questions = end game
}

function checkAnswer() {
  if (this.value !== questions[index].answer) {
    time -= 10;

    timercount.textContent = time;
    if (time < 0) {
      time = 0;
    }
  }

  index++;

  if (index === questions.length) {
    endQuiz();
  } else {
    viewQuestions();
  }
}

function endQuiz() {
  clearInterval(timer);
  questionContainer.setAttribute("class", "hide");
  scoreSheet.removeAttribute("class");
  //display score
  //input
  //hide questions container
  //show form for intials
}

function highScores() {
  var initials = initialsEl.value;

  var hsArr = JSON.parse(localStorage.getItem("highscores")) || [];

  var userScore = {
    initials: initials,
    score: time,
  };

  hsArr.push(userScore);
  localStorage.setItem("highscores", JSON.stringify(hsArr));
}




// i have to loop the questions then loop the options within each question and create and amend buttons to each option.
// for "this array of questions" display questions in subsequent order starting with the first question and load choices for each question, if question answered(using event listener) move to next question and choices

// i have to check the option selected with an evemt listener and 'answer' selector if it is correct or not,
// If timer reaches 0 question is inncorrect
//if answer is incorrect timer decreses

// function correctAnswer(){
//     result.textContent= 'Correct!';
//     correct++
//     setScore()
// }

// // if not corect  result.textContent= 'Incorrect!';

// function setScore(){
//     correct.textContent= score;
//     localStorage.setItem("score", score)
//}
// timer

// check if timer is out of time, if out of time question is marked incorrect

// populate question and if question was ansered or timer ran out populate next question

// see if question was answered correctly or incorrectly

// save point for each correctly answered question
// bonus- turn the score into a percentage
// display score after last question "n of out n, __%"
// display form for initals
// save score in high scores and initials in local storage
//turn score into string and then back into number

// display high scores when highscores is clicked

/*
 * questions.js is loaded in the HTML before quiz.js
 * It creates a global variable called questions that contains starter questions.
 * Take a look at the structure and familiarize yourself with each part
 * then, add some of your own questions!
 * Use this data to populate your quiz questions, choices, and answers.
 */
submitButton.addEventListener("click", highScores);
startButton.addEventListener("click", startQuiz);
