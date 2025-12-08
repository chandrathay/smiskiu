/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

const quizQuestions = [
    {
        id: 1,
        question: "What is your ideal Friday night?",
        answers: [
            { answer: "Cheering loudly at a sports game with friends 🥅", smiski: "hockey" },
            { answer: "Attending a live concert or music festival 🎶", smiski: "houseOfBlues" },
            { answer: "Staying in studying or catching up on work 📚", smiski: "mugar" },
            { answer: "Exploring the city and trying new restaurants 🏙️", smiski: "lobster" },
            { answer: "Playing video games or board games with friends 🕹️", smiski: "pumpkinToss" },
            { answer: "Relaxing at home with a good book or movie 💤", smiski: "bean" }
        ]
    },
    {
        id: 2,
        question: "Pick a color that speaks to you:",
        answers: [
            { answer: "Scarlet Red ❤️", smiski: "hockey", color: "#CC0000" },
            { answer: "Electric Blue 💙", smiski: "houseOfBlues", color: "#1633f0" },
            { answer: "Forest Green 💚", smiski: "mugar", color: "#2B633E"},
            { answer: "Salmon Pink 🩷", smiski: "lobster", color: "#FF91A4" },
            { answer: "Bright Orange 🧡", smiski: "pumpkinToss", color:"#FF8C00" },
            { answer: "Soft Beige 🤍", smiski: "bean", color: "#C2977AFF" }
        ]
    },
    {
        id: 3,
        question: "How would your friends describe you?",
        answers: [
            { answer: "Competitive 🏅", smiski: "hockey" },
            { answer: "Energetic ⚡", smiski: "houseOfBlues" },
            { answer: "Dedicated ✍", smiski: "mugar" },
            { answer: "Adventurous 🧗🏽‍♀️", smiski: "lobster"},
            { answer: "Playful 🤪", smiski: "pumpkinToss" },
            { answer: "Loyal 🤝", smiski: "bean" }
        ]
    },
    {
        id: 4,
        question: "Pick a city you would love to visit:",
        answers: [
            { answer: "Toronto, Canada 🍁", smiski: "hockey" },
            { answer: "London, England 💂‍♂️", smiski: "houseOfBlues" },
            { answer: "Kyoto, Japan ⛩️", smiski: "mugar" },
            { answer: "Seattle, Washington 🏔️", smiski: "lobster" },
            { answer: "Salem, Massachusetts 🐈‍⬛", smiski: "pumpkinToss" },
            { answer: "Los Angeles, California 🌴", smiski: "bean" }
        ]
    },
    {
        id: 5,
        question: "Who are you usually in a group project?",
        answers: [
            { answer: "The leader who organizes everyone 🗣️", smiski: "hockey" },
            { answer: "The creative executor who brings ideas to life 🎨", smiski: "houseOfBlues" },
            { answer: "The researcher who gathers all the information 💻", smiski: "mugar" },
            { answer: "The suggester of new ideas and approaches 💡", smiski: "lobster" },
            { answer: "The motivator who keeps the team energized 🌟", smiski: "pumpkinToss" },
            { answer: "The dependable who ensures everything gets done 🙌", smiski: "bean" }
        ]
    },
    {
        id: 6,
        question: "What's your go-to way to destress?",
        answers: [
            { answer: "Breaking a sweat with a workout 🏋️‍♂️", smiski: "hockey" },
            { answer: "Listening to music 🎧", smiski: "houseOfBlues" },
            { answer: "Making a to-do list and getting things done ✅", smiski: "mugar" },
            { answer: "Going on a walk or spontaneous adventure 🚶‍♀️", smiski: "lobster" },
            { answer: "Hanging out and laughing with friends 👭🏻", smiski: "pumpkinToss" },
            { answer: "Cuddling with a pet or loved one 🛋️", smiski: "bean" }
        ]
    },
    {
        id: 7,
        question: "Which item would you most like as a gift?",
        answers: [
            { answer: "A jersey of your favorite athlete 👕", smiski: "hockey" },
            { answer: "A vinyl of your favorite album 📀", smiski: "houseOfBlues" },
            { answer: "A new iPad for note-taking and organization 📱", smiski: "mugar" },
            { answer: "A polaroid camera to capture memories 📸", smiski: "lobster" },
            { answer: "A new gaming system 🎮", smiski: "pumpkinToss"},
            { answer: "A plushie of your favorite character 🧸", smiski: "bean" },

        ]
    },
    { 
        id: 8,
        question: "Pick the movie genre you enjoy the most:",
        answers: [
            { answer: "Action 💥", smiski: "hockey" },
            { answer: "Musical 🎤", smiski: "houseOfBlues" },
            { answer: "Documentary 🎬", smiski: "mugar" },
            { answer: "RomCom 💗", smiski: "lobster" },
            { answer: "Drama 🎭", smiski: "pumpkinToss" },
            { answer: "Family 🐶", smiski: "bean" }
        ]
    },
    {
        id: 9,
        question: "What's your favorite time of the school year?",
        answers: [
            { answer: "Big games and school spirit 💪", smiski: "hockey" },
            { answer: "Welcome week of events and nights out 🎉", smiski: "houseOfBlues" },
            { answer: "Steady study sessions and routines ✍️", smiski: "mugar" },
            { answer: "Free weekends to explore the city 🗺️", smiski: "lobster" },
            { answer: "Halloween vibes and spooky season 🎃", smiski: "pumpkinToss" },
            { answer: "Breaks spent relaxing and recharging 🧘🏻‍♀️", smiski: "bean" }
        ]
    },
    {
        id: 10,
        question: "Where are you most likely to be found?",
        answers: [
            { answer: "Fitrec 🏋", smiski: "hockey" },
            { answer: "Marsh Plaza 🏫", smiski: "houseOfBlues" },
            { answer: "Questrom 📖", smiski: "mugar" },
            { answer: "GSU 🍽️", smiski: "lobster" },
            { answer: "Saxbys ☕", smiski: "pumpkinToss" },
            { answer: "Your Dorm Room 🛏️", smiski: "bean" }
        ]
    }
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
let scores = [];

const quizContainer = document.getElementById('quiz');

if (quizContainer) {
    loadQuestion();
}

function loadQuestion() {
    const question = quizQuestions[currentQuestion];

    const questionCard = document.createElement('div');
    questionCard.className = 'question-card';

    const questionNumber = document.createElement('h2');
    const questionText = document.createElement('h3');
    questionNumber.className = 'question-number';
    questionText.className = 'question-text';
    questionNumber.textContent = `Question ${currentQuestion + 1}`;
    questionText.textContent = `${question.question}`;
    questionCard.appendChild(questionNumber);
    questionCard.appendChild(questionText);
    
    const answersList = document.createElement('div');
    answersList.className = 'answers-list';

    question.answers.forEach((answer, index) => {
        const answerLabel = document.createElement('label');
        answerLabel.className = 'answer-label';
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'answer';
        radioInput.className = 'answer-input';
        radioInput.setAttribute('data-smiski', answer.smiski);
        radioInput.id = `answer${index}`;

        const answerText = document.createElement('span');
        answerText.className = 'answer-text';
        answerText.textContent = answer.answer;

        if (question.id === 2 && answer.color) {
            answerText.style.color = answer.color;
        }
        
        answerLabel.appendChild(radioInput);
        answerLabel.appendChild(answerText);
        answersList.appendChild(answerLabel);
    });


    questionCard.appendChild(answersList);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'quiz-buttons';

  
        const backBtn = document.createElement('button');
        backBtn.className = 'back-btn';
        backBtn.textContent = '< Back';

        backBtn.addEventListener('click', () => {
            if (currentQuestion === 0) {
                window.location.href = 'index.html';
            } else {
                loadPreviousQuestion();
            }
        });
    
        buttonContainer.appendChild(backBtn);
    

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    if (currentQuestion === quizQuestions.length - 1) {
        nextBtn.textContent = 'Submit';
    } else {
        nextBtn.textContent = 'Next >';
    }
    nextBtn.addEventListener('click', loadNextQuestion);
    buttonContainer.appendChild(nextBtn);

    questionCard.appendChild(buttonContainer);

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionCard);
}

function loadNextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedAnswer) {
        alert('Please select an answer before proceeding!');
        return;
    }
    const answerSmiski = selectedAnswer.getAttribute('data-smiski');
    scores.push(answerSmiski);
    currentQuestion++;

    if (currentQuestion >= quizQuestions.length) {
        showResults();
        return;
    }
    loadQuestion();
}

function loadPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        scores.pop();
        loadQuestion();
    }
}


function showResults() {
    const smiskiScore = {
        hockey: 0,
        houseOfBlues: 0,
        mugar: 0,
        lobster: 0,
        pumpkinToss: 0,
        bean: 0
    };

    scores.forEach(smiski => {
        smiskiScore[smiski]++;
    });

    let highestScore = 0;
    let topSmiski = '';
    
    for (let smiski in smiskiScore) {
        if (smiskiScore[smiski] > highestScore) {
            highestScore = smiskiScore[smiski];
            topSmiski = smiski;
        }
    }

    const result = quizResults[topSmiski];

    quizContainer.innerHTML = `
        <div class="result-card">
            <h2>Congrats!</h2>
            <img src="images/${topSmiski}.svg" alt="${result.name}" class="img"/>
            <h2>You received ${result.name}!</h2>
            <p><i>"${result.tagline}"</i></p>
            <p>${result.description}</p>
        </div>
        <div class="retake-quiz">
            <button id="retake-btn">↻ Retake Quiz</button>
        </div>
    `;

   const retakeBtn = document.getElementById('retake-btn');
   retakeBtn.addEventListener('click', retakeQuiz);
}

function retakeQuiz() {
    currentQuestion = 0;
    scores = [];
    loadQuestion();
}