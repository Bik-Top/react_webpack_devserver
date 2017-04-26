import React, {Component} from 'react';

class InfoTur extends React.Component {
  render() {
    return (
      <div className="grid grid-wrap row info-tur">
        <div className="cell-width-100 top-text-title text-center">Информация о туре</div>
        <div className="cell-offset-10 cell-width-40">
          <img className=" rounded-full  baku" src={require("../img/baku-min.png")} alt="baku"/>
        </div>
        <div className="cell-offset-5 cell-width-30">
          <div className="text-title">
            Баку: древныий и современый
            тур-фотопрогулка
          </div>
          <p>
            Наше путешествие начнется с древних ворот Баку – Гоша Гала. Мы прогуляемся по Старому Городу, полному
            архитектурных шедевров, легенд, вкусов и запахов и остановимся на знаменитом Приморском Бульваре – жемчужине
            города, чтобы запечатлеть Вас на лучших фотостопах.
          </p>
          <p>
            Фиолетовые Лондонские кэбы, иконические Flame Towers, древние крепостные стены и легендарная Девичья Башня
            окажутся на нашем пути, и целая серия профессиональных фотографий тура будут ждать на Вашем электронном
            адресе на память о нашей прогулке.
          </p>
        </div>
      </div>
    );
  }
}


export default InfoTur;
