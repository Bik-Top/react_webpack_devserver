import React, {Component} from 'react';

import './header.sass';
const divStyle = {
  color     : 'blue',
  background: '#bcfffa',
};
class Header extends React.Component {
  render() {
    return (
      <header style={divStyle}>
        <a href="#">logo</a>
        <ul>
          <li><a href="#">О Туре </a></li>
          <li><a href="#">Календарь туров</a></li>
          <li><a href="#">Фотогалерея</a></li>
          <li><a href="#">О компании</a></li>
          <li><a href="#">О Баку</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Партнеры</a></li>
        </ul>
      </header>
    );
  }
}

class Content extends React.Component {


}

export default Header;
