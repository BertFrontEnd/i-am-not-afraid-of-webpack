import { hello } from './hello';
import johnCena from '../assets/unexpected.jpg';
import andHisNameIs from '../assets/and-his-name-is.mp3';

hello('Berton');

document.body.innerHTML = '<div id="myMemes"></div>';
document.getElementById('myMemes').innerHTML = `
  <h1>And his name is...</h1>
  <img src='${johnCena}' />
`;

const audio = new Audio(andHisNameIs);
const img = document.querySelector('#myMemes img');
img.addEventListener('click', event => audio.play());
