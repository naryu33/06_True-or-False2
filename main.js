const titleText = document.getElementById('title');
const questionText = document.getElementById('question');

let correctAnswer;

const questions = [
    {question: '大和政権には天皇が存在した。○か×か。', answer: 0},
    {question: '古墳の中に土偶が置いてあった。○か×か。', answer: 0},
    {question: '日本で須恵器がつくられた。○か×か。', answer: 0},
    {question: '百済から仏教が伝来した。○か×か。', answer: 1}
];

function writeQuestion() {
    titleText.textContent = `第${sum + 1}問`;
    questionText.textContent = questions[sum].question;
}

function onAnswer(ans) {
    if (ans === questions[sum].answer) {
        console.log('正解');
        correctAnswer++;
    } else {
        console.log('不正解');
    }
    
    sum++;

    if (sum >= questions.length) {
        alert(`${questions.length}問中${correctAnswer}問正解です`);   
        onStart();
    } else {
        writeQuestion();
    }
}

function onStart() {
    sum = 0;
    correctAnswer = 0;
    writeQuestion();
}

onStart();