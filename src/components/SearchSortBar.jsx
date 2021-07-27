import React from "react";
import Button from "react-bootstrap/Button";

const SearchSortBar = () => {

    return (
        <div className="bar">
            <div className="bar-card">
                <div className="row search-content">
                    <div className="col m6 s12">
                        <div className="row">
                            <div className="col m5 s12">
                                <input placeholder="Search..." id="search" />
                            </div>
                            <div className="col m1 s12">
                                <Button className="search-button">Search</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchSortBar;