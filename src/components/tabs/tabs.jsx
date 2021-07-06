import React from 'react';
import Characteristics from '../tabs-items/characteristics';
import Contacts from '../tabs-items/contacts';
import Reviews from '../tabs-items/reviews/reviews';

const Tabs = () => {

    const characteristicsButtonClickHandler = () => {
        document.querySelector(`.tabs__active-tab-info`).classList.add('visually-hidden');
        document.querySelector(`.tabs__active-tab-info`).classList.remove('tabs__active-tab-info');
        document.querySelector(`.tabs__tab--active`).classList.remove('tabs__tab--active');
        document.querySelector(`.tabs__tab--characteristics`).classList.add('tabs__tab--active');
        document.querySelector(`.tabs__characteristics-list`).classList.add('tabs__active-tab-info')
        document.querySelector(`.tabs__characteristics-list`).classList.remove('visually-hidden')
    }

    const reviewsButtonClickHandler = () => {
        document.querySelector(`.tabs__active-tab-info`).classList.add('visually-hidden');
        document.querySelector(`.tabs__active-tab-info`).classList.remove('tabs__active-tab-info');
        document.querySelector(`.tabs__tab--active`).classList.remove('tabs__tab--active');
        document.querySelector(`.tabs__tab--reviews`).classList.add('tabs__tab--active');
        document.querySelector(`.tabs__reviews`).classList.add('tabs__active-tab-info')
        document.querySelector(`.tabs__reviews`).classList.remove('visually-hidden')
    }

    const contactsButtonClickHandler = () => {
        document.querySelector(`.tabs__active-tab-info`).classList.add('visually-hidden');
        document.querySelector(`.tabs__active-tab-info`).classList.remove('tabs__active-tab-info');
        document.querySelector(`.tabs__tab--active`).classList.remove('tabs__tab--active');
        document.querySelector(`.tabs__tab--contacts`).classList.add('tabs__tab--active');
        document.querySelector(`.tabs__contacts`).classList.add('tabs__active-tab-info')
        document.querySelector(`.tabs__contacts`).classList.remove('visually-hidden')
    }

    return (
        <section className="main__tabs tabs">
            <div className="tabs__tab-list">
                <button
                    onClick={characteristicsButtonClickHandler}
                    type="button"
                    value="characteristics"
                    className="tabs__tab tabs__tab--characteristics tabs__tab--active"
                >Характеристики</button>
                
                <button
                    onClick={reviewsButtonClickHandler}
                    type="button"
                    value="reviews"
                    className="tabs__tab tabs__tab--reviews"
                >Отзывы</button>
                
                <button
                    onClick={contactsButtonClickHandler}
                    type="button"
                    value="contacts"
                    className="tabs__tab tabs__tab--contacts"
                >Контакты</button>
            </div>
            <Characteristics />
            <Contacts />
            <Reviews />
        </section>
    );
}

export default Tabs;