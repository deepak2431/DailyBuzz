import React from 'react';

const NewsCard = ({ title, description, category }) => {

    return (
        <div className="news-card">
            <div className="news-content-card">
                <div className="row">
                    <div className="col s12">
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <div className="row">
                            <div className=" col m6 s6">
                                <h6>Category: {category}</h6>
                            </div>
                            <div className=" col m6 s6">
                                <h6>Category: {category}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;