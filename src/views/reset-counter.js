import { data, quizData } from '../data.js';

export function resetCounter() {
  data.seconds = 0;
  data.minutes = 0;
  data.displaySeconds = 0;
  data.displayMinutes = 0;

  //In case we restart the game we want to reset all variables
  for (const question of quizData.questions) {
    question.selected = null;
  }
  quizData.quiz.answered = 0;
  quizData.quiz.correct = 0;

  const numberQuestion = document.getElementById('number-question');
  while (numberQuestion.firstChild) {
    numberQuestion.removeChild(numberQuestion.firstChild);
  }

  const totalQuestion = Array.from(quizData.questions).length;
  const processAnsweredQuestionsMove = document.getElementById(
    'process-answered-questions-move'
  );
  processAnsweredQuestionsMove.style.height =
    (quizData.quiz.answered * 100) / totalQuestion + '%';

  const processCorrectAnswersMove = document.getElementById(
    'process-correct-answers-move'
  );
  processCorrectAnswersMove.style.height = 0;
}
