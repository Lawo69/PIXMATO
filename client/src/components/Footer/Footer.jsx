import React from "react";

import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"

import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
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
                    <span className="text btn" onClick={() => navigate(`/category/1`)}>Movie</span>
                    <span className="text btn" onClick={() => navigate(`/category/2`)}>Anime</span>
                    <span className="text btn" onClick={() => navigate(`/category/3`)}>Game</span>
                    <span className="text btn" onClick={() => navigate(`/category/4`)}>Nature</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text btn" onClick={() => navigate("/")}>Home</span>
                    <span className="text btn" onClick={() => navigate("/")}>About</span>
                    <span className="text btn" onClick={() => navigate("/")}>Tearms</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                    Copyright © 2023 Lawo. All rights reserved.
                    </div>
                    <img src={Payment} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
