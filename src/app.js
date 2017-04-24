import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu.jsx';
import Header from './components/header.jsx';
import InfoTur from './components/info_tur.jsx';
import Details from './components/details.jsx';

import 'app.sass';

ReactDOM.render(
  <div className="grid-large-fit">
    <Menu/>
    <Header/>
    <InfoTur/>
    <Details/>
  </div>,
  document.getElementById('root')
);



