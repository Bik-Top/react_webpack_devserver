import React, {Component} from 'react';


class TicketCost extends React.Component {
  handleOver(e){
    let el = e.target.parentElement.parentNode;
     el.className != 'active text-center'? el.className = 'active text-center': el.className = 'text-center';

    console.log(e.target)
  }
  render() {
    return (
      <div className="ticket_cost">
        <div className="top-text-title text-center">Стоимость билетов</div>

        <div className="grid">

          <div className="cell">
            <figure className="text-center" >
              <div className="caption-top">
                <p className="text-title">Взрослые</p>
                <p className="figure_bottom-text-title">13+</p>
              </div>
              <div className="figure-burger">
                <img className="scaled rounded-full" src={require("../img/o-HAPPY-facebook-min.png")} alt="St. Tropez"/>
                <div className="grid price-place rounded-full">
                  <div className="cell cell-center price">22<sup>$</sup></div>
                </div>
              </div>
              <figcaption>
                <button className="button" onMouseLeave={this.handleOver} onMouseOver={this.handleOver}>Забронировать место</button>
              </figcaption>
            </figure>
          </div>

          <div className="cell">
            <figure className="text-center">
              <div className="caption-top">
                <p className="text-title">Группы</p>
                <p className="figure_bottom-text-title">5-10 человек</p>
              </div>
              <div className="figure-burger">
                <img className="scaled rounded-full" src={require("../img/o-HAPPY-freands-min.png")} alt="St. Tropez"/>
                <div className="grid price-place rounded-full">
                  <div className="cell cell-center price">20<sup>$</sup></div>
                </div>
              </div>
              <figcaption>
                <button className="button" onMouseLeave={this.handleOver} onMouseOver={this.handleOver}>Забронировать место</button>
              </figcaption>
            </figure>
          </div>

          <div className="cell">
            <figure className="text-center">
              <div className="caption-top">
                <p className="text-title">Дети</p>
                <p className="figure_bottom-text-title">6-12 лет</p>
              </div>
              <div className="figure-burger">
                <img className="scaled rounded-full" src={require("../img/o-HAPPY-Kid-min.png")} alt="St. Tropez"/>
                <div className="grid price-place rounded-full">
                  <div className="cell cell-center price">15<sup>$</sup></div>
                </div>
              </div>
              <figcaption>
                <button className="button" onMouseLeave={this.handleOver} onMouseOver={this.handleOver}>Забронировать место</button>
              </figcaption>
            </figure>
          </div>
        </div>

      </div>
    );
  }
}



export default TicketCost;
