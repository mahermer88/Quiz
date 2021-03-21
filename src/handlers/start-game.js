import { data, quizData } from '../data.js';
import { setNextQuestion } from '../handlers/set-next-question.js';
import { timer } from '../views/timer.js';
import { resetCounter } from "../views/reset-counter.js"

export function startGame() {

  resetCounter();
  
  data.timing = setInterval(timer, 1000);

  // Starting the game with hiding some elements and showing others
  document.getElementById('welcoming').classList.add('hide');
  document.getElementById('start-btn').classList.add('hide');
  document.getElementById('exit-btn').classList.add('hide');
  document.getElementById('next-btn').classList.remove('hide');
  document.getElementById('add-btn').classList.remove('hide');
  document.getElementById('delete-btn').classList.remove('hide');
  document.getElementById('question-container').classList.remove('hide');
  document.getElementById('process-correct-answers').classList.remove('hide');
  document.getElementById('process-answered-questions').classList.remove('hide');
  document.getElementById('call').classList.remove('hide');
  document.getElementById('cheat').classList.remove('hide');
  document.querySelector('img').classList.remove('hide');

  // This part is especially to show questions number in counter space in good style and depending on the total number of questions.
  const totalQuestion = Array.from(quizData.questions).length;
  const numberQuestion = document.getElementById('number-question');
  for (let i = totalQuestion; i > 0; i--) {
    const numberQuestionList = document.createElement('li');
    numberQuestionList.innerText = i;
    numberQuestion.appendChild(numberQuestionList);
  }
  numberQuestion.style.fontSize = 510 / totalQuestion + 'px';

  //Changing the order of the questions list and call the next function
  quizData.questions.sort(() => Math.random() - 0.5);

  setNextQuestion();
}
