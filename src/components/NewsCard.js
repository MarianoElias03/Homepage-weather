import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=488aac26e1fa4183b84e24436ac00d22`
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=488aac26e1fa4183b84e24436ac00d22`
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>News App</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={handleChange} placeholder="Search news..." />
        <button type="submit">Search</button>
      </form>
      <div className="start-0 translate-end-x">
        {articles.slice(0,3).map((article, index) => (
        <div className="m-3 ">
            <div class="card " style={{ width: "18rem", marginLeft: "auto", marginRight: "auto" }}>
                <div class="card-body">
                    <a href={article.url} target="_blank" rel="noopener noreferrer"> <h5 class="card-title">{article.title}</h5></a>
                    <p class="card-text">{article.description}</p>
                </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default News;
