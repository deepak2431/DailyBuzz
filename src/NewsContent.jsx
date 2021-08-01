import axios from 'axios';
import React, { useEffect, useState } from 'react';

import NewsCard from "./components/NewsCard";

const NewsContent = () => {

    const [newsData, setNewsData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getNews = async () => {
            var response = await axios.get("https://api.publicapis.org/entries");
            if(response.status === 200) {
                let data = Object.entries(response.data);
                setNewsData(data[1][1]);
                setError(false);
                console.log(data[1][1])
                return;
            }
            setError(response.error);
        }
        getNews();
        setLoading(false);
        return;
    }, [newsData])


    return(
        <div className="news-content">
            <div className="row">
                <div className="s10">
                {newsData && newsData.slice(0,20).map((news) => {
                return(
                    <NewsCard
                        title={news.API}
                        description={news.Description}
                        category={news.Category}
                        key={Math.random() * 12}
                    />
                );
            })}
                </div>
            </div>
        </div>
    );
}

export default NewsContent;