import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import * as uuid from 'uuid';


import NewsCard from "./components/NewsCard";

import Button from "react-bootstrap/Button";
import Select from 'react-select';


const NewsContent = () => {

    const [newsData, setNewsData] = useState([]);
    const [category, setCategory] = useState('technology');

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(newsData);

    const perPage = 10;
    const [pageCount, setPageCount] = useState(0);
    const [offset, setOffset] = useState(0);

    const categoryList = [
        { value: 'bitcoin', label: 'Bitcoin' },
        { value: 'stocks', label: 'Stocks' },
        { value: 'mobiles', label: 'Mobiles' },
        { value: 'amazon', label: 'Amazon' },
        { value: 'latest', label: 'Latest' },
        { values: 'top', label: 'Top News'}

      ]


    useEffect(() => {
        //setLoading(true);
        const getNews = async () => {
            var response = await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=b9af8544c5c4446ab8cd327970f43466`);
            if (response.status === 200) {
                let data = response.data;
                setNewsData(data.articles);
                setSearchResults(data.articles);
                setPageCount(Math.ceil(((data.articles).length) / perPage))
                return;
            }
        }
        getNews();
        return;
    }, [offset , category])

    const handleSearchInput = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1 + perPage);
        window.scrollTo(0, 0)
    }

    const handleCategoryChange = (e) => {
        setCategory(e.value)
    }

    useEffect(() => {
        const results = newsData.filter((news) => {
            return (news.title.toLowerCase().includes(searchTerm.toLowerCase())) 
             
        })
        setSearchResults(results);
    }, [searchTerm, newsData])

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
                        <div className="col m3 s12">
                        <Select 
                            options={categoryList}
                            label="Select Category"
                            onChange={handleCategoryChange}
                        />
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-content">
                <div className="row">
                    <div className="s10">
                        {newsData && searchResults.slice(offset, offset + perPage).map((news) => {
                            return (
                                <NewsCard
                                    title={news.title}
                                    description={news.description}
                                    date={news.publishedAt}
                                    author={news.author}
                                    imageUrl={news.urlToImage}
                                    content={news.content}
                                    key={news.id}
                                    id={uuid.v4()}
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