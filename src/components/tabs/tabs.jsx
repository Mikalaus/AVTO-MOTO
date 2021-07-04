import React from 'react';
import Characteristics from '../tabs-items/characteristics';

const Tabs = () => {
    return (
        <section className="main__tabs tabs">
            <div className="tabs__tab-list">
                <button type="button" value="characteristics" className="tabs__tab tabs__tab--active">Характеристики</button>
                <button type="button" value="reviews" className="tabs__tab">Отзывы</button>
                <button type="button" value="contacts" className="tabs__tab">Контакты</button>
            </div>
            <div className="tabs__active-tab-info">
                <Characteristics />
            </div>
        </section>
    );
}

export default Tabs;