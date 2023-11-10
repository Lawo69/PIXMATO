import React from "react";

import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Line 1:31:   'useContext' is defined but never used   no-unused-vars
  Line 2:10:   'useNavigate' is defined but never used  no-unused-vars
  Line 8:8:    'Search' is defined but never used       no-unused-vars
  Line 9:8:    'Cart' is defined but never used         no-unused-vars
  Line 10:10:  'Context' is defined but never</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Thennahen,idangoda,kiriella
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: 0789331225
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email: ambutakn@gmail.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">as</span>
                    <span className="text">asd</span>
                    <span className="text">asd</span>
                    <span className="text">asdasd</span>
                    <span className="text">asf</span>
                    <span className="text">asf</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">as</span>
                    <span className="text">asd</span>
                    <span className="text">asd</span>
                    <span className="text">asdasd</span>
                    <span className="text">asf</span>
                    <span className="text">asf</span></div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        safhdcbkjsvchsdgfjk
                    </div>
                    <img src={Payment} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
