import React from 'react';
import PropTypes from 'prop-types';

const Review = ({review}) => {

    let newTime = new Date()
    let relTime = review.date

    const timeDifference = (current, previous) => {
        let msPerMinute = 60 * 1000;
        let msPerHour = msPerMinute * 60;
        let msPerDay = msPerHour * 24;
        let msPerMonth = msPerDay * 30;
        let msPerYear = msPerDay * 365;
    
        let elapsed = current - previous;
    
        if (elapsed < msPerMinute) {
             return 'Только что';   
        } else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' минут назад';   
        } else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' часов назад';   
        } else if (elapsed < msPerMonth) {
             return 'Около ' + Math.round(elapsed/msPerDay) + ' дней назад';   
        } else if (elapsed < msPerYear) {
             return 'Около ' + Math.round(elapsed/msPerMonth) + ' месяцев назад';   
        } else {
             return 'Около ' + Math.round(elapsed/msPerYear ) + ' лет назад';   
        }
    }

    const resetCommentDate = () => {
        newTime.setSeconds(newTime.getSeconds() + 10);
        let date = timeDifference(newTime, relTime);
        document.querySelector('.review__date').textContent = date;
    }

    setInterval(resetCommentDate, 10000)

    const ratingToOpinion = (rating) => {
        if (Number(rating) === 0) {
            return `Категорически не советует`;
        }

        if (Number(rating) === 1) {
            return `Не советует`;
        }

        if (Number(rating) === 2) {
            return `Неудовлетворен полностью`;
        }

        if (Number(rating) === 3) {
            return `Советует`;
        }

        if (Number(rating) === 4) {
            return `Удовлетворен полностью`;
        }

        if (Number(rating) === 5) {
            return `Крайне рекомендует`;
        }
    }

    

    return (
        <li className="reviews__review review">
            <h2 className="review__author">{review.name}</h2>

            {
                review.odds !== `` ? <div className="review__assessment review__assessment--odds">
                    <h3 className="review__assessment-title">Достоинства</h3>
                    <span className="review__assessment-description">{review.odds}</span>
                </div> : ``
            }

            {
                review.limitations !== `` ? <div className="review__assessment review__assessment--limitations">
                    <h3 className="review__assessment-title">Недостатки</h3>
                    <span className="review__assessment-description">{review.limitations}</span>
                </div> : ``
            }
            
            <div className="review__comment-block">
                <h3 className="review__comment-title">Комментарий</h3>
                <p className="review__comment">{review.comment}</p>
            </div>
            <div className="review__rating">
                <div className="property__stars rating__stars">
                <span style={{width: `${review.rating * 20}%`}} />
                <span className="visually-hidden">Rating</span>
                </div>
                <span className="review__author-opinion">{ratingToOpinion(review.rating)}</span>
            </div>

            <div className="review__user-block">
                <span className="review__date">{timeDifference(new Date(), review.date)}</span>
                <button type="button" className="review__answer-to-author">Ответить</button>
            </div>
        </li>
    );
}

Review.propTypes = {
    review: PropTypes.shape({
        name: PropTypes.string.isRequired,
        odds: PropTypes.string,
        limitations: PropTypes.string,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired
    })
}

export default Review;