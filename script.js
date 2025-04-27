const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  const totalQuestions = questions.length;
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const nextBtn = document.getElementById('next-btn');
  const scoreEl = document.getElementById('score');
  const progressBar = document.getElementById('progress-bar');
  
  function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = '';
  
    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', selectAnswer);
      optionsEl.appendChild(button);
    });
  }
  
  function selectAnswer(e) {
    let selectedOption = e.target.textContent;
    let correctAnswer = questions[currentQuestionIndex].answer;
  
    // Show feedback
    if (selectedOption === correctAnswer) {
      e.target.classList.add('correct');
      score++;
    } else {
      e.target.classList.add('incorrect');
    }
  
    // Disable further clicking
    Array.from(optionsEl.children).forEach(button => button.disabled = true);
  
    // Show next button
    nextBtn.classList.remove('hide');
  
    // Update progress bar
    let progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
  }
  
  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
      showQuestion();
      nextBtn.classList.add('hide');
    } else {
      showScore();
    }
  });
  
  function showScore() {
    questionEl.classList.add('hide');
    optionsEl.classList.add('hide');
    nextBtn.classList.add('hide');
    scoreEl.classList.remove('hide');
    scoreEl.textContent = `Your Score: ${score} / ${totalQuestions}`;
  }
  
  // Start the quiz
  showQuestion();
  