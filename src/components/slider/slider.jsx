import React, {useState, useEffect} from 'react';
import exterierBigImg from '../../img/exterier-big.jpg';
import exterierSmallImg from '../../img/exterier-small.jpg';
import interierSmallImg from '../../img/interier-small.jpg';
import dashboardSmallImg from '../../img/dashboard-small.jpg';
import { SLIDER_IMAGES, SliderImgSizes, FIRST_ARRAY_ELEMENT_INDEX } from '../../const';

const Slider = () => {

    const [activePhoto, setActivePhoto] = useState(exterierBigImg);
    const [activePhotoNumber, setActivePhotoNumber] = useState(0);

    useEffect(() => {
        if (activePhotoNumber === FIRST_ARRAY_ELEMENT_INDEX) {
            document.querySelector(`.purchase__slide-change--previous`).classList.add(`purchase__slide-change--disabled`)
            document.querySelector(`.purchase__slide-change--previous`).setAttribute("disabled", "disabled");
        }

        if (activePhotoNumber === SLIDER_IMAGES.length - 1) {
            document.querySelector(`.purchase__slide-change--next`).classList.add(`purchase__slide-change--disabled`)
            document.querySelector(`.purchase__slide-change--next`).setAttribute("disabled", "disabled");
        }
    }, [activePhotoNumber])

    const buttonNextClickHandler = () => {
        setActivePhotoNumber(activePhotoNumber + 1)
        setActivePhoto(SLIDER_IMAGES[activePhotoNumber + 1])

        document.querySelector(`.purchase__slide-change--previous`).classList.remove(`purchase__slide-change--disabled`)
        document.querySelector(`.purchase__slide-change--previous`).removeAttribute("disabled", "disabled");
    }

    const buttonPreviousClickHandler = () => {
        setActivePhotoNumber(activePhotoNumber - 1)
        setActivePhoto(SLIDER_IMAGES[activePhotoNumber - 1])

        document.querySelector(`.purchase__slide-change--next`).classList.remove(`purchase__slide-change--disabled`)
        document.querySelector(`.purchase__slide-change--next`).removeAttribute("disabled", "disabled");
    }

    return (
    <div className="purchase__slider">
        <img src={activePhoto} width={SliderImgSizes.ACTIVE} alt="изображение машины" className="purchase__photo" />
        <div className="purchase__slides-block">
            <button type="button" className=" purchase__slide-change purchase__slide-change--previous purchase__slide-change--disabled" onClick = {buttonPreviousClickHandler} />
            <div className="purchase__slides">
                <img src={exterierSmallImg} width={SliderImgSizes.SMALL} alt="изображение экстерьера" className="purchase__slide" />
                <img src={interierSmallImg} width={SliderImgSizes.SMALL} alt="изображение интерьера" className="purchase__slide" />
                <img src={dashboardSmallImg} width={SliderImgSizes.SMALL} alt="изображение приборки" className="purchase__slide" />
            </div>
            <button type="button" className="purchase__slide-change purchase__slide-change--next" onClick = {buttonNextClickHandler} />
        </div>
    </div>
    );
}

export default Slider;