import React from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import SendReviewPopup from '../tabs-items/reviews/send-review-popup';

const App = () => {

    return (
        <>
            
            <div className="visually-hidden">
                <svg><symbol id="icon-star" viewBox="0 0 17 17"><path fillRule="evenodd" clipRule="evenodd" d="M8.63145 0L10.5103 5.87336L16.5906 5.87336L11.6716 9.50329L13.5505 15.3766L8.63145 11.7467L3.71242 15.3766L5.59132 9.50329L0.672291 5.87336L6.75254 5.87336L8.63145 0Z"></path></symbol></svg>
            </div>
            <Header />
            <Main />
            <Footer />
            <SendReviewPopup />
        </>
    );
}

export default App;