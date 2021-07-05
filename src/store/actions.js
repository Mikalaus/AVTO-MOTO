export const ActionType = {
    SET_REVIEW: `send-review-popup/setReview`,
    REMOVE_REVIEW: `send-review-popup/removeReview`
};

export const setReview = (review) => ({type: ActionType.SET_REVIEW, payload: review});

export const removeReview = () => ({type: ActionType.REMOVE_REVIEW});