import React, { useState, useEffect } from 'react';
import { getRandomBeer,
         getBreweriesByBeer,
         getBeerStyles,
         getRandomBrewDog } from './API';
import ListGroup from './components/ListGroup';
import BeerCard from './components/BeerCard';
import BrewDogCard from './components/BrewDogCard'
import './styles.css'

const App = () => {
  const [randBrewDog, setRandBrewDog] = useState({
    "id": null,
    "name": "Hardkogt IPA",
    "tagline": "A Special Double IPA For Our Danish Friends.",
    "first_brewed": "06/2010",
    "description": "Brewed for the beer maniacs in Denmark, this Double IPA quivered with kumquat, kiwi and orange pith all held together with a honeycomb malt body.",
    "image_url": "https://images.punkapi.com/v2/194.png",
    "abv": 7.6,
    "ibu": 175,
    "target_fg": 1014,
    "target_og": 1072,
    "ebc": 40,
    "srm": 20,
    "ph": 4.4,
    "attenuation_level": 80.6,
    "volume": {
      "value": 20,
      "unit": "litres"
    },
    "boil_volume": {
      "value": 25,
      "unit": "litres"
    },
    "method": {
      "mash_temp": [
        {
          "temp": {
            "value": 63,
            "unit": "celsius"
          },
          "duration": 90
        }
      ],
      "fermentation": {
        "temp": {
          "value": 21,
          "unit": "celsius"
        }
      },
      "twist": null
    },
    "ingredients": {
      "malt": [
        {
          "name": "Extra Pale",
          "amount": {
            "value": 6.25,
            "unit": "kilograms"
          }
        },
        {
          "name": "Crystal 150",
          "amount": {
            "value": 0.25,
            "unit": "kilograms"
          }
        },
        {
          "name": "Caramalt",
          "amount": {
            "value": 0.46,
            "unit": "kilograms"
          }
        }
      ],
      "hops": [
        {
          "name": "Columbus",
          "amount": {
            "value": 30,
            "unit": "grams"
          },
          "add": "start",
          "attribute": "bitter"
        },
        {
          "name": "Columbus",
          "amount": {
            "value": 40,
            "unit": "grams"
          },
          "add": "middle",
          "attribute": "flavour"
        },
        {
          "name": "Centennial",
          "amount": {
            "value": 40,
            "unit": "grams"
          },
          "add": "middle",
          "attribute": "flavour"
        },
        {
          "name": "Simcoe",
          "amount": {
            "value": 40,
            "unit": "grams"
          },
          "add": "middle",
          "attribute": "flavour"
        },
        {
          "name": "Columbus",
          "amount": {
            "value": 40,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        },
        {
          "name": "Centennial",
          "amount": {
            "value": 40,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        },
        {
          "name": "Simcoe",
          "amount": {
            "value": 40,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        },
        {
          "name": "Columbus",
          "amount": {
            "value": 60,
            "unit": "grams"
          },
          "add": "dry hop",
          "attribute": "aroma"
        },
        {
          "name": "Centennial",
          "amount": {
            "value": 70,
            "unit": "grams"
          },
          "add": "dry hop",
          "attribute": "aroma"
        },
        {
          "name": "Simcoe",
          "amount": {
            "value": 70,
            "unit": "grams"
          },
          "add": "dry hop",
          "attribute": "aroma"
        }
      ],
      "yeast": "Wyeast 1272 - American Ale II™"
    },
    "food_pairing": [
      "Thick cut salami pieces on tiger bread",
      "Chilli spiced pork pie",
      "Poached pear and blue cheese crumble"
    ],
    "brewers_tips": "It’s better to over-pitch your yeast here to ensure the beer ferments out.",
    "contributed_by": "Sam Mason <samjbmason>"
  });
  const [randBeer, setRandBeer] = useState({
    "id": null,
    "name": null,
    "nameDisplay": null,
    "abv": null,
    "styleId": null,
    "isRetired": null,
    "status": null,
    "statusDisplay": null,
    "createDate": null,
    "updateDate": null,
    "style": {
      "id": null,
      "categoryId": null,
      "category": {
        "id": null,
        "name": null,
        "createDate": null
      },
      "name": null,
      "shortName": null,
      "description": null,
      "ibuMin": null,
      "ibuMax": null,
      "abvMin": null,
      "abvMax": null,
      "srmMin": null,
      "srmMax": null,
      "ogMin": null,
      "fgMin": null,
      "fgMax": null,
      "createDate": null,
      "updateDate": null
    }
  });
  const [breweries, setBreweries] = useState([]);
  const [styles, setStyles] = useState([{
        "id": null,
        "categoryId": null,
        "category": {
          "id": null,
          "name": null,
          "createDate": null
        },
        "name": null,
        "shortName": null,
        "description": null,
        "ibuMin": null,
        "ibuMax": null,
        "abvMin": null,
        "abvMax": null,
        "srmMin": null,
        "srmMax": null,
        "ogMin": null,
        "fgMin": null,
        "fgMax": null,
        "createDate": null,
        "updateDate": null
  }]);

    //
    // const brewData = getBreweriesByBeer(randBeer.id);
    // setBreweries(brewData.data);
    const getRandBeer = async () => {
      const beer = await getRandomBeer();
      setRandBeer(beer.data);
    }
    const getStyles = async () => {
      const data = await getBeerStyles();
      setStyles(data.data);
    }

    const getRandBrewDog = async () => {
      const data = await getRandomBrewDog();
      setRandBrewDog(data[0]);
    }


  useEffect(() => {
    getRandBeer();
    getStyles();
    getRandBrewDog();
  //  const brewData = getBreweriesByBeer(randBeer.id);
  //  setBreweries(brewData.data);
  }, []);

  const toogleActiveStyle = async () => {
    console.log('open style card')
    const data = await getBeerStyles();
    setStyles(data.data);

  }
 console.log(randBrewDog)
  const {id, name, abv, ibu, style} = randBeer;
  return (
    <div className="container bg-light">
      <h1>Hello! This is a random beer for you!</h1>
      <BeerCard
                      name={name}
                      styleName={style.name}
                      styleId={style.id}
                      abv={abv}
                      ibu={ibu}
//                      breweries={breweries}
                      id={id}
                      toggleActiveStyle={toogleActiveStyle}
                      />
      <BrewDogCard beer={randBrewDog}/>
      <ListGroup  styles={styles}/>
    </div>
  );
};

export default App;
