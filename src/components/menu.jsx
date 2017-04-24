import React, {Component} from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div className="grid top-menu ">

        <a href="#" className="cell-width-10 header_logo">
          logo
        </a>

        <ul className="grid cell-width-80 cell-center header_nav">
          <li><a href="#">О Туре </a></li>
          <li><a href="#">Календарь туров</a></li>
          <li><a href="#">Фотогалерея</a></li>
          <li><a href="#">О компании</a></li>
          <li><a href="#">О Баку</a></li>
          <li><a href="#" className="news-f">Новости</a></li>
          <li><a href="#">Партнеры</a></li>
        </ul>

        <div className="grid cell-width-5 cell-center header_language-switch">
           <a href="#" className="active">ru</a>
           <a href="#">eng</a>
        </div>
      </div>
    );
  }
}



export default Menu;
