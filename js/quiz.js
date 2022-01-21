var startContainer = document.querySelector("#startbutton");
var startButton = document.querySelector("#start");
var submitImput = document.querySelector("#submit")
var submitButton = document.querySelector("#submitbutton");
var questionContainer = document.querySelector("#questions-card");
var question = document.querySelector("#question");
var options = document.querySelector("#options");
var result = document.querySelector("#result");
var timer;
var time = 60;
var timercount = document.querySelector("#timercount");
var score = document.querySelector("#score");
var scorecount = document.querySelector("#scorecount");
var scoreSheet = document.querySelector("#scoresheet");
var initialsEl = document.querySelector("#initials");
var tryagainButton = document.querySelector("#tryagainbutton")

var index = 0;


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
}

function checkAnswer() {
  if (this.value !== questions[index].answer) {
    time -= 10;

    timercount.textContent = time;
  }
  if (time < 0) {
    time = 0;
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
  scorecount.textContent= time
  //tryagainButton.removeAttribute("class");
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
  submitImput.setAttribute("class", "hide");
}



// display high scores when highscores is clicked

/*
 * questions.js is loaded in the HTML before quiz.js
 * It creates a global variable called questions that contains starter questions.
 * Take a look at the structure and familiarize yourself with each part
 * then, add some of your own questions!
 * Use this data to populate your quiz questions, choices, and answers.
 */
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", highScores);
//tryagainButton.addEventListener("click", startQuiz);

