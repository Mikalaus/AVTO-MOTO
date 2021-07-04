import React from 'react';

const SendReviewPopup = () => {
    return (
        <div className="modal-card visually-hidden">
            <div className="modal-card__wrapper">
                <button type="button" className="modal-card__close-button" />
                <h2 className="modal-card__title">Оставить отзыв</h2>
                <form action="POST" className="modal-card__form">
                    <div className="modal-card__inputs">
                        <div className="modal-card__required-wrapper">
                            <input type="text" placeholder="Имя" className="modal-card__input" required />
                        </div>
                        <input type="text" placeholder="Достоинства" className="modal-card__input" />
                        <input type="text" placeholder="Недостатки" className="modal-card__input" />
                        <div className="modal-card__rate rating">
                            <input className="rating__rate-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" />
                            <label htmlFor="5-stars" className="rating__rate-label" title="perfect">
                                <svg className="rating__star-image" width={27} height={27}>
                                <use xlinkHref="#icon-star" />
                                </svg>
                            </label>
                            <input className="rating__rate-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" />
                            <label htmlFor="4-stars" className="rating__rate-label" title="good">
                                <svg className="rating__star-image" width={27} height={27}>
                                <use xlinkHref="#icon-star" />
                                </svg>
                            </label>
                            <input className="rating__rate-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" />
                            <label htmlFor="3-stars" className="rating__rate-label" title="not bad">
                                <svg className="rating__star-image" width={27} height={27}>
                                <use xlinkHref="#icon-star" />
                                </svg>
                            </label>
                            <input className="rating__rate-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" />
                            <label htmlFor="2-stars" className="rating__rate-label" title="badly">
                                <svg className="rating__star-image" width={27} height={27}>
                                <use xlinkHref="#icon-star" />
                                </svg>
                            </label>
                            <input className="rating__rate-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" />
                            <label htmlFor="1-star" className=" rating__rate-label" title="terribly">
                                <svg className="rating__star-image" width={27} height={27}>
                                <use xlinkHref="#icon-star" />
                                </svg>
                            </label>
                            <span className="rating__title">Оцените товар:</span>
                        </div>
                        <textarea className="modal-card__comment-input" placeholder="Комментарий" required defaultValue={""} />
                    </div>
                    <button type="submit" className="modal-card__submit">Оставить отзыв</button>
                </form>
            </div>
        </div>
    );
}

export default SendReviewPopup;