import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';


import NewsCard from "./components/NewsCard";

import Button from "react-bootstrap/Button";


const NewsContent = () => {

    const [newsData, setNewsData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    const [perPage] = useState(10);
    const [offset, setOffset] = useState(0);


    useEffect(() => {
        setLoading(true);
        const getNews = async () => {
            var response = await axios.get("https://api.publicapis.org/entries");
            if (response.status === 200) {
                let data = Object.entries(response.data);
                setNewsData(data[1][1]);
                setError(false);
                //setPageCount(Math.ceil((data).length / pageCount));
                console.log((data[1]).length)
                return;
            }
            setError(response.error);
        }
        getNews();
        setLoading(false);
        return;
    }, [])

    const handleSearchInput = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    /*useEffect(() => {

        const results = newsData.filter((news) => {
            news.API.toLowerCase().includes(searchTerm.toLowerCase());
        })
        setNewsData(results);
        console.log(results)
    }, [searchTerm])*/

    return (
        <>
            <div className="bar">
                <div className="bar-card">
                    <div className="row search-content">
                        <div className="col m6 s12">
                            <div className="row">
                                <div className="col m5 s12">
                                    <input
                                        placeholder="Search..."
                                        id="search"
                                        value={searchTerm}
                                        onChange={handleSearchInput}
                                    />
                                </div>
                                <div className="col m1 s12">
                                    <Button className="search-button" onClick={handleSearchInput}>Search</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-content">
                <div className="row">
                    <div className="s10">
                        {newsData && newsData.map((news) => {
                            return (
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
        </>
    );
}

export default NewsContent;