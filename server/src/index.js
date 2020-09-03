const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.set('port', process.env.PORT || 3000);
// app.use(express.static('public'));

app.use(cors({
  origin: process.env.CORS_ORIGIN
}));
app.use(express.json());


app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/random-beer/', async (req, res) => {
  const data = await fetch('https://sandbox-api.brewerydb.com/v2/beer/random/?key=45c959e23b259cd87fc9d6391c28d664');
  const json =await data.json();
  console.log(json);
  res.send(json);
});

app.get('/styles/', async (req, res) => {
  const data = await fetch('https://sandbox-api.brewerydb.com/v2/styles/?key=45c959e23b259cd87fc9d6391c28d664');
  const json = await data.json();
  await console.log(json.data.length)
  res.send(json);
});

app.get('/style/:id', async (req, res) => {
  const id = req.params.id;
  const data = await fetch(`https://sandbox-api.brewerydb.com/v2/style/${id}/?key=45c959e23b259cd87fc9d6391c28d664`);
  const json = await data.json();
  res.send(json);
});

app.get('/breweries/:beerId', async (req, res) => {
  const beerId = req.params.beerId;
  const data = await fetch(`https://sandbox-api.brewerydb.com/v2/beer/${beerId}/breweries/?key=45c959e23b259cd87fc9d6391c28d664`);
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
