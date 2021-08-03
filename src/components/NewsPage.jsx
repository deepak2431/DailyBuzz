import React, { useEffect } from 'react';

const NewsPage = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="news-content">
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">
                        <h4>{props.location.contentProps.title}</h4>
                        <img src={props.location.contentProps.imageUrl} alt="News" />
                        <p>{props.location.contentProps.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsPage;