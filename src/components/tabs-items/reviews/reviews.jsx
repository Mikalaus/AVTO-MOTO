import React from 'react';

const Reviews = () => {
    return (
        <div className="tabs__reviews reviews">
            <button type="button" className="reviews__send-review">Оставить отзыв</button>
            <ul className="reviews__reviews-list" />
        </div>

    );
}

export default Reviews;