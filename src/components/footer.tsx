import React from 'react';
import arrow from 'assets/images/arrow.png';

const Footer = () => {
    return (
    <div className="footer">
        <div className="copyright">© 2023 Ryosuke Takahashi</div>
        <a href="#biography" className="arrow-button w-inline-block">
            <img src={arrow} loading="lazy" alt="" className="arrow"/>
        </a>
    </div>
    );
};

export default Footer;