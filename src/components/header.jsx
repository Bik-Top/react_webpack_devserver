import React, {Component} from 'react';



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleOver = this.handleOver.bind(this);
  }

  handleOver(e) {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  handleClick(e) {
    e.preventDefault();
  };

  render() {
    return (
      <div className="grid header">
       <div className="cell-width-33">
         <div className="top-text-title">Фототур с гидом по Баку</div>
         <p>Прогуляйтесь по прекрасному Баку, вслушайтесь в его легенды и получите Ваши фото на память!</p>
         <button className="button rounded">Забронировать место</button>

         <div className="grid">
           <div className="cell-center">
             <img className="photograf" src={require("../img/photograf-min.png")} alt="5+"/>
           </div>
           <div className="cell-center">
             <p>5+ професиональных фотогрфий с тура</p>
           </div>
         </div>
       </div>
        <div className="cell-center">
          <div className="rounded-full  button-play-nucleus-wrap">
            <div  className="text-center rounded-full grid grid-wrap  button-play">
              <div className="cell cell-center  button-play-nucleus">
                <div className="cell-bottom  cell-width-100  button-play-text-about">О нас за 2 минуты </div>
                <a href="#" className="inline rounded-full  play-nucleus"
                   onMouseLeave={this.handleOver}
                   onMouseOver={this.handleOver}
                   onClick={Header.handleClick}>
                </a>
                <div className={this.state.isToggleOn ? 'OFF_hovered' +  " cell-top cell-width-100  button-play-text-wotch" : 'ON_hovered'  +  " cell-top cell-width-100  button-play-text-wotch"}>Смотреть</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-full baku-wraper">
          <div className="rounded-full image-place">
            <img src={require("../img/some_bild-min.png")} alt="baku"/>
          </div>
        </div>
      </div>
    );
  }
}



export default Header;
