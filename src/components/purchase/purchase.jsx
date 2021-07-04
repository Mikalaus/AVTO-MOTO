import React from 'react';
import Slider from '../slider/slider';
import engineTypeImg from '../../img/engine-type.svg';
import gearboxIcon from '../../img/gearbox-icon.svg';
import powerIcon from '../../img/power-icon.svg';
import engineCapacityIcon from '../../img/engine-capacity-icon.svg';

const Purchase = () => {
    return (
        <section className="main__purchase purchase">
            <Slider />
            <div className="purchase__info">
                <h2 className="purchase__title">Марпех 11</h2>
                <ul className="purchase__car-info-list">
                    <li className="purchase__car-info-item">
                        <img src={engineTypeImg} alt="тип топлива" className="purchase__car-info-img" />
                        <span className="purchase__car-info-description">бензин</span>
                    </li>
                    <li className="purchase__car-info-item">
                        <img src={gearboxIcon} alt="тип коробки передач" className="purchase__car-info-img" />
                        <span className="purchase__car-info-description">механика</span>
                    </li>
                    <li className="purchase__car-info-item">
                        <img src={powerIcon} alt="мощность двигателя" className="purchase__car-info-img" />
                        <span className="purchase__car-info-description">100 л.с.</span>
                    </li>
                    <li className="purchase__car-info-item">
                        <img src={engineCapacityIcon} alt="объем двигателя" className="purchase__car-info-img" />
                        <span className="purchase__car-info-description">1.4 л</span>
                    </li>
                </ul>
                <div className="purchase__price">
                    <h3 className="purchase__new-price">2 300 000 ₽</h3>
                    <h3 className="purchase__old-price">2 400 000 ₽</h3>
                </div>
                <button type="button" className="purchase__request">Оставить заявку</button>
                <button type="button" className="purchase__credit-request">В кредит от 11 000 ₽</button>
            </div>
        </section>
    );
}

export default Purchase;