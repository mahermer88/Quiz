import { quizData } from '../data.js';
import { setStatusClass } from '../views/set-status-class.js';

export function selectAnswer(e) {
  const selectedButton = e.target;

  for (const question of quizData.questions) {
    if (question.text === selectedButton.dataset.question) {
      if (question.selected !== null) {
        //if some answer was clicked already
        return;
      }
      question.selected = selectedButton.dataset.answerKey;
      selectedButton.style.color = 'yellow';
    }
  }

  if (
    selectedButton.dataset.correctKey.toLowerCase() ===
    selectedButton.dataset.answerKey.toLowerCase()
  ) {
    quizData.quiz.correct += 1;
  }
  setStatusClass(
    document.body,
    selectedButton.dataset.correctKey.toLowerCase() ===
    selectedButton.dataset.answerKey.toLowerCase()
  );

  quizData.quiz.answered += 1;

  const totalQuestion = Array.from(quizData.questions).length;
  const processAnsweredQuestionsMove = document.getElementById('process-answered-questions-move');
  processAnsweredQuestionsMove.style.height = (quizData.quiz.answered * 100) / totalQuestion + '%';

  document.getElementById('question-correct').innerText = `${quizData.quiz.correct} correct of ${quizData.quiz.answered}`;

  const processCorrectAnswersMove = document.getElementById('process-correct-answers-move');
  processCorrectAnswersMove.style.height = (quizData.quiz.correct * 100) / Array.from(quizData.questions).length + '%';

  //Change the color and style of correct answer and wrong once
  const answerButton = document.getElementById('answer-buttons').children;
  for (const button of [...answerButton]) {
    setStatusClass(
      button,
      button.dataset.correctKey === button.dataset.answerKey
    );
  }
}
