var answer = [];
var questionsArr = [
    {
        question: "What was Harry Potter's patronus?",
        options: ["Bear", "Rabbit", "Fox", "Stag"],
        answer: "Stag"
       
    },
    {
        question: "What was Harry Potter's patronus?2",
        options: ["Bear", "Rabbit", "Fox", "Stag"],
        answer: "Stag"
       
    },
    {
        question: "What was Harry Potter's patronus?3",
        options: ["Bear", "Rabbit", "Fox", "Stag"],
        answer: "Stag"
       
    }
    // {
    //     question: "Who retuned in the Globet of Fire?",
    //     answer: true
    // },
    // {
    //     question: "What does the Imperius Curse do?",
    //     answer: true
    // },
    // {
    //     question: "Who killed Professor Dumbledore?",
    //     answer: true
    // },
    // {
    //     question: "In the end, who was revealed to be an ally of Harry Potter?",
    //     answer: true
    // }
];

var allQuestionContainer = document.querySelector("#questionContainer");

var startEl = document.querySelector("#start-btn");

questionsArr.forEach((item, index) => {
    var oneQuestionContainer = document.createElement('div');
    oneQuestionContainer.setAttribute("id", "question-"+index);
    oneQuestionContainer.setAttribute("class", "questionsGroup");
    oneQuestionContainer.style.display = "none";

    var questionEl = document.createElement('h3');
    questionEl.textContent = item.question;

    var listEl = document.createElement('ul');

    item.options.forEach((option) => {
        var itemEl = document.createElement('li');
        itemEl.textContent = option;
        itemEl.setAttribute("class", "optionsGroup");

        listEl.appendChild(itemEl);
    })

    oneQuestionContainer.appendChild(questionEl)
    oneQuestionContainer.appendChild(listEl);

    allQuestionContainer.appendChild(oneQuestionContainer);

})

var currentNumber = 0;

const showNextQuestion = () => {
    var questionsGroupEl = document.querySelectorAll('.questionsGroup');

    questionsGroupEl.forEach(questionEl => {
        questionEl.style.display = "none";
    })

    document.querySelector('#question-'+currentNumber).style.display = "block";
    currentNumber++;
}

startEl.addEventListener('click', function () {
    startEl.style.display = "none";
    showNextQuestion()
})


document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.className === 'optionsGroup') {
        showNextQuestion()
    }
  });


// // variable to keep track of score
// var score = 0;
// var body = document.body;
// var infoEl = document.createElement('div');
// infoEl.appendChild(questionsArrEl)
// body.appendChild(infoEl);

// var startEl = document.querySelector("#start-btn");

// startEl.addEventListener('click', function () {
//     // TODO: Iterate over the questions array and display each question in a confirmation box
//     for (var i = 0; i < questionsArr.length; i++) {
//         var userAnswer = confirm(questionsArr[i].question);
//         // TODO: Check the user's answer against the correct answer
//         if (userAnswer === answer[i]) {
//             // TODO: Alert the user if they are correct or wrong. Increment the score accordingly
//             score++;
//             alert("Correct!");
//         } else {
//             alert("Wrong!");
//         }
//     };
// });













