import React, { useState, useEffect } from 'react';
import StarRating from './StarRating';
import { getRating } from '../API';
const API_URL = 'http://localhost:3001';


const BrewDogCard = ({ beer }) => {
const [rating, setRating] = useState({});

const getBeerRating = async () => {
  const data = await getRating(beer.id);
  console.log(data)
  setRating(data);
}
useEffect(() => {
  getBeerRating();
}, []);

const beerLogo = beer.image_url && <img src={beer.image_url} alt="beer_image" style={{width: 2 + 'rem', marginRight: 'auto'}}/>;
  return (
    <div className="card" style={{width: 100 + '%'}}>
      <div className="row">
        <div className="card-body col-6">
          <h5 className="card-title">{beerLogo}{beer.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{beer.tagline}</h6>
          <p className="card-text list-group-item-info">First brewed in {beer.first_brewed}</p>
          <p className="card-text">{beer.description}</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
        <div className="col-6 right-sec">
          <ul className="list-group">
            {beer.ibu && <span className="list-group-item bg-info text-white shadow">{`IBU: ${beer.ibu}`}</span>}
            <span className="list-group-item bg-info text-white shadow">ABV: {beer.abv}%</span>
          </ul>
          <ul className="list-group">
            <span className="list-group-item list-group-item-info shadow">Food pairing:</span>
            {beer.food_pairing.map((item, i) => <span key={i} className="list-group-item list-group-item-warning shadow">{item}</span>)}
          </ul>
        </div>
      </div>
      <div className="row">
         <StarRating rating={rating.stars}
                     message={rating.message}
                     beerId={beer.id}
                     getBeerRating={getBeerRating}
                     />
      </div>
    </div>
  )
}

export default BrewDogCard;
