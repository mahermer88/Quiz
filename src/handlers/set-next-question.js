import { data, quizData } from '../data.js';
import { clearStatusClass } from '../views/clear-status-class.js';
import { resetStat } from '../views/reset-state.js';
import { questionToDisplay } from '../views/show-question.js';

export function setNextQuestion() {
  clearStatusClass(document.body);

  if (quizData.questions.length <= quizData.quiz.answered) {
    document.getElementById('next-btn').classList.add('hide');
    document.getElementById('add-btn').classList.add('hide');
    document.getElementById('delete-btn').classList.add('hide');
    document.getElementById('question-container').classList.add('hide');
    document.getElementById('hint-box').classList.add('hide');
    document.getElementById('exit-btn').classList.remove('hide');
    clearInterval(data.timing);
  } else {
    resetStat();
    questionToDisplay(quizData.questions[quizData.quiz.answered]);
  }
}
