const titleText = document.getElementById('title');
const questionText = document.getElementById('question');

let correctAnswer;

const questions = [
    {question: '大和政権には(　？　)が存在した。　　　1,天皇　2,大王　3,皇子　4,将軍', answer: 2},
    {question: '古墳の中に(　？　)が置いてあった。　　　1,土偶　2,人形　3,土器　4,埴輪', answer: 4},
    {question: '(　？　)が渡来人によって輸入された。　　　1,縄文土器　2弥生土器,　3,須恵器　4,磨製石器', answer: 3},
    {question: '(　？　)から仏教が伝来した。　　　1,百済　2,加羅　3,新羅　4,高句麗', answer: 1}
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

Button1.onmousedown = function () {
    onAnswer(1)
}

Button2.onmousedown = function () {
    onAnswer(2)
}

Button3.onmousedown = function () {
    onAnswer(3)
}

Button4.onmousedown = function () {
    onAnswer(4)
}

onStart();