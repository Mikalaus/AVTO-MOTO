import React from 'react';

const Review = ({review}) => {
    return (
        <li className="reviews__review review">
            <h2 className="review__author">{review.name}</h2>
            <div className="review__assessment review__assessment--odds">
                <h3 className="review__assessment-title">Достоинства</h3>
                <span className="review__assessment-description">{review.odds}</span>
            </div>
            <div className="review__assessment review__assessment--limitations">
                <h3 className="review__assessment-title">Недостатки</h3>
                <span className="review__assessment-description">{review.limitations}</span>
            </div>
            <div className="review__comment-block">
                <h3 className="review__comment-title">Комментарий</h3>
                <p className="review__comment">{review.comment}</p>
            </div>
            <div className="review__rating">
                <div className="property__stars rating__stars">
                <span style={{width: `${review.rating * 20}%`}} />
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