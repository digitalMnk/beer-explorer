const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const Ratings = require('../models/Ratings')

const app = express();
app.set('port', process.env.PORT || 3000);
// app.use(express.static('public'));


app.use(cors({
  origin: process.env.CORS_ORIGIN
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Узнать что тут за опции, что они делают
app.use(require('morgan')('dev'));


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true,
                                       useUnifiedTopology: true })
  .then(() => console.log('mongoDB connected'))
  .catch((err) => console.error(err));


app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/random-beer/', async (req, res) => {
  const data = await fetch(`${process.env.BEER_API_URL}/beer/random/?key=${process.env.BEER_API_KEY}`);
  const json =await data.json();
  res.send(json);
});

app.get('/beer/random', async (req, res) => {
  const data = await fetch('https://api.punkapi.com/v2/beers/random');
  const json = await data.json();
  res.send(json);
});

app.get('/styles/', async (req, res) => {
  const data = await fetch(`${process.env.BEER_API_URL}/styles/?key=${process.env.BEER_API_KEY}`);
  const json = await data.json();
  res.send(json);
});

app.post('/ratings/', (req, res) => {

  const entry = new Ratings(req.body);
  console.log(entry)
  entry.save().then(() => console.log('saved'))
              .catch(() => console.log('Error with saving to db'));

  res.status(200).json({
    message: 'posted'
  });
})

app.get(`/find-rating/:id`, async (req, res) => {
    const rating = await Ratings.findOne({beerId: req.params.id});
    if(rating) {
      res.send(rating);
    } else {
      res.send({
        message: 'no rating yet'
      })
    }
});

app.get('/style/:id', async (req, res) => {
  const id = req.params.id;
  const data = await fetch(`${process.env.BEER_API_URL}/style/${id}/?key=${process.env.BEER_API_KEY}`);
  const json = await data.json();
  res.send(json);
});

app.get('/breweries/:beerId', async (req, res) => {
  const beerId = req.params.beerId;
  const data = await fetch(`${process.env.BEER_API_URL}/beer/${beerId}/breweries/?key=${process.env.BEER_API_KEY}`);
  const json = await data.json();
  res.send(json);
})

app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('Не найдено');
});
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Ошибка сервера');
});


app.listen(app.get('port'), () => {
  console.log(`Listening on PORT ${app.get('port')}...`);
});
