import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__nav navigation">
                <ul className="navigation__nav-items">
                <li className="navigation__nav-item"><a href="corporates.html" className="navigation__nav-link">Корпоративным клиентам</a></li>
                <li className="navigation__nav-item"><a href="clients.html" className="navigation__nav-link">Клиентам</a></li>
                    <li className="navigation__nav-item"><a href="rent.html" className="navigation__nav-link">Аренда авто</a></li>
                    <li className="navigation__nav-item"><a href="carsharing.html" className="navigation__nav-link">Каршеринг</a></li>
                    <li className="navigation__nav-item"><a href="faq.html" className="navigation__nav-link">Как продать авто</a></li>
                    <li className="navigation__nav-item"><a href="tradeIn.html" className="navigation__nav-link">Trade-in</a></li>
                    <li className="navigation__nav-item"><a href="testDrive.html" className="navigation__nav-link">Test drive</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;