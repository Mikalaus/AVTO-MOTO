import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `271px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 59.968119003545425, lng: 30.316491998619156 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 59.968119003545425, lng: 30.316491998619156 }} />}
  </GoogleMap>
);

const Contacts = () => {

    return (
        <div className="tabs__contacts contacts visually-hidden">
            <ul className="contacts__info">
                <li className="contacts__item">
                    <h2 className="contacts__item-title">Адрес</h2>
                    <span className="contacts__item-description">Санкт-Петербург,<br />набережная реки Карповки, дом 5</span>
                </li>
                <li className="contacts__item">
                    <h2 className="contacts__item-title">Режим работы</h2>
                    <span className="contacts__item-description">Ежедневно, с 10:00 до 21:00</span>
                </li>
                <li className="contacts__item">
                    <h2 className="contacts__item-title">Телефон</h2>
                    <a href="tel: 8 (800) 333-55-99" className="contacts__item-description">8 (800) 333-55-99</a>
                </li>
                <li className="contacts__item">
                    <h2 className="contacts__item-title">E-mail</h2>
                    <span className="contacts__item-description">info@avto-moto.ru</span>
                </li>
            </ul>
            <div className="contacts__map" id="map">
                <MyMapComponent
                    isMarkerShown={true}
                />
            </div>
        </div>
    );
}

export default Contacts;