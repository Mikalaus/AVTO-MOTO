import React from 'react';

const Characteristics = () => {
    return (
        <ul className="tabs__characteristics-list tabs__active-tab-info">
            <li className="tabs__characteristic-item">
                <span className="tabs__characteristic-type">Трансмиссия</span>
                <span className="tabs__characteristic-value">Роботизированная</span>
            </li>
            <li className="tabs__characteristic-item">
                <span className="tabs__characteristic-type">Мощность двигателя, л.с.</span>
                <span className="tabs__characteristic-value">249</span>
            </li>
            <li className="tabs__characteristic-item">
                <span className="tabs__characteristic-type">Тип двигателя</span>
                <span className="tabs__characteristic-value">Бензиновый</span>
            </li>
            <li className="tabs__characteristic-item">
                <span className="tabs__characteristic-type">Привод</span>
                <span className="tabs__characteristic-value">Полный</span>
            </li>
            <li className="tabs__characteristic-item">
                <span className="tabs__characteristic-type">Объем двигателя, л</span>
                <span className="tabs__characteristic-value">2.4</span>
            </li>
            <li className="tabs__characteristic-item">
                <span className="tabs__characteristic-type">Макс. крутящий момент</span>
                <span className="tabs__characteristic-value">370/4500</span>
            </li>
            <li className="tabs__characteristic-item">
                <span className="tabs__characteristic-type">Количество цилиндров</span>
                <span className="tabs__characteristic-value">4</span>
            </li>
        </ul>
    );
}

export default Characteristics;