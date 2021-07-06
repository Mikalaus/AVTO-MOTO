import React, {useState} from 'react';
import {connect} from 'react-redux';
import { setReview } from '../../../store/actions';
import PropTypes from 'prop-types';
import {RATING_STAR_IMG_SIZE} from '../../../const';

const SendReviewPopup = ({onReviewSend}) => {

    const [name, setName] = useState(``);
    const [odds, setOdds] = useState(``);
    const [limitations, setLimitations] = useState(``);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState(``);

    const nameInputChangeHandler = () => (evt) => {
        setName(evt.target.value);
    }

    const oddsInputChangeHandler = () => (evt) => {
        setOdds(evt.target.value);
    }

    const limitationsInputChangeHandler = () => (evt) => {
        setLimitations(evt.target.value);
    }

    const rateRadioChangeHandler = () => (evt) => {
        setRating(evt.target.value);
    }

    const commentInputChangeHandler = () => (evt) => {
        setComment(evt.target.value);
    }

    const submitButtonClickHandler = () => (evt) => {
        const nameInput = document.querySelector(`.modal-card__input--name`)
        const commentInput = document.querySelector(`.modal-card__comment-input`)

        evt.preventDefault();

        if(nameInput.value !== `` && commentInput.value !== ``) {

            localStorage.setItem('name', evt.target.value);
            localStorage.setItem('odds', evt.target.value);
            localStorage.setItem('limitations', evt.target.value);
            localStorage.setItem('rating', evt.target.value);
            localStorage.setItem('comment', evt.target.value);

            onReviewSend({
                name: name,
                odds: odds,
                limitations: limitations,
                rating: rating,
                comment: comment,
                date: new Date()
            })
            document.querySelector(`.modal-card`).classList.add('visually-hidden');
            document.querySelector(`.modal-card__form`).reset();
        }
    }

    const closeButtonClickHandler = () => {
        document.querySelector(`.modal-card`).classList.add('visually-hidden');
    }


    const outsideModalClickHandler = () => (evt) => {
        const modal = document.querySelector(`.modal-card__wrapper`);
        let isModal = evt.target === modal || modal.contains(evt.target);
        if (!isModal) {
            document.querySelector(`.modal-card`).classList.add('visually-hidden');
        }
    }

    document.addEventListener('mouseup', outsideModalClickHandler())

    return (
        <div className="modal-card visually-hidden">
            <div className="modal-card__wrapper">
                <button onClick={closeButtonClickHandler} type="button" className="modal-card__close-button" />
                <h2 className="modal-card__title">Оставить отзыв</h2>
                <form action="POST" className="modal-card__form">
                    <div className="modal-card__inputs">
                        <div className="modal-card__required-wrapper">
                            <input
                                onInput={nameInputChangeHandler()}
                                type="text"
                                placeholder="Имя"
                                className="modal-card__input modal-card__input--name"
                                required
                            />
                        </div>
                        <input
                            onInput={oddsInputChangeHandler()}
                            type="text"
                            placeholder="Достоинства"
                            className="modal-card__input"
                        />
                        <input
                            onInput={limitationsInputChangeHandler()}
                            type="text"
                            placeholder="Недостатки"
                            className="modal-card__input"
                        />
                        <div className="modal-card__rate rating">
                            <input
                                onChange={rateRadioChangeHandler()}
                                className="rating__rate-input visually-hidden"
                                name="rating"
                                defaultValue={5}
                                id="5-stars"
                                type="radio"
                            />
                            <label htmlFor="5-stars" className="rating__rate-label" title="perfect">
                                <svg className="rating__star-image" width={RATING_STAR_IMG_SIZE} height={RATING_STAR_IMG_SIZE}>
                                <use xlinkHref="#icon-star" />
                                </svg>
                            </label>
                            <input
                                onChange={rateRadioChangeHandler()}
                                className="rating__rate-input visually-hidden"
                                name="rating"
                                defaultValue={4}
                                id="4-stars"
                                type="radio"
                            />
                            <label htmlFor="4-stars" className="rating__rate-label" title="good">
                                <svg className="rating__star-image" width={RATING_STAR_IMG_SIZE} height={RATING_STAR_IMG_SIZE}>
                                <use xlinkHref="#icon-star" />
                                </svg>
                            </label>
                            <input
                                onChange={rateRadioChangeHandler()}
                                className="rating__rate-input visually-hidden"
                                name="rating"
                                defaultValue={3}
                                id="3-stars"
                                type="radio"
                            />
                            <label htmlFor="3-stars" className="rating__rate-label" title="not bad">
                                <svg className="rating__star-image" width={RATING_STAR_IMG_SIZE} height={RATING_STAR_IMG_SIZE}>
                                <use xlinkHref="#icon-star" />
                                </svg>
                            </label>
                            <input
                                onChange={rateRadioChangeHandler()}
                                className="rating__rate-input visually-hidden"
                                name="rating"
                                defaultValue={2}
                                id="2-stars"
                                type="radio"
                            />
                            <label htmlFor="2-stars" className="rating__rate-label" title="badly">
                                <svg className="rating__star-image" width={RATING_STAR_IMG_SIZE} height={RATING_STAR_IMG_SIZE}>
                                <use xlinkHref="#icon-star" />
                                </svg>
                            </label>
                            <input
                                onChange={rateRadioChangeHandler()}
                                className="rating__rate-input visually-hidden"
                                name="rating"
                                defaultValue={1}
                                id="1-star"
                                type="radio"
                            />
                            <label htmlFor="1-star" className=" rating__rate-label" title="terribly">
                                <svg className="rating__star-image" width={RATING_STAR_IMG_SIZE} height={RATING_STAR_IMG_SIZE}>
                                <use xlinkHref="#icon-star" />
                                </svg>
                            </label>
                            <span className="rating__title">Оцените товар:</span>
                        </div>
                        <div className="modal-card__comment-wrapper">
                            <textarea
                                onInput={commentInputChangeHandler()}
                                className="modal-card__comment-input"
                                placeholder="Комментарий"
                                required
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    <button onClick={submitButtonClickHandler()} type="submit" className="modal-card__submit">Оставить отзыв</button>
                </form>
            </div>
        </div>
    );
}

SendReviewPopup.propTypes = {
    onReviewSend: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    onReviewSend(review) {
        dispatch(setReview(review));
    },
});

export {SendReviewPopup};
export default connect(null, mapDispatchToProps)(SendReviewPopup);