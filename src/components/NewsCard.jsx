import React from 'react';

const NewsCard = () => {

    return (
        <div className="news-card">
            <div className="news-content-card">
                <div className="row">
                    <div className="col s12">
                        <h4>News Title</h4>
                        <p>DailyBuzz is an app which displays the latest and trending news about different countries.
                        You can now read the top news of your country related to different topics.
                        DailyBuzz is an app which displays the latest and trending news about different countries.
                        You can now read the top news of your country related to different topics.
                        </p>
                        <div className="row">
                            <div className=" col m6 s6">
                                <h6>Category: Tech</h6>
                            </div>
                            <div className=" col m6 s6">
                                <h6>Category: Tech</h6>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;