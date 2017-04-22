import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.jsx';


const listLi = {
    name: 'vik',
    age : 21,
    sex : 'man'
};

ReactDOM.render(
    <Header
        name={listLi.name}
        age={listLi.age}
        sex={listLi.sex}/>,
    document.getElementById('root')
);



