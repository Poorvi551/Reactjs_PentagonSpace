import React from"react";

const Footer = () => {

    return(
        <>
        <div className="footer">
            <div className="sitename">
                <h3>Cartify</h3>
            </div>
            <div className="products">
                <h3>Products</h3>
                <br />
                <div>
                    <ul>
                    <li>Electronics</li>
                    <li>Fashion</li>
                    <li>Mobiles</li>
                    <li>Shoes</li>
                </ul>
                </div>
            </div>
            <div className="contact">
                <h3>Contact Us</h3>
                <br />
                <ul>
                    <li>Bangalore, Karnataka</li>
                    <li>+918124675865</li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Footer;