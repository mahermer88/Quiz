import { clearStatusClass } from './clear-status-class.js';

export function resetStat() {
  const answerButtonsElement = document.getElementById('answer-buttons');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }

  clearStatusClass(document.body);
}
