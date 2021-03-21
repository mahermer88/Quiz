import { quizData } from '../data.js';
import { selectAnswer } from './select-answer.js';
import { setStatusClass } from '../views/set-status-class.js';
import { setNextQuestion } from './set-next-question.js';

export function cheatAnswer() {
  quizData.quiz.answered += 1;

  const totalQuestion = Array.from(quizData.questions).length;
  const processAnsweredQuestionsMove = document.getElementById(
    'process-answered-questions-move'
  );
  processAnsweredQuestionsMove.style.height =
    (quizData.quiz.answered * 100) / totalQuestion + '%';

  const answerButtonsElement = document.getElementById('answer-buttons')
    .children; // get answer buttons
  for (const button of [...answerButtonsElement]) {
    button.removeEventListener('click', selectAnswer); // stop select answer to stop counting
    setStatusClass(
      button,
      button.dataset.correctKey === button.dataset.answerKey
    ); // show the colors of wrong and correct answer
  }

  setNextQuestion; //continue to the next question with out counting score
}
