
import React from 'react';
import ReactDOM from 'react-dom';

import Kitten from './images';
import cartoonCat from './cartoon_cat';

 import  './sass/style.sass';
 import  './css/style.css';

let myKaty = () => {
  return` ${Kitten}  `
};
let myCat = () => {
  return` ${cartoonCat} `
};


let one = document.getElementById('drawCartoonCat');
    one.innerHTML = myKaty();

let two = document.getElementById('imagesKity');
    two.innerHTML = myCat();



ReactDOM.render(
  <div>
    <h1>She stared through the window at the stars.</h1>
  </div>,
  document.getElementById('root')
);


