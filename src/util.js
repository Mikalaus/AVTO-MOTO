const escButtonKeydownCheck = (evt) => {
    if (evt.key === `Escape`) {
        document.querySelector(`.modal-card`).classList.add('visually-hidden');
        window.removeEventListener(`keydown`, escButtonKeydownCheck)
        document.removeEventListener('mouseup', outsideModalClickCheck)
        document.querySelector(`html`).classList.remove('hidden-overflow');
    }
}

const outsideModalClickCheck = (evt) => {
    const modal = document.querySelector(`.modal-card__wrapper`);
    let isModal = evt.target === modal || modal.contains(evt.target);
    if (!isModal) {
        document.querySelector(`.modal-card`).classList.add('visually-hidden');
        window.removeEventListener(`keydown`, escButtonKeydownCheck)
        document.removeEventListener('mouseup', outsideModalClickCheck)
        document.querySelector(`html`).classList.remove('hidden-overflow');
    }
}


export {escButtonKeydownCheck, outsideModalClickCheck}