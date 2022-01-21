var highScores = document.querySelector("#highscores");
var hsArr = JSON.parse(localStorage.getItem("highscores"));
var initialsScore = document.querySelector("#initials-score");

 hsArr.forEach(function(score){
    var intitalsAndScore = document.createElement("li");
    intitalsAndScore.textContent = score.initials+ " " + score.score;

    initialsScore.append(intitalsAndScore);
})

//sort by greatest score -->look up
//for each loop to display each score when a new one is added