const API_URL = 'http://localhost:3001';

async function getRandomBeer() {
  const res = await fetch(`${API_URL}/random-beer`);
  return res.json();
};

async function getBeerStyles() {
  const res = await fetch(`${API_URL}/styles`);
  return res.json();
};

async function getBreweriesByBeer(id) {
  const res = await fetch(`${API_URL}/breweries/${id}`);
  return res.json();
};


export {
  getRandomBeer,
  getBeerStyles,
  getBreweriesByBeer
}
