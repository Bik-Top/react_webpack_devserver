import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu.jsx';
import Header from './components/header.jsx';
import InfoTur from './components/info_tur.jsx';
import Details from './components/details.jsx';
import TicketCost from './components/ticket_cost.jsx';
import InfoBaku from './components/info_baku.jsx';
import Partners from './components/partners.jsx';
import Contacts from './components/contacts.jsx';

import 'app.sass';

ReactDOM.render(
  <div className="">
    <Menu/>
    <Header/>
    <InfoTur/>
    <Details/>
    <TicketCost/>
    <InfoBaku/>
    <Partners/>
    <Contacts/>
  </div>,
  document.getElementById('root')
);



