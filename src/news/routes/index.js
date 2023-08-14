const news = require('express').Router();
const getNews = require('../controllers/news');
const verifyJwt = require('../../middleware/verifyToken');
const bodyParser = require ('body-parser');
 
news.use(bodyParser.urlencoded({ extended: false }));
news.use(bodyParser.json()); 

news.get('/', verifyJwt, getNews );

module.exports = {news};