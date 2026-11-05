const queData = [{question:"JavaScript mein variable diclare karne ke liye kaunsa keyword use hota hai?",
    options:["HTML","let","CSS","body"],
    answer:"let"
},
{question:"JavaScript mein console.log() ka use kis liye hota hai?",
    options:["Console mein output dikhane ke liye","Webpage ka color change karne ke liye","Image banane ke liye","Page refresh karne ke liye"],
    answer:"Console mein output dikhane ke liye"
},
{question:"JavaScript mein Arrey ka use kis liye hota hai?",
    options:["Sirf ek number ko store karne ke liye",
        "Webpage ko refresh karne ke liye",
        "Multiple values store karne ke liye",
        "HTML file banane ke liye"
    ],
    answer:"Multiple values store karne ke liye"
 }];
 
const queArea = document.getElementById("question-area");
const questionCount = document.getElementById("question-count");

const firstBtn = document.getElementById("first");
const secondtBtn = document.getElementById("second");
const thirdBtn = document.getElementById("third");
const fourthBtn = document.getElementById("fourth");

const finalScore = document.getElementById("result-area");
const nextQueBtn = document.getElementById("next-que");
const restartBtn = document.getElementById("reset-quiz");
const progressFill = document.getElementById("progress-fill");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// Display question and options
function showQuestion() {
    const currentQuestion = queData[currentQuestionIndex];

    queArea.textContent = currentQuestion.question;

    questionCount.textContent =
        `Question ${currentQuestionIndex + 1} of ${queData.length}`;

    firstBtn.textContent = currentQuestion.options[0];
    secondtBtn.textContent = currentQuestion.options[1];
    thirdBtn.textContent = currentQuestion.options[2];
    fourthBtn.textContent = currentQuestion.options[3];
    firstBtn.disabled = false;
    secondtBtn.disabled = false;
    thirdBtn.disabled = false;
    fourthBtn.disabled = false;

    // Reset option colors
    firstBtn.style.backgroundColor = "";
    secondtBtn.style.backgroundColor = "";
    thirdBtn.style.backgroundColor = "";
    fourthBtn.style.backgroundColor = "";
    let progress = (currentQuestionIndex+1)/queData.length*100;
    progressFill.style.width = progress + "%";
}

// Check selected answer
function checkAnswer(selectedBtn) {
    if (answered === true) {
        return;
    }

    const correctAnswer = queData[currentQuestionIndex].answer;

    if (selectedBtn.textContent === correctAnswer) {
        selectedBtn.style.backgroundColor = "green";
        score++;
    } else {
        selectedBtn.style.backgroundColor = "red";
        if (firstBtn.textContent === correctAnswer) {
            firstBtn.style.backgroundColor = "green";
}
else if(secondtBtn.textContent === correctAnswer){
    secondtBtn.style.backgroundColor = "green";
}
else if(thirdBtn.textContent === correctAnswer){
    thirdBtn.style.backgroundColor = "green";
}
else if(fourthBtn.textContent === correctAnswer){
    fourthBtn.style.backgroundColor = "green";
}
    }

    answered = true;
    firstBtn.disabled = true;
    secondtBtn.disabled = true;
    thirdBtn.disabled = true;
    fourthBtn.disabled = true;

    // Show score after the final question is answered
    if (currentQuestionIndex === queData.length - 1) {
        if(queData.length===score){
        finalScore.textContent =
            `Excellent  Your Score: ${score}/${queData.length}`;
        }
        else if(score===2){
            finalScore.textContent = `Good job  Your Score:${score}/${queData.length}`;
        }
        else if(score<=1){
            finalScore.textContent = `keep learning  Your Score:${score}/${queData.length}`;

        }
            

        nextQueBtn.disabled = true;
        restartBtn.style.display = "inline-block";
    }
}

// Option button events
firstBtn.addEventListener("click", function () {
    checkAnswer(firstBtn);
});

secondtBtn.addEventListener("click", function () {
    checkAnswer(secondtBtn);
});

thirdBtn.addEventListener("click", function () {
    checkAnswer(thirdBtn);
});

fourthBtn.addEventListener("click", function () {
    checkAnswer(fourthBtn);
});

// Next question
nextQueBtn.addEventListener("click", function () {
    if (answered === true && currentQuestionIndex < queData.length - 1) {
        currentQuestionIndex++;

        answered = false;
        showQuestion();
    }
});

// Restart quiz
restartBtn.addEventListener("click", function () {
    currentQuestionIndex = 0;
    score = 0;
    answered = false;

    finalScore.textContent = "";
    nextQueBtn.disabled = false;
    restartBtn.style.display = "none";
    showQuestion();
});

// Load the first question
restartBtn.style.display = "none";
showQuestion();
