import React, {Component} from 'react';

class InfoBaku extends React.Component {
  render() {
    return (
      <div className="grid grid-wrap info-baku">
        <div className="cell-width-100 top-text-title text-center">Информация о Баку</div>
          <div className="cell-offset-10 cell">
            <ul className="cell list-with-icon">
              <li>
                <div className="grid grid-top">
                  <img className="cell icon" src={require("../img/large-buildin-3-min.svg")} alt=""/>
                  <div className="cell cell-center description">
                    <p>Решили побывать в Баку, городе великих контрастов?Древнем как Крит и современном как Дубай,городе роскошных отелей и узких улочек Старого города?</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-top">
                  <img className="cell  icon" src={require("../img/wall-min.svg")} alt=""/>
                  <div className="cell cell-center description">
                    <p>Городе крепостных стен и бескрайних золотых пляжей, Городе древних языческих храмов и гонок Формулы-1?</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-top">
                  <img className="cell  icon" src={require("../img/green-building-min.svg")} alt=""/>
                  <div className="cell cell-center description">
                    <p>Столице нескольких государств, которую влюбленные захватчики застраивали шедеврами архитектуры, где соединяется любовь к роскоши Востока и простая элегантность Запада?</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="cell-offset-10 cell">
            <ul className="cell list-with-icon">
              <li>
                <div className="grid grid-top">
                  <img className="cell icon" src={require("../img/construction_platform-min.svg")} alt=""/>
                  <div className="cell cell-center description">
                    <p>Родине нефтедобычи и источнике Нобелевской премии, месте вдохновения великих архитекторов прошлого и настоящего?</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-top">
                  <img className="cell  icon" src={require("../img/food-close-min.svg")} alt=""/>
                  <div className="cell cell-center description">
                    <p>Городе, покоряющем своей гостеприимностью и самой вкусной в мире едой. Население которого 5 миллионов человек, но где теория шести рукопожатий автоматически сводится к 3-м? </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-top">
                  <img className="cell  icon" src={require("../img/sun-min.svg")} alt=""/>
                  <div className="cell cell-center description">
                    <p>Всегда солнечном городе ветров, «баклажановых» лондонских кэбов и мраморной Венеции. Городе, распробовав который, влюбляешься безвозвратно?</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        <div className="cell-width-100 text-center">
          <button className="button">Записаться на тур</button>
        </div>

      </div>
    );
  }
}



export default InfoBaku;
