
var body = document.body;

const heading = document.createElement('h5');
heading.textContent = 'View high scores';
heading.setAttribute('style', 'color: #ff00ff;')
document.body.appendChild(heading);

var h1El = document.createElement('h1');
h1El.textContent = 'Coding Quiz Challenge';
h1El.setAttribute('style', 'margin:auto; padding:15px; width:100%; text-align:center;');
body.appendChild(h1El);

var h3El = document.createElement('h3');
h3El.textContent =
'Try to answer the following code-related questions within the time limit.';
h3El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
body.appendChild(h3El);

var h3El = document.createElement('h3');
h3El.textContent =
'Keep in mind that incorrect answers will penalize your score/time';
h3El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
body.appendChild(h3El);

var h3El = document.createElement('h3');
h3El.textContent =
'by ten seconds!';
h3El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
body.appendChild(h3El);

// The array of questions
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("question-choice");
var buttonEl = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");



//add event Listener to start button to initialize quiz
buttonEl.addEventListener("click", startQuiz);
//function to start the quiz
function startQuiz() {
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("style", "display:none");
}

//timer 
//

// TODO: Create an array with five question objects
var questions = [
    {
        question: 'Commonly used data types Do Not Include:',
        choice: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
];
// TODO: Create a variable to keep track of the score

// TODO: Iterate over the questions array and display each question in a confirmation box

// TODO: Check the user's answer against the correct answer

// TODO: Alert the user if they are correct or wrong. Increment the score accordingly

// TODO: At the end of the game, alert the user with the final score
