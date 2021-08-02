import React from 'react';

const NewsCard = ({ title, description, date, author }) => {

    return (
        <div className="news-card">
            <div className="news-content-card">
                <div className="row">
                    <div className="col s12">
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