let questions = [
    {
        question: "Who is the president of an INDIA?",
        options: ["Amit Shah", "Dropady Murmu", "J.P Nadda", "Rajnath Singh"],
        answer: 1
    },
    {
        question: "who is the prime minister of an INDIA?",
        options: ["Amit Shah", "Vijay Rupani", "Narendra Modi", "Harsh Sanghavi"],
        answer: 2
    },
    {
        question: "How many state are there in INDIA?",
        options: ["28", "27", "29", "26"],
        answer: 0
    },
    {
        question: "How many colors are there in rainbow?",
        options: ["8", "7", "6", "9"],
        answer: 1
    },
    {
        question: "How many institute are there in CHARUSAT?",
        options: ["9", "10", "8", "11"],
        answer: 0
    }
];

let score = 0;

// generate questions dynamically
let questionsHtml = "";
questions.forEach((question, index) => {
    questionsHtml += `
        <div class="question-container">
            <p>${question.question}</p>
            <span id="options-${index}">
                ${question.options.map((option, optionIndex) => `<input type="radio" name="option-${index}" value="${optionIndex}">${option}`).join("")}
            </span>
        </div>
    `;
});
document.getElementById("questions").innerHTML = questionsHtml;

// submit button click event
document.getElementById("submit-btn").addEventListener("click", () => {
    questions.forEach((question, index) => {
        let selectedOption = document.querySelector(`input[name='option-${index}']:checked`);
        if (selectedOption) {
            let selectedAnswer = parseInt(selectedOption.value);
            if (selectedAnswer === question.answer) {
                score++;
            }
        }
    });
    document.getElementById("result").innerHTML = `Your final score is ${score} out of ${questions.length}`;
    document.getElementById("submit-btn").style.display = "none";
});
