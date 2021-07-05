import React from 'react';

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
            </div>
        </div>
    );
}

export default Contacts;