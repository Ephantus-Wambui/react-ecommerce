import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <h3>E-commerce</h3>
                <p className="text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis veniam nobis alias perferendis ea asperiores consequatur.
                </p>
            </div>
            <div className="footer-container">
                <h3>Products</h3>
                <p>Product 1</p>
                <p>Product 2</p>
                <p>Product 3</p>
            </div>
            <div className="footer-container">
                <h3>Find us on</h3>
                <p><a href="https://www.facebook.com/">Facebook</a></p>
                <p><a href="https://www.instagram.com/">Instagram</a></p>
                <p><a href="https://www.youtube.com/">Youtube</a></p>
            </div>
        </div>
    );
}

export default Footer;
