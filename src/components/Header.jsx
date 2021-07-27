import React from "react";

import HeaderImage from "../assets/header.jpg"

const Header = () => {

    return (
        <div className="header">
            <div className="header-about">
                <div className="row">
                    <div className="col m6 s12">
                        <p className="header-content">DailyBuzz is an app which displays the latest and trending news about different countries.
                        You can now read the top news of your country related to different topics.
                        </p>
                    </div>
                    <div className="col m6 s12">
                        <img className="about-image" src={HeaderImage} alt="Header" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;