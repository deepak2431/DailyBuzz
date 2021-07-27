import React from 'react';

import NewsCard from "./components/NewsCard";

const NewsContent = () => {

    return(
        <div className="news-content">
            <div className="row">
                <div className="col m4 s12">
                    <NewsCard />
                </div>
                <div className="col m4 s12">
                    <NewsCard />
                </div>
                <div className="col m4 s12">
                    <NewsCard />
                </div>
            </div>
        </div>
    );
}

export default NewsContent;