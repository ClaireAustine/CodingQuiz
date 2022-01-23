var highScores = document.querySelector("#highscores");
var hsArr = JSON.parse(localStorage.getItem("highscores"));
var initialsScore = document.querySelector("#initials-score");

hsArr.sort(function(a, b){return b.score - a.score});

 hsArr.forEach(function(score){
    var initialsAndScore = document.createElement("li");
    initialsAndScore.textContent = score.initials+ " " + score.score;
    initialsScore.append(initialsAndScore);
    
})

//sort by greatest score -->look up
//for each loop to display each score when a new one is added