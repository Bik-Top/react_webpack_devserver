import React, {Component} from 'react';

class TicketCost extends React.Component {
  render() {
    return (
      <div className="ticket_cost">
        <div className="cell-width-100 top-text-title text-center">Стоимость билетов</div>
          <div className="grid">

            <div className="cell">
              <figure className="text-center">
                <div className="caption-top">
                  <p className="text-title">Взрослые</p>
                  <p>13+</p>
                </div>
                <div className="figure-burger">
                  <img className="scaled rounded-full" src={require("../img/o-HAPPY-facebook-min.png")} alt="St. Tropez"/>
                  <div className="price-place rounded-full">22 <sup>$</sup></div>
                </div>
                <figcaption>
                  <button className="button">Забронировать место</button>
                </figcaption>
              </figure>
            </div>

            <div className="cell">
              <figure className="text-center">
                <div className="caption-top">
                  <p className="text-title">Взрослые</p>
                  <p>13+</p>
                </div>
                <div className="figure-burger">
                  <img className="scaled rounded-full" src={require("../img/o-HAPPY-facebook-min.png")} alt="St. Tropez"/>
                  <div className="price-place rounded-full">22 <sup>$</sup></div>
                </div>
                <figcaption>
                  <button className="button">Забронировать место</button>
                </figcaption>
              </figure>
            </div>

            <div className="cell">
              <figure className="text-center">
                <div className="caption-top">
                  <p className="text-title">Взрослые</p>
                  <p>13+</p>
                </div>
                <div className="figure-burger">
                  <img className="scaled rounded-full" src={require("../img/o-HAPPY-facebook-min.png")} alt="St. Tropez"/>
                  <div className="price-place rounded-full">22 <sup>$</sup></div>
                </div>
                <figcaption>
                  <button className="button">Забронировать место</button>
                </figcaption>
              </figure>
            </div>
          </div>

      </div>
    );
  }
}



export default TicketCost;
