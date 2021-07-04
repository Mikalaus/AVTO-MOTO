import React from 'react';

const Review = () => {
    return (
        <li className="reviews__review review">
            <h2 className="review__author">Борис Иванов</h2>
            <div className="review__assessment review__assessment--odds">
                <h3 className="review__assessment-title">Достоинства</h3>
                <span className="review__assessment-description">мощность, внешний вид</span>
            </div>
            <div className="review__assessment review__assessment--limitations">
                <h3 className="review__assessment-title">Недостатки</h3>
                <span className="review__assessment-description">Слабые тормозные колодки (пришлось заменить)</span>
            </div>
            <div className="review__comment-block">
                <h3 className="review__comment-title">Комментарий</h3>
                <p className="review__comment">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</p>
            </div>
            <div className="review__rating">
                <div className="property__stars rating__stars">
                <span style={{width: '60%'}} />
                <span className="visually-hidden">Rating</span>
                </div>
                <span className="review__author-opinion">Советует</span>
            </div>
            <div className="review__user-block">
                <span className="review__date">1 минуту назад</span>
                <button type="button" className="review__answer-to-author">Ответить</button>
            </div>
        </li>
    );
}

export default Review;