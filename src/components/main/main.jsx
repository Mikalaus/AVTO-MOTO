import React from 'react';
import Purchase from '../purchase/purchase';
import Tabs from '../tabs/tabs';


const Main = () => {
    return (
        <main className="main">
            <div className="main__wrapper">
                <Purchase />
                <Tabs />
            </div>
        </main>
    );
}

export default Main;