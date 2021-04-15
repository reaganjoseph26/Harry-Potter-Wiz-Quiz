var questions = [
    {
        question: "What was Harry Potter's patronus?",
        answers: ["Bear", "Rabbit", "Fox", "Stag"],
        correct: 4
    },
    {
        question: "How did Harry Potter's parents die?",
        answers: ['The Dark Lord', 'Car accident', 'Hurricane', 'They are Alive'],
        correct: 1
    },
    {
        question: "Who was snape in love with",
        answers: ['Harry Potter', 'Himself', 'Magic', 'Harry Potters Mom'],
        correct: 4
    },
    {
        question: "What is the Dark Lord's birth name?",
        answers: ['Tom Little', 'Tom Riddle', 'Jack Riddle', 'John Riddle'],
        correct: 2
    },
    {
        question: "What sport did Harry Potter play?",
        answers: ['Soccer', 'Baseball', 'Quidditch', 'Rugby'],
        correct: 3
    }
];
var scoresArray = [];


var startButtonEl = document.querySelector("#begin-quiz");
var questionsContainer = document.querySelector(".questions-container");
var questionName = document.querySelector(".question-title");


var titleEl = document.querySelector(".title-div");
var rulesEl = document.querySelector(".rules-div");
var buttonEl = document.querySelector(".button-div");
var initialsInput = document.querySelector("#initials")


var timerEl = document.querySelector(".timer");


var mainContainerEl = document.querySelector(".container");

var quizOverDiv = document.querySelector(".quiz-over");
var quizOverHeaderEl = document.querySelector(".quiz-over-header");


var HighScoresDivEl = document.querySelector(".highscores-div");

var scoresButtonEl = document.querySelector("#storage-submit");

var tableEl = document.querySelector("#row-scores");

var counter = 0;
var timeLeft = 75;


var startQuiz = function() {
    titleEl.remove();
    rulesEl.remove();
    buttonEl.remove();
    questionsContainer.style.display = "block";

    timerStart = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);


    for (let j = 0; j < questions[counter].answers.length; j++) {
        var currentAnswer = document.getElementById(j + 1);
        currentAnswer.textContent = questions[counter].answers[j];
        var buttonIndex = j + 1;
        currentAnswer.addEventListener("click", () => {
            checkAnswer(j + 1);
        });
    }
    nextQuestion();
};

var nextQuestion = function() {

    var myQuestion = questions[counter].question;
    questionName.textContent = myQuestion;

    for (let i = 0; i < questions[counter].answers.length; i++) {
        var currentAnswer = document.getElementById(i + 1);
        currentAnswer.textContent = questions[counter].answers[i];
        };
};

var checkAnswer = function(buttonIndex) {
    var correctAnswer = questions[counter].correct;
    if (correctAnswer === buttonIndex) {
        mainContainerEl.style.backgroundColor = "lightgreen"
        setTimeout(function() {
            mainContainerEl.style.backgroundColor = "white";
        }, 250);    
    }
    else {
        mainContainerEl.style.backgroundColor = "#ff6961"
        setTimeout(function() {
            mainContainerEl.style.backgroundColor = "white";
        }, 250);
        timeLeft -= 15;
        timerEl.textContent = "Time: " + timeLeft;
    }
    if (counter >= 4) {
        endQuiz();
    }
    else {
        counter++;
        nextQuestion();
    }
};

var timerStart;
 
var endQuiz = function() { 
        clearInterval(timerStart);

        mainContainerEl.remove();
        quizOverDiv.style.display = "block";

        var finalScore = document.createElement("p")
        finalScore.className = "final-score";
        finalScore.textContent = "Your Final Score Is " + timeLeft + ".";
        quizOverHeaderEl.appendChild(finalScore);

}

var storeObjects = function() {
    var initials = document.getElementById("initials").value.trim();

    while (initials === "" || initials === null) {
            initials = window.prompt("Please enter your initials to log your score!")
        }
    var scoresObj = {
        name: initials,
        score: timeLeft,
    };
    scoresArray.push(scoresObj);
    
    localStorage.setItem(initials,JSON.stringify({initials, timeLeft}));
    console.log("array hjere",scoresArray);
}

startButtonEl.addEventListener("click", startQuiz);
scoresButtonEl.addEventListener("click", function(){
    storeObjects();
    location.href= "./assets/js/highscores.html";
});