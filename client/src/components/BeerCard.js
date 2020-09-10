import React from 'react';


const BeerCard = ({ id,
                    styleId,
                    name,
                    abv = null,
                    ibu = null,
                    styleName = 'null',
                    breweries = null,
                    toggleActiveStyle
                   }) => {

const listBreweries = breweries && breweries.map((brew) => (
  <span key={brew.id} className="alert alert-warning">{brew.name}</span>
))

  return (
    <div className="card" style={{width: 100 + '%'}}>
      <div className="row">
      <div className="card-body col-6">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{styleName}</h6>
        <p className="card-text">{}</p>

        <a href="#" className="card-link">{}</a>
        <a href={'#' + styleId} onClick={toggleActiveStyle} className="card-link">{styleName}</a>
      </div>
      <ul className="list-group col-6">
        {ibu && <span className="list-group-item bg-info text-white shadow">{`IBU: ${ibu}`}</span>}
        <span className="list-group-item bg-info text-white shadow">ABV: {abv}%</span>
      </ul>
      </div>
      <div className="row">
        {
          breweries && <ul>{listBreweries}</ul>
        }
      </div>
    </div>
  )
}

export default BeerCard;
