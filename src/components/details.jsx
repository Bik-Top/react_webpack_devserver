import React, {Component} from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';


import 'react-datepicker/dist/react-datepicker.css';

class Details extends React.Component {
  render() {
    return (
      <div className="grid grid-wrap details-block">

        <div className="grid-wrap cell cell-offset-5">
          <div className="top-text-title">Детали</div>

          <ul className="cell list-with-icon">
            <li>
              <div className="grid grid-top">
                <img className="cell icon" src={require("../img/deys-min.svg")} alt=""/>
                <div className="cell description">
                  <p className="text-title">Дни:</p>
                  <p>Пятница, Суббота</p>
                </div>
              </div>
            </li>
            <li>
              <div className="grid grid-top">
                <img className="cell  icon" src={require("../img/clock-min.svg")} alt=""/>
                <div className="cell description">
                  <p className="text-title">Время начала:</p>
                  <p>10:00</p>
                </div>
              </div>
            </li>
            <li>
              <div className="grid grid-top">
                <img className="cell  icon" src={require("../img/place-min.svg")} alt=""/>
                <div className="cell description">
                  <p className="text-title">Место встречи:</p>
                  <p>Hard Rock Café Baku</p>
                  <p>(Перед главным входом)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="grid grid-top">
                <img className="cell  icon" src={require("../img/grupp_human-min.svg")} alt=""/>
                <div className="cell description">
                  <p className="text-title">Состав группы:</p>
                  <p>до 10 человек</p>
                </div>
              </div>
            </li>
          </ul>

          <div className="top-text-title">Включено</div>

          <ol type="1" start="1">
            <li>
              <p>
                <mark>Пешеходный тур</mark>
                продолжительностью 3 часа с гидом-бакинцем, рассказывающем об истории и архитекуре
              </p>
            </li>
            <li>
              <p>
                <mark>Минимум 5</mark>
                Ваших профессионально
                <mark>обработаных фотографий</mark>
                сделаных во время тура
              </p>
            </li>
            <li>
              <p>
                <mark>Дегустация</mark>
                национального азербайджанкого
                <mark>хлеба-тендира</mark>
                (в зависимости от наличия)
              </p>
            </li>
            <li>
              <p>
                <mark>Советы</mark>
                по Вашему путешестию от нашего гида
              </p>
            </li>
            <li>
              <p>
                <mark>Сувенир от компании</mark>
                или карта города
              </p>
            </li>
          </ol>
        </div>


        <div className="cell cell-offset-5">
          <div className="grid grid-wrap  dataoicker-wraper">
            <div className="grid grid-wrap cell cell-center cell-width-100 ">
              <Dataoicker/>
            </div>
            <div className="description-text-block text-left">
              <p>
                <mark className="griin-mark">Зеленый –</mark>
                свободные места
              </p>
              <p>
                <mark className="read-mark">Красный –</mark>
                нет свободных мест
              </p>
              <p>
                <mark className="greay-mark">Серый –</mark>
                нет тура на эту дату
              </p>
              <button className="button">Забронировать место</button>
            </div>

            <div className="grid grid-center rounded-full  circleImg">
              <div className="grid grid-center rounded-full  circle2">
                <div className="grid grid-center rounded-full circle1">
                  <img src={require("../img/heand_clock-min.png")} alt="heand_clock"/>
                </div>
              </div>
            </div>
          </div>


          <div className="cell-width-25  circles-right">
            <div className="top-text-title">О компании</div>
            <p>
              Добро пожаловать в самую маленькую туристическую компанию Азербайджана LGuide!
            </p>
            <p>
              Забронируйте нашу фотопрогулку по достопримечательностям Баку, узнайте все об истории города, послушайте
              бакинские мифы и легенды, расссказанные нашим гидом-фотографом, влюбленным в город!
            </p>
            <p>
              Приходите к нам с семьями и друзьями, пробуйте национальную еду, знакомьтесь с бакинцами и получайте
              прекрасные профессиональные фотографии на фоне лучших в Баку видов (мы точно знаем их все).
            </p>
            <p>
              Не забывайте брать с собой прекрасное настроение и удобную обувь, и в ответ мы обещаем Вам прекрасные
              воспоминания и подарки от компании!
            </p>
          </div>


        </div>
      </div>
    );
  }
}


class Dataoicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <DatePicker
      locale="ru"
      dateFormatCalendar="MMMM"
      name="lololo"
      highlightDates={
        [
          moment().subtract(3, "days"),
          moment().subtract(2, "days"),
          moment().add(2, "days")
        ]}
      excludeDates={
        [
          moment().subtract(1, "days"),
        ]
      }
      inline
      selected={this.state.startDate}
      onChange={this.handleChange}

    />;
  }
}


export default Details;
