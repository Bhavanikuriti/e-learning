document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded!");

    // Navigation Highlighting
    const navLinks = document.querySelectorAll("nav ul li a");
    const path = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === path) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Page Logic
    switch (path) {
        case "index.html":
            console.log("Home Page Loaded!");
            break;
        case "courses.html":
            console.log("Courses Page Loaded!");
            break;
        case "quiz.html":
            console.log("Quiz Page Loaded!");
            initQuiz();
            break;
        case "about.html":
            console.log("About Page Loaded!");
            break;
        case "contact.html":
            console.log("Contact Page Loaded!");
            initContactForm();
            break;
        default:
            console.log("Page not recognized.");
    }
});

// Quiz Logic
function initQuiz() {
    console.log("Quiz Initialized!");
    const questions = [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Management Language"],
            correct: 0,
        },
        {
            question: "What is the correct syntax to include a JavaScript file?",
            options: ["<script src='file.js'>", "<script href='file.js'>", "<script link='file.js'>", "<script name='file.js'>"],
            correct: 0,
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    const nextBtn = document.getElementById("next-btn");

    if (!questionEl || !answersEl || !nextBtn) {
        console.error("Quiz elements not found!");
        return;
    }

    function loadQuestion() {
        const q = questions[currentQuestion];
        questionEl.textContent = q.question;
        answersEl.innerHTML = "";
        q.options.forEach((option, index) => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.className = "quiz-option";
            btn.onclick = () => selectAnswer(index);
            answersEl.appendChild(btn);
        });
    }

    function selectAnswer(index) {
        if (index === questions[currentQuestion].correct) score++;
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showScore();
        }
    }

    function showScore() {
        questionEl.textContent = Your score is ${score}/${questions.length};
        answersEl.innerHTML = "";
        nextBtn.style.display = "none";
    }

    nextBtn.onclick = () => {
        if (currentQuestion < questions.length) loadQuestion();
        else showScore();
    };

    loadQuestion();
}

// Contact Form Logic
function initContactForm() {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault();
            alert("Thank you for contacting us!");
            form.reset();
        });
    } else {
        console.error("Contact form not found!");
    }
} 