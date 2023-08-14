const URLSearchParams = require('url-search-params');
const axios = require('axios');
require('dotenv').config();

let url = 'https://newsapi.org/v2/top-headlines';

async function getNews(req, res) {
  try {
    console.log(`inside getNews function ${req.user}`);
    const searchParams = new URLSearchParams();
    if (req.user.preferences.category) {
      for (const category of req.user.preferences.category) {
        searchParams.append('category', category);
      }
    } else {
      searchParams.append('category', 'general');
    }
    searchParams.append('apiKey', process.env.NEWS_API_KEY);
    console.log(`: ${searchParams}`);
    const resp = await axios.get(`${url}?${searchParams}`);

    // Format articles for frontend
    const maxArticles = 5;
    const maxContentLines = 10;
    const formattedArticles = resp.data.articles.slice(0, maxArticles).map(article => ({
      headline: article.title,
      date: article.publishedAt,
      source: article.source.name,
      content: article.description ? article.description.split('\n', maxContentLines).join(' ') : 'Content not available',
      url: article.url
    }));

    console.log('Formatted Articles:', formattedArticles);
    res.status(200).json(formattedArticles); // Send the formatted data to frontend
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
}

module.exports = getNews;
