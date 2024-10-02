const questions = [
  {
    question: "What is the largest internal organ in the human body?",
    answers: [
      { text: "Lungs", correct: true },
      { text: "Heart", correct: false },
      { text: "Kidneys", correct: false },
      { text: "Liver", correct: false },
    ],
  },

  {
    question: "What is the percentage of the Earth covered by water?",
    answers: [
      { text: "51%", correct: false },
      { text: "61%", correct: false },
      { text: "71%", correct: true },
      { text: "81%", correct: false },
    ],
  },

  {
    question: "What was the name of Drake's 2023 album?",
    answers: [
      { text: "Take Care", correct: false },
      { text: "Scorpion", correct: false },
      { text: "For All the Dogs", correct: true },
      { text: "Views", correct: false },
    ],
  },

  {
    question:
      "Which of the following British presenters never presented 'Strictly Comes Dancing'?",
    answers: [
      { text: "Claudia Winkleman", correct: false },
      { text: "Tess Daly", correct: true },
      { text: "Andrea Hamilton", correct: false },
      { text: "Stacey Dooley", correct: false },
    ],
  },
];

let score = 0;
let currentQuestionIndex = 0;

const questionContainer = document.getElementById("question");
const nextBtn = document.getElementById("btn-next");
const answerContainer = document.getElementById("answer-Btns-container");
const questionStatus = document.getElementById("questionStatus");

const startQuiz = () => {
  score = 0;
  currentQuestionIndex = 0;

  nextBtn.innerText = "Next";
  nextBtn.style.display = "none";
  questionStatus.style.display = "block";

  showQuestion();
};

const showQuestion = () => {
    nextBtn.style.display = "none";
  const question = questions[currentQuestionIndex].question;
  const questionNumber = currentQuestionIndex + 1;

  questionContainer.innerText = `${questionNumber}. ${question}`;

  questionStatus.innerText = `${questionNumber} of ${questions.length} questions`;

  removeAnswer();

  const answers = questions[currentQuestionIndex].answers;

  answers.forEach((answer) => {
    const ansBtn = document.createElement("button");
    ansBtn.classList.add("ans-btn");
    ansBtn.innerText = answer.text;
    answerContainer.appendChild(ansBtn);

    if (answer.correct) {
      ansBtn.dataset.correct = answer.correct;
    }
    ansBtn.addEventListener("click", selectAnswer);
  });
};

const selectAnswer = (e) => {
  nextBtn.style.display = "block";
  const selectedAnswer = e.target;
  const isCorrect = selectedAnswer.dataset.correct === "true";

  if (isCorrect) {
    selectedAnswer.classList.add("correct");
    score++;
  } else {
    selectedAnswer.classList.add("incorrect");
  }
  Array.from(answerContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
};

const removeAnswer = () => {
  while (answerContainer.firstChild) {
    answerContainer.removeChild(answerContainer.firstChild);
  }
};

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
        showScore();
    }
  } else {
    startQuiz();
  }
});

const showScore = () => {

    removeAnswer()
  questionContainer.innerText = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerText = "Play Again";
  nextBtn.style.display = "block";
  questionStatus.style.display = "none";
};

startQuiz();
