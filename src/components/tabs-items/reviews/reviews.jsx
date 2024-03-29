import React from 'react';
import {connect} from 'react-redux';
import Review from './review';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';
import {escButtonKeydownCheck, outsideModalClickCheck} from '../../../util';

const Reviews = ({reviews}) => {

    const escButtonKeydownHandler = () => escButtonKeydownCheck;
    const outsideModalClickHandler = () => outsideModalClickCheck;

    const sendReviewButtonClickHandler = () => {
        document.querySelector(`.modal-card`).classList.remove('visually-hidden');
        document.querySelector(`html`).classList.add('hidden-overflow');
        document.querySelector(`.modal-card__required-wrapper input`).focus()

        document.addEventListener('mouseup', outsideModalClickHandler());
        window.addEventListener(`keydown`, escButtonKeydownHandler())
    }

    return (
        <div className="tabs__reviews reviews visually-hidden">
            <button onClick={sendReviewButtonClickHandler} type="button" className="reviews__send-review">Оставить отзыв</button>
            <ul className="reviews__reviews-list">
                {
                    reviews.map((review) => (
                        <Review review={review} key={nanoid()} />
                    ))
                }
            </ul>
        </div>

    );
}

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            odds: PropTypes.string,
            limitations: PropTypes.string,
            rating: PropTypes.number.isRequired,
            comment: PropTypes.string.isRequired,
            date: PropTypes.instanceOf(Date).isRequired
        })
    )
}

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews,
    };
};

export {Reviews};
export default connect(mapStateToProps, null)(Reviews);