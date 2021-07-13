import React from 'react';
import logo from '../../img/logo.svg';
import {LogoImgSizes} from '../../const';

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo-block">
                    <img src={logo} width={LogoImgSizes.WIDTH} height={LogoImgSizes.HEIGHT} alt="Логотип" className="header__logo-img" />
                    <h1 className="header__logo-title">
                    <span className="header__bold-title">avto</span>
                    <span className="header__default-title">moto</span>
                    </h1>
                </div>
                <nav className="header__nav navigation">
                    <ul className="navigation__nav-items">
                        <li className="navigation__nav-item"><a href="cars.html" className="navigation__nav-link">Автомобили</a></li>
                        <li className="navigation__nav-item"><a href="contacts.html" className="navigation__nav-link">Контакты</a></li>
                        <li className="navigation__nav-item"><a href="offers.html" className="navigation__nav-link">Услуги</a></li>
                        <li className="navigation__nav-item"><a href="vacancies.html" className="navigation__nav-link">Вакансии</a></li>
                    </ul>
                </nav>
            </div>
      </header>
    );
}

export default Header;