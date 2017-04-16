const express = require('express');
const fetch = require('node-fetch');
const url = require('url');
const config = require('./config.json');

const app = express();

const fetchData = (endpoint) => {
  return fetch(`https://www.instagram.com${endpoint}/?__a=1`)
    .then(res => res.json())
}

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: err,
    message: err.message
  })
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/users/:username', (req, res, next) => {
  fetchData(`/${req.params.username}`)
    .then(data => res.json(data.user.media))
    .catch(next);
});

app.get('/tags/:hashtag', (req, res, next) => {
  fetchData(`/explore/tags/${req.params.hashtag}`)
    .then(data => res.json(data.tag.media))
    .catch(next);
});

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running at ${config.port}`)
});
