const quizQuestions = [
    {
      question: "What does HTML stand for?",
      options: ["Hypertext Markup Language", "Hyperlink Text Markup Language", "Home Tool Markup Language"],
      answer: 0
    },
    {
      question: "Which CSS property is used to set the background color of an element?",
      options: ["background-color", "color", "background-image"],
      answer: 0
    },
    {
      question: "What is the purpose of the 'var' keyword in JavaScript?",
      options: ["To declare a constant variable", "To declare a function", "To declare a variable"],
      answer: 2
    }
  ];
  
  // Initialize quiz variables
  let currentQuestion = 0;
  let score = 0;
  
  // Display the first question
  displayQuestion();
  
  // Function to display the current question
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
  
    questionElement.textContent = quizQuestions[currentQuestion].question;
  
    // Create options elements
    optionsElement.innerHTML = "";
    quizQuestions[currentQuestion].options.forEach((option, index) => {
      const optionElement = document.createElement("button");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => {
        checkAnswer(index);
      });
      optionsElement.appendChild(optionElement);
    });
  }
  
  // Function to check the user's answer
  function checkAnswer(userAnswer) {
    const correctAnswer = quizQuestions[currentQuestion].answer;
  
    if (userAnswer === correctAnswer) {
      score++;
      alert("Correct answer!");
    } else {
      alert(`Incorrect answer. The correct answer is ${quizQuestions[currentQuestion].options[correctAnswer]}.`);
    }
  
    // Move to the next question
    currentQuestion++;
  
    // Check if the quiz is over
    if (currentQuestion >= quizQuestions.length) {
      alert(`Quiz over! Your final score is ${score} out of ${quizQuestions.length}.`);
      return;
    }
  
    displayQuestion();
  }
  
  // Add event listener to the "Next" button
  document.getElementById("next-button").addEventListener("click", () => {
    checkAnswer();
  });
  
  
  