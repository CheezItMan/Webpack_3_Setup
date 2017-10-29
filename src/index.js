import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  let btn = document.createElement('button');
  btn.innerHTML = "Click to see a console.log";
  btn.onclick = printMe;

  element.appendChild(btn);
  
  return element;
}

document.body.appendChild(component());
