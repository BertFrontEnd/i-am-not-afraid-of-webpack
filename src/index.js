import { hello } from './hello';
import myAssets from './assets/img/my-assets.jpg';

hello('Berton');

document.body.innerHTML = '<div id="my-assets"></div>';
document.getElementById('my-assets').innerHTML = `
  <h1>And my Assets & Debts</h1>
  <img src="${myAssets}" />
  `;
