import React, { useState, useEffect } from 'react';
import { getRating } from '../API';
const API_URL = 'http://localhost:3001';


const BrewDogCard = ({ beer }) => {
const [inputVal, setInputVal] = useState(5);
const [rating, setRating] = useState({});

const getBeerRating = async () => {
  const data = await getRating(beer.id);
  console.log(data)
  setRating(data);
}
useEffect(() => {
  getBeerRating();
}, []);
//getBeerRating();

const handleSubmit = (e) => {
  e.preventDefault();
  fetch(`${API_URL}/ratings`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({stars: inputVal, beerId: beer.id})
  })
  .then(function(res){ console.log(res) })
  .then((res) => getBeerRating())
  .catch(function(res){ console.log(res) })

}
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
        <h4>Rating: {rating.stars ? rating.stars : rating.message} </h4>
      </div>
      <div className="row">
      <form onSubmit={handleSubmit}>
        <label htmlFor="rating">Rate this beer</label>
        <input onChange={(e) => setInputVal(e.target.value)} value={inputVal} name="rating" type="text"/>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default BrewDogCard;
