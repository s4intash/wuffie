// Quiz Questions
const questions = [
    {
        question: "What do bunnies love to eat the most?",
        options: ["Carrots", "Lettuce", "Apples", "Bananas"],
        correct: 0
    },
    {
        question: "How many ears does a bunny have?",
        options: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        question: "What color are most garden bunnies?",
        options: ["Pink", "Blue", "Brown", "Green"],
        correct: 2
    },
    {
        question: "What do bunnies do when they're happy?",
        options: ["Binky (jump and twist)", "Sleep", "Eat", "Hide"],
        correct: 0
    },
    {
        question: "Where do bunnies like to live?",
        options: ["In trees", "Underground burrows", "In water", "On mountains"],
        correct: 1
    }
];

// Quiz State
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let musicPlaying = false;

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const scoreDisplay = document.getElementById('scoreDisplay');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
musicToggle.addEventListener('click', toggleMusic);

// Start Quiz
function startQuiz() {
    welcomeScreen.classList.add('d-none');
    quizScreen.classList.remove('d-none');
    currentQuestion = 0;
    score = 0;
    showQuestion();
    playMusic();
    // Show floating bunnies once quiz begins
    document.querySelectorAll('.floating-bunny').forEach(el => el.classList.remove('d-none'));
}

// Show Question
function showQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    selectedAnswer = null;
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
    
    // Show Next button but keep disabled until an option is selected
    nextBtn.classList.remove('d-none');
    nextBtn.disabled = true;
}

// Select Answer
function selectAnswer(answerIndex) {
    // Allow changing selection freely and do not indicate correctness
    selectedAnswer = answerIndex;
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    
    buttons.forEach((btn, index) => {
        if (index === answerIndex) {
            btn.classList.add('selected');
            btn.classList.remove('correct', 'incorrect');
        } else {
            btn.classList.remove('selected', 'correct', 'incorrect');
        }
        // Keep buttons interactive for reselection
        btn.style.pointerEvents = '';
    });
    
    nextBtn.classList.remove('d-none');
    nextBtn.disabled = false;
}

// Next Question
function nextQuestion() {
    // Require a selection before proceeding
    if (selectedAnswer === null) {
        return;
    }
    // Tally score only when moving to next question
    const question = questions[currentQuestion];
    if (selectedAnswer !== null && selectedAnswer === question.correct) {
        score++;
    }
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    quizScreen.classList.add('d-none');
    resultsScreen.classList.remove('d-none');
    // Keep floating bunnies visible on results
    document.querySelectorAll('.floating-bunny').forEach(el => el.classList.remove('d-none'));
    
    const percentage = Math.round((score / questions.length) * 100);
    let message = '';
    const carousel = document.getElementById('perfectScoreCarousel');
    const resultsImage = document.getElementById('resultsImage');
    const restartBtnEl = document.getElementById('restartBtn');
    const resultsSticker = resultsScreen.querySelector('.bunny-sticker');
    const resultsMessage = document.getElementById('resultsMessage');
    const perfectMessage = document.getElementById('perfectMessage');
    
    if (percentage === 100) {
        message = `Perfect score! You got every single question right. Outstanding job! 
        Perfect score! You got every single question right. Outstanding job!
        Perfect score! You got every single question right. Outstanding job!
        Perfect score! You got every single question right. Outstanding job!
        Perfect score! You got every single question right. Outstanding job!`;
        // Show carousel, hide results image and keep restart button
        carousel.classList.remove('d-none');
        resultsImage.classList.add('d-none');
        if (resultsMessage) resultsMessage.classList.add('d-none');
        restartBtnEl.classList.remove('btn-primary');
        restartBtnEl.classList.add('btn-warning');
        // Show sticker on perfect (original design)
        if (resultsSticker) resultsSticker.classList.remove('d-none');
    } else if (percentage >= 80) {
        message = '';
        // Hide carousel; show welcome-style image and primary button
        carousel.classList.add('d-none');
        resultsImage.classList.remove('d-none');
        if (resultsMessage) resultsMessage.classList.remove('d-none');
        restartBtnEl.classList.remove('btn-warning');
        restartBtnEl.classList.add('btn-primary');
        // Hide sticker to match welcome layout (image + button only)
        if (resultsSticker) resultsSticker.classList.add('d-none');
    } else if (percentage >= 60) {
        message = '';
        // Hide carousel; show welcome-style image and primary button
        carousel.classList.add('d-none');
        resultsImage.classList.remove('d-none');
        if (resultsMessage) resultsMessage.classList.remove('d-none');
        restartBtnEl.classList.remove('btn-warning');
        restartBtnEl.classList.add('btn-primary');
        if (resultsSticker) resultsSticker.classList.add('d-none');
    } else {
        message = '';
        // Hide carousel; show welcome-style image and primary button
        carousel.classList.add('d-none');
        resultsImage.classList.remove('d-none');
        if (resultsMessage) resultsMessage.classList.remove('d-none');
        restartBtnEl.classList.remove('btn-warning');
        restartBtnEl.classList.add('btn-primary');
        if (resultsSticker) resultsSticker.classList.add('d-none');
    }
    
    // Only show text content when perfect score; otherwise hide text entirely
    if (percentage === 100) {
        const messageParagraph = message.replace(/\n+/g, ' ');
        // Move the paragraph near the carousel instead of the score box
        if (perfectMessage) {
            perfectMessage.innerHTML = `<p class="mb-0" style="text-align: justify; margin-top: 0;">${messageParagraph}</p>`;
            perfectMessage.classList.remove('d-none');
        }
        // Hide the score box completely for perfect scores
        scoreDisplay.classList.add('d-none');
    } else {
        scoreDisplay.innerHTML = '';
        scoreDisplay.classList.add('d-none');
        if (perfectMessage) {
            perfectMessage.innerHTML = '';
            perfectMessage.classList.add('d-none');
        }
    }
}

// Restart Quiz
function restartQuiz() {
    resultsScreen.classList.add('d-none');
    quizScreen.classList.remove('d-none');
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    showQuestion();
}

// Music Functions
function playMusic() {
    if (!musicPlaying) {
        bgMusic.play().catch(e => console.log('Music autoplay blocked'));
        musicPlaying = true;
        musicToggle.textContent = 'Music On';
    }
}

function toggleMusic() {
    if (musicPlaying) {
        bgMusic.pause();
        musicPlaying = false;
        musicToggle.textContent = 'Music Off';
    } else {
        bgMusic.play();
        musicPlaying = true;
        musicToggle.textContent = 'Music On';
    }
}

// Add some cute sound effects for interactions
function playCorrectSound() {
    // Create a simple beep sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
}

// Note: selection handling is defined earlier to allow reselection without feedback.



// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // No floating emoji elements added on load
}); 