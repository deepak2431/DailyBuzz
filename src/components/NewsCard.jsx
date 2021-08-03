import React from 'react';

const NewsCard = ({ title, description, date, author, imageUrl }) => {

    return (
        <div className="news-card">
            <div className="news-content-card">
                <div className="row">
                    <div className="col m3 s12">
                        <img  className="news-img" src={imageUrl} alt="News" />
                    </div>
                    <div className="col m9 s12">
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <div className="row">
                            <div className=" col m6 s6">
                                <h6>Author: {author}</h6>
                            </div>
                            <div clas   sName=" col m6 s6">
                                <h6>Published Date: {date}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;