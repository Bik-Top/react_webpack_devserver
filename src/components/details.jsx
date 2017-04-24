import React, {Component} from 'react';

class Details extends React.Component {
  render() {
    return (
      <div className="grid details-block">

          <div className="cell-offset-10 cell-width-25">
            <div className="top-text-title">Детали</div>

            <ul className="cell">
              <li>
                <div className="grid grid-center">
                  <img className="cell cell-center icon" src={require("../img/deys-min.svg")} alt=""/>
                  <div className="cell description">
                    <p className="text-title">Дни:</p>
                    <p>Пятница, Суббота</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-center">
                  <img className="cell cell-center icon" src={require("../img/clock-min.svg")} alt=""/>
                  <div className="cell description">
                    <p className="text-title">Время начала:</p>
                    <p>10:00</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-center">
                  <img className="cell cell-center icon" src={require("../img/place-min.svg")} alt=""/>
                  <div className="cell description">
                    <p className="text-title">Место встречи:</p>
                    <p>Hard Rock Café Baku</p>
                    <p>(Перед главным входом)</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-center">
                  <img className="cell cell-center icon" src={require("../img/grupp_human-min.svg")} alt=""/>
                  <div className="cell description">
                    <p className="text-title">Состав группы:</p>
                    <p>до 10 человек</p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="top-text-title">Включено</div>

            <ol type="1"  start="1">
              <li>
               <p> <mark>Пешеходный тур</mark>  продолжительностью 3 часа с гидом-бакинцем, рассказывающем об истории и архитекуре</p>
              </li>
              <li>
                <p><mark>Минимум 5 </mark>Ваших профессионально <mark>обработаных фотографий </mark>сделаных во время тура</p>
              </li>
              <li>
                <p><mark>Дегустация</mark> национального азербайджанкого <mark>хлеба-тендира</mark> (в зависимости от наличия)</p>
              </li>
              <li>
                <p><mark>Советы </mark>по Вашему путешестию от нашего гида</p>
              </li>
              <li>
                <p><mark>Сувенир от компании</mark> или карта города</p>
              </li>
            </ol>
          </div>


          <div className="cell-offset-10 cell-width-30">
            <h1>DATAPICER</h1>

            <div className="top-text-title">О компании</div>
            <p>
              Добро пожаловать в самую маленькую туристическую компанию Азербайджана LGuide!
            </p>
            <p>
              Забронируйте нашу фотопрогулку по достопримечательностям Баку, узнайте все об истории города, послушайте бакинские мифы и легенды, расссказанные нашим гидом-фотографом, влюбленным в город!
            </p>
            <p>
              Приходите к нам с семьями и друзьями, пробуйте национальную еду, знакомьтесь с бакинцами и получайте прекрасные профессиональные фотографии на фоне лучших в Баку видов (мы точно знаем их все).
            </p>
            <p>
              Не забывайте брать с собой прекрасное настроение и удобную обувь, и в ответ мы обещаем Вам прекрасные воспоминания и подарки от компании!
            </p>
          </div>




      </div>
    );
  }
}



export default Details;
