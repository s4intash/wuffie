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
let soundEnabled = false;

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
    
    const percentage = Math.round((score / questions.length) * 100);
    let message = '';
    const carousel = document.getElementById('perfectScoreCarousel');
    const resultsImage = document.getElementById('resultsImage');
    const restartBtnEl = document.getElementById('restartBtn');
    const resultsSticker = resultsScreen.querySelector('.bunny-sticker');
    const resultsMessage = document.getElementById('resultsMessage');
    const perfectMessage = document.getElementById('perfectMessage');
    
    if (percentage === 100) {
        message = `hi, jian my baby wuffie! i don't know where to start na tuloy. out of nowhere nanaman 'no. wala lang po baby, masama ba? quickie lang to, gawa lang kasi wanna check on u. are u okay, my loveee? i hope u are. did u smile today? i hope u did. was someone stressing u out? i hope ako lang HHAHAHAHHHAHAHA kidding.

i love you. alam mo naman 'yon, diba? just in case u go to the point na u're doubting this love for u, contact me lang ha, or go back to all of this my lame love letters ble :p i really love writing love letters, even if this one's not totally a love letter, more like a check-up on u? or maybe a daily reminder of sorts.

how's school, my loveeee? dami bang schoolworks? plates again? cramming pa more hehe kidding. just make sure to take deep breaths always if it's too much na ha. breathe in, breathe out, okaaaay? i know naman u've got strong emotional and stress control, i saw it. kaya alam ko kaya mo 'yan. i was gonna say iwas ka sa cramming para hindi ka agad mapagod, but if it works for u, who am i to stop it, diba??? just please get enough rest, wuffie haaa. lagot ka sa mama mo. whatever the output or result, i know u did ur best, and that's the proudest part. kakayanin 'yang program, u can do it!

how's it naman dyan sa house niyo? is anybody stressing u out ba? calmness always, okay? wag lagi rising intonation HAHAHAHAHAHAHAHAHA. diba, u know na baka na-stress din baby girls mo. keep it low lang, just enough so no one gets stressed. does it pressure u being the oldest? i hope it's a good pressure, not the bad kind, where u feel overwhelmed. but if no, good, just do ur best to make them proud wherever u go, for sure that's what ur parents and siblings want. if yes, prove them wrong, pero not to pressure u more ha. prove them that u're not just an investment, but u'll help in whatever u can. how's ur mom at work? hope she's doing okay. how's ur dad? i hope he's good too. how's ur sisters? their voices still music to ur ears? HAAHAHAHAAHAHAHHAHA alarm na ikaw lang meron, loveeeet. don't sungit too much, baka umiyak 'yan HAHAHAHAHAHAHA joke lang, love language niyo 'yan e. how's si walang itlog the doggieee??? don't let him skip meals ha, observe him always kasi he can't really tell u if something's wrong.

how's ur health, baby? u told me before may nararamdaman ka, diba? let me know if something's wrong ha, don't ignore it. don't want u waking up one day in a white outfit, hindi kana makakapag outfit check nyan sige ka HAHAHAHAHAHAHAHA.

u make me the happiest talaga, especially when u're all annoyed HAHHAHAHAHA tho mas malakas ka mang asar, ayon yung nakakainis. thank you, swear baby, i'm really grateful. u handle everything with so much calmness, even when ur mind is messed up, and that's one of the things i love most about u. it's honestly such a kind thing to do. like, how do u do that? how do u stay so calm for me, even when everything's chaotic in your head? i admire that so much. it's just one of the many things that make u the best.

i'm not perfect ha, i told u naman marami pa kong flaws na hindi mo pa nakikita, and it's not something i can show since we haven't been in that kind of situation yet. whatever ur flaws are, i hope u don't feel scared to show it to me. i don't want u pretending, okay? if u're not okay, tell me. if u're happy, tell me. just be real with me, please.

i love u with all my hypothalamus.`;
        // Hide slideshow and results image; only show text
        carousel.classList.add('d-none');
        resultsImage.classList.add('d-none');
        if (resultsMessage) resultsMessage.classList.add('d-none');
        restartBtnEl.classList.add('d-none');
        // Hide sticker on perfect to avoid extra space; card fits content
        if (resultsSticker) resultsSticker.classList.add('d-none');
    } else if (percentage >= 80) {
        message = '';
        // Hide carousel; show welcome-style image and primary button
        carousel.classList.add('d-none');
        resultsImage.classList.remove('d-none');
        if (resultsMessage) resultsMessage.classList.remove('d-none');
        restartBtnEl.classList.remove('d-none');
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
        restartBtnEl.classList.remove('d-none');
        restartBtnEl.classList.remove('btn-warning');
        restartBtnEl.classList.add('btn-primary');
        if (resultsSticker) resultsSticker.classList.add('d-none');
    } else {
        message = '';
        // Hide carousel; show welcome-style image and primary button
        carousel.classList.add('d-none');
        resultsImage.classList.remove('d-none');
        if (resultsMessage) resultsMessage.classList.remove('d-none');
        restartBtnEl.classList.remove('d-none');
        restartBtnEl.classList.remove('btn-warning');
        restartBtnEl.classList.add('btn-primary');
        if (resultsSticker) resultsSticker.classList.add('d-none');
    }
    
    // Only show text content when perfect score; otherwise hide text entirely
    if (percentage === 100) {
        // Preserve line breaks and format as separate paragraphs
        const formattedMessage = message.split('\n\n').map(paragraph => 
            paragraph.trim() ? `<p class="mb-2" style="text-align: justify; margin-top: 0;">${paragraph.trim()}</p>` : ''
        ).join('');
        // Move the paragraphs near the carousel instead of the score box
        if (perfectMessage) {
            perfectMessage.innerHTML = formattedMessage;
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
    if (musicPlaying) return;
    if (!bgMusic) return;
    const tryPlay = () => bgMusic.play().then(() => {
        musicPlaying = true;
        musicToggle.textContent = 'Music On';
        soundEnabled = true;
    }).catch(() => {
        // Autoplay blocked; wait for first gesture
        const onFirstGesture = () => {
            bgMusic.play().then(() => {
                musicPlaying = true;
                musicToggle.textContent = 'Music On';
                soundEnabled = true;
            }).catch(() => {});
            document.removeEventListener('click', onFirstGesture);
            document.removeEventListener('keydown', onFirstGesture);
            document.removeEventListener('touchstart', onFirstGesture);
        };
        document.addEventListener('click', onFirstGesture);
        document.addEventListener('keydown', onFirstGesture);
        document.addEventListener('touchstart', onFirstGesture, { passive: true });
    });
    tryPlay();
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
// YouTube IFrame API will call this when ready
document.addEventListener('DOMContentLoaded', () => {
    // Try to autoplay on load; fall back to first gesture if blocked
    playMusic();
});