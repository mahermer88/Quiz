import { selectAnswer } from '../handlers/select-answer.js';

export function questionToDisplay(question) {
  document.getElementById('question').innerText = question.text;

  const answers = question.answers;
  for (const [key, value] of Object.entries(answers)) {
    const button = document.createElement('button'); // Creating the button of each answer
    button.classList.add('btn');
    button.innerText = value; // add the text of answer
    button.dataset.answerKey = key; // add the key of answer : a, b, c, d
    button.dataset.correctKey = question.correct; // add the key of correct answer
    button.dataset.question = question.text; // add the question text to use it in the select answer function
    button.addEventListener('click', selectAnswer);
    document.getElementById('answer-buttons').appendChild(button);
  }

  const hint = document.getElementById('hint');
  for (const link of question.links) {
    const href = link.href; // get the link of resource of each question
    hint.href = href;
    hint.target = '_blank';
  }
}
