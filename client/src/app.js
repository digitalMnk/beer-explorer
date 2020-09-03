import React, { useState, useEffect } from 'react';
import { getRandomBeer, getBreweriesByBeer } from './API';
import ListGroup from './components/ListGroup';
import BeerStyleCard from './components/BeerStyleCard';
import BeerCard from './components/BeerCard'
import './styles.css'



const App = () => {
  const [showStyle, setShowStyle] = useState(false);
  const [randBeer, setRandBeer] = useState({});
  const [breweries, setBreweries] = useState([]);
  const [style, setStyle] = useState({});

  const getRandBeer = async () => {
    const response = await getRandomBeer();
    setRandBeer(response.data);
    setStyle(response.data.style);
    const brewData = await getBreweriesByBeer(response.data.id);
    setBreweries(brewData.data);
  }

  useEffect(() => {
    getRandBeer();
  }, []);

  const toogleActiveStyle = () => {
    console.log('open style card')
  }

  const {id, name, abv, ibu} = randBeer;
  return (
    <div className="container bg-light">
      <h1>Hello! This is a random beer for you!</h1>
      <BeerCard
                      name={name}
                      styleName={style.name}
                      styleId={style.id}
                      abv={abv}
                      ibu={ibu}
                      breweries={breweries}
                      id={id}
                      toggleActiveStyle={toogleActiveStyle}
                      />
      <ListGroup showStyle={showStyle}/>
    </div>
  );
};

export default App;
