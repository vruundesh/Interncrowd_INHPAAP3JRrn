const quizDB =[
    {
        question: "Q1: What is the full form of HTML?",
        a: "hello to my land",
        b: "hey text markup language",
        c: "hypertext makup language",
        d: "Hypertext markup language",
        ans: "ans4"
    },
    {
        question: "Q2: Title tag is nested within the ______ tag.?",
        a: "body",
        b: "heap",
        c: "list",
        d: "table",
        ans: "ans2"
    },
    {
        question: "Q3: Deonation list can be deoned as.?",
        a: " <ol>",
        b: " <dl>",
        c: " <ul>",
        d: "all of the above ",
        ans: "ans2"
    },
    {
        question: "Q4:  Which one is the mandatory attribute of the <img> tag?",
        a: "SRC",
        b: "HREF",
        c: "ID",
        D: "ALT",
        ans: "ans1"
    },
    {
        question: " Q5:  Javascript is a ______________?",
        a: "server side scripting language",
        b: "client side scripting language.",
        c: "Either (A) or (B)",
        d: "Neither (A) nor (B)",
        ans: "ans2"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const  answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');


let questionCount = 0;
let score = 0;

const loadQuestion = ()  => {


    const questionList = quizDB[questionCount]; 

    question.innerText = quizDB[questionCount].question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


}

loadQuestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
           answer = curAnsElem.id;
        }
        
    });
    return answer;
};

submit.addEventListener('click', () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);


 if(checkedAnswer == quizDB[questionCount].ans){
    score++;
 };
 questionCount++;

 if(questionCount < quizDB.length){
    loadQuestion();
 }
 else{
    showScore.innerHTML ="<h3> you scored ${score}/${quizDB.length} </h3>"
    // showScore.innerHTML = <button class ="btn" onclick = "location.reload()"> </button>";

    showScore.classList.remove('scoreArea');
 }
   
});

