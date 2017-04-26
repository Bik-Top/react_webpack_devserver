import React, {Component} from 'react';


class Contacts extends React.Component {
  render() {
    return (
      <div className="grid-wrap  text-center contacts">
        <div className="top-text-title">Контакты</div>
        <div className="grid grid-center grid-wrap  contacts-wrap">

          <div className="cell cell-top">
            <div className="cell-width-100">
              <a className="inline partners-image-decorate" href="#">
                <p>Viator</p>
                <img className="partners-label" src={require("../img/partners/viator-min.png")} alt="viator"/>
              </a>
            </div>
            <div className="cell-width-100">
              <a className="inline partners-image-decorate" href="#">
                <p>Tripadvisor</p>
                <img className="partners-label" src={require("../img/partners/owl-min.png")} alt="owl"/>
              </a>
            </div>
          </div>

          <div className="cell ">
            <img className="standing" src={require("../img/png_orig/camera.png")} alt="camera"/>
            <ul className=" cell-offset-5 list-with-icon text-left">
              <li>
                <div className="grid grid-top">
                  <img className="cell icon" src={require("../img/phone-min.svg")} alt=""/>
                  <div className="cell description">
                    <p className="text-title">Телефон:</p>
                    <p>+994 12 29 89 885</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-top">
                  <img className="cell  icon" src={require("../img/adress-min.svg")} alt=""/>
                  <div className="cell description">
                    <p className="text-title">Адрес:</p>
                    <p>Азербайджан, г. Баку, ул. 28 мая, д. 10</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="cell cell-top">
            <div className="cell-width-100">
              <a className="inline partners-image-decorate" href="#">
                <p>Facebook</p>
                <img className="partners-label" src={require('../img/partners/f-min.png')} alt="f"/>
              </a>

            </div>
            <div className="cell-width-100">
              <a className="inline partners-image-decorate" href="#">
                <p>Instagram</p>
                <img className="partners-label" src={require('../img/partners/ico-min.png')} alt="Instagram_Icon"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Contacts;
