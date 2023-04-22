import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
    const [articles, setArticles] = useState([]);

    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://content.guardianapis.com/search?api-key=b27a8b3c-a25f-4f12-a6e6-bea90417bbd6&show-fields=thumbnail'
        );
        setArticles(response.data.response.results);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    useEffect(() => {
      fetchNews();
    }, []);
  return (
    <div>
      <h1>News App</h1>
      <div className="start-0 translate-end-x">
        {articles.slice(0,3).map((article, index) => (
        <div className="m-3" >
            <div class="card" key={index} style={{ width: "18rem", marginLeft: "auto", marginRight: "auto" }}>
                <a href={article.webUrl} target="_blank" rel="noopener noreferrer">
                <img src={article.fields.thumbnail} alt={article.webTitle} className="card-img-top"/>
                  <div class="card-body">
                    <a href={article.url} target="_blank" rel="noopener noreferrer"> <h5 class="card-title">{article.webTitle}</h5></a>
                    <p class="card-text">{article.sectionName}</p>
                </div>
                </a>

            </div>
        </div>
        ))}
      </div>
    </div>
  );
};
export default News;