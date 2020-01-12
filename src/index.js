import { hello } from './hello';
import myImage from '../assets/image.jpg';

hello('Berton');

document.body.innerHTML = '<div id="myImg"></div>';
document.getElementById('myImg').innerHTML = `
  <h1>Peugeot 407</h1>
  <img src='${myImage}' />
`;
