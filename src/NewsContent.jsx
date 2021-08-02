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
            var response = await axios.get("https://newsapi.org/v2/everything?q=stock&apiKey=b9af8544c5c4446ab8cd327970f43466");
            if (response.status === 200) {
                let data = response.data;
                setNewsData(data.articles);
                setError(false);
                setPageCount(Math.ceil(((data.articles).length)/perPage))
                return;
            }
            setError(response.error);
        }
        getNews();
        setLoading(false);
        return;
    }, [offset])

    const handleSearchInput = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1 + perPage);
        window.scrollTo(0, 0)
    }

    /*useEffect(() => {

        const results = newsData.filter((news) => {
            news.title.toLowerCase().includes(searchTerm.toLowerCase());
        })
        setNewsData(results);
        console.log(results)
    }, [searchTerm])*/

    const handleSearch = () => {
        const results = newsData.filter((news) => {
            news.title.toLowerCase().includes(searchTerm.toLowerCase());
        })
        setNewsData(results);
    }

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
                                    <Button className="search-button" onClick={handleSearch}>Search</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-content">
                <div className="row">
                    <div className="s10">
                        {newsData && newsData.slice(offset, offset+perPage).map((news) => {
                            return (
                                <NewsCard
                                    title={news.title}
                                    description={news.description}
                                    date={news.publishedAt}
                                    author={news.author}
                                    key={Math.random() * 12}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="pagination">
            <ReactPaginate
                previousLabel={"Prev"}
                nextClassName={"Next"}
                breakClassName={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
             />
            </div>
        </>
    );
}

export default NewsContent;