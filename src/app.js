import React from 'react';
import ReactDOM from 'react-dom';

import Header from './comp/header.jsx';

const listLi ={
    name:'vik',
    age:21,
    sex: 'man'
};



ReactDOM.render(
  <Header
      name={listLi.name}
      age={listLi.age}
      sex={listLi.sex}/>,
  document.getElementById('root')
);
ReactDOM.render(
  <Header
      name={listLi.name}
      age={listLi.age}
      sex={listLi.sex}/>,
  document.getElementById('root')
);


