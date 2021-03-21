import { startGame } from '../handlers/start-game.js';
import { setNextQuestion } from '../handlers/set-next-question.js';
import { cheatAnswer } from '../handlers/cheat-answer.js';
import { questionToDelete } from '../handlers/delete-question.js';
import { questionToAdd } from '../handlers/add-question.js';

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('next-btn').addEventListener('click', setNextQuestion);
document.getElementById('exit-btn').addEventListener('click', startGame);
document.getElementById('cheat').addEventListener('click', cheatAnswer);
document.getElementById('delete-btn').addEventListener('click', questionToDelete); 
document.getElementById('add-btn').addEventListener('click', questionToAdd);

document.getElementById('call').addEventListener('click', () => {
  const audio = document.getElementById('audioCall');
  audio.play();
});