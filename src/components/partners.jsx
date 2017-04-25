import React, {Component} from 'react';


class Partners extends React.Component {
  render() {
    return (
      <div className=" text-center partners">
        <div className="top-text-title">Партнеры</div>
        <div className="grid grid-center">
          <div className="cell cell-center">
            {/* maby new Partners CSS style no good idea*/}
            <a className="inline hover-switch-image" href="#">
                <img className="standing" src={require("../img/partners/Expedia-min.png")}  alt="Expedia"/>
                <img className="actived" src={require("../img/partners/Expedia-active-min.png")}/>
            </a>
          </div>
          <div className="cell cell-center">
            <a className="inline hover-switch-image" href="#">
              <img className="standing" src={require("../img/partners/Travel_Channel_HD_Logo-min.png")}  alt="Expedia"/>
              <img className="actived" src={require("../img/partners/Travel_Channel_HD_Logo-active-min.png")}/>
            </a>
        </div>
          <div className="cell cell-center">
            <a className="inline hover-switch-image" href="#">
              <img className="standing" src={require("../img/partners/STA_Travel_Logo-min.png")}  alt="Expedia"/>
              <img className="actived" src={require("../img/partners/STA_Travel_Logo-active-min.png")}/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}


export default Partners;
