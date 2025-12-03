/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

const quizQuestions = [
    {
        id: 1,
        question: "What is your typical Friday night?",
        answers: [
            { answer: "Cheering loudly at a sports game with friends", smiski: "hockey" },
            { answer: "Attending a live concert or music festival", smiski: "houseOfBlues" },
            { answer: "Staying in studying or catching up on work", smiski: "mugar" },
            { answer: "Exploring the city and trying new restaurants", smiski: "lobster" },
            { answer: "Playing video games or board games with friends", smiski: "pumpkinToss" },
            { answer: "Relaxing at home with a good book or movie", smiski: "bean" }
        ]
    },
]

const quizResults = {
    hockey: {
        name: "Hockey Smiski",
        tagline: "Go Terriers! Keep scoring big!",
        description: "You're competitive, energetic, and thrive in team environments. Like a true BU hockey fan, you never back down from a challenge and bring fierce determination to everything you do. You're at your best when the stakes are high and the crowd is roaring."
    },
    houseOfBlues: {
        name: "House of Blues Smiski",
        tagline: "Living for the encore, one song at a time!",
        description: "You're vibrant, expressive, and always chasing the next great experience. Music runs through your veins, and you know how to turn any moment into a celebration. You're the friend who's always on aux and brings infectious energy wherever you go."
    },
    mugar: {
        name: "Mugar Library Smiski",
        tagline: "Quietly conquering the world, one study session at a time.",
        description: "You're thoughtful, introspective, and value knowledge above all else. Like a true Mugar library regular, you find solace in its cubicles and the occasional meal at GSU during your long study sessions. You're the friend who offers wise advice and a calming presence."
    },
    lobster: {
        name: "Lobster Night Smiski",
        tagline: "Savoring life's flavors, one bite at a time!",
        description: "You're adventurous, social, and love indulging in life's pleasures. Like a classic lobster night, you know how to enjoy the finer things and create memorable experiences with friends. You're the friend who always knows the best spots to eat and brings people together."
    },
    pumpkinToss: {
        name: "Pumpkin Toss Smiski",
        tagline: "Here for a good time, not a long time!",
        description: "You're playful, spontaneous, and live for the thrill of the moment. Like a spirited pumpkin toss, you embrace fun and excitement wherever you go. You're the friend who encourages others to let loose and enjoy life to the fullest."
    },
    bean: {
        name: "Bean the Dog Smiski",
        tagline: "Loyal companion, always by your side.",
        description: "You're dependable, loving, and bring joy to those around you. Like Bean the Dog, you have a heart of gold and are always there for your friends. You're the friend who offers unwavering support and a comforting presence."
    }
};

let currentQuestion = 0;
let scores = {
    hockey: 0,
    houseOfBlues: 0,
    mugar: 0,
    lobster: 0,
    pumpkinToss: 0,
    bean: 0
};

const quizBtn = document.getElementById('quiz-btn');
if (quizBtn) {
    quizBtn.addEventListener('click', () => {
        window.location.href = 'quiz.html';
    });
}


const quizContainer = document.getElementById('quiz');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

if (quizContainer) {
    loadQuestion();
}

function loadQuestion() {
    const question = quizQuestions[currentQuestion];

    const questionCard = document.createElement('div');
    questionCard.className = 'question-card';

    const questionText = document.createElement('h2');
    questionText.className = 'question-text';
    questionText.textContent = question.question;
    questionCard.appendChild(questionText);
    
    const answersList = document.createElement('div');
    answersList.className = 'answers-list';

    question.answers.forEach(answer => {
        const answerBtn = document.createElement('button');
        answerBtn.className = 'answer-btn';
        answerBtn.textContent = answer.answer;
        answerBtn.addEventListener('click', () => selectAnswer(answer.smiski));
        answersList.appendChild(answerBtn);
    });

    questionCard.appendChild(answersList);
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionCard);
}

function selectAnswer(smiskiType) {
    scores[smiskiType]++;
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}


function showResults() {
    let highestScore = 0;
    let topSmiski = '';
    
    for (let smiski in scores) {
        if (scores[smiski] > highestScore) {
            highestScore = scores[smiski];
            topSmiski = smiski;
        }
    }

    const result = quizResults[topSmiski];

    quizContainer.innerHTML = `
        <div class="result-card">
            <h2>Congrats! You received ${result.name}!</h2>
            <h3>${result.tagline}</h3>
            <p>${result.description}</p>
        </div>
        <div class="retake-quiz">
            <button id="retake-btn">Retake Quiz</button>
        </div>
    `;

   const retakeBtn = document.getElementById('retake-btn');
   retakeBtn.addEventListener('click', retakeQuiz);
}

function retakeQuiz() {
    currentQuestion = 0;
    scores = {
        hockey: 0,
        houseOfBlues: 0,
        mugar: 0,
        lobster: 0,
        pumpkinToss: 0,
        bean: 0
    };
    loadQuestion();
}