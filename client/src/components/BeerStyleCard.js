import React from 'react';

const BeerStyleCard = ({ id,
                        styleName = null,
                        category = null,
                        description = null,
                        ibuMin = null,
                        ibuMax = null,
                        abvMin = null,
                        abvMax = null,
                       }) => {

  return (
    <div className="card " style={{width: 100 + '%'}}>
      <div className="row">
      <div className="card-body col-6">
        <h5 className="card-title">{styleName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
        <p className="card-text">{description}</p>

        <a href="#" className="card-link">{category}</a>
        <a href={'#' + id} className="card-link" target="_blank">{styleName}</a>
      </div>
      <ul className="list-group col-6">
        <li className="list-group-item bg-info text-white shadow">ibuMin: {ibuMin}</li>
        <li className="list-group-item bg-info text-white shadow">ibuMax: {ibuMax}</li>
        <li className="list-group-item bg-info text-white shadow">abvMin: {abvMin}</li>
        <li className="list-group-item bg-info text-white shadow">abvMax: {abvMax}</li>
      </ul>
      </div>
    </div>
  )
}

export default BeerStyleCard;
