import React from 'react';

const BeerStyleCard = ({
                        style,
                        active
                       }) => {
  console.log(style);
  const {id, styleName, category, description, ibuMin, ibuMax, abvMin, abvMax } = style;
  return (
    <div className='card' style={{width: 100 + '%'}}>
      <div className="row">
      <div className="card-body col-md-6">
        <h5 className="card-title">{styleName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{category.name}</h6>
        <p className="card-text">{description}</p>

        {/* <a href="#" className="card-link">{category.name}</a> */}
        <a href={'#' + id} className="card-link">{styleName}</a>
      </div>
      <ul className="list-group col-md-6">
        <li className="list-group-item list-group-item-info shadow">ibuMin: {ibuMin}</li>
        <li className="list-group-item list-group-item-info shadow">ibuMax: {ibuMax}</li>
        <li className="list-group-item list-group-item-info shadow">abvMin: {abvMin}</li>
        <li className="list-group-item list-group-item-info shadow">abvMax: {abvMax}</li>
      </ul>
      </div>
    </div>
  )
}

export default BeerStyleCard;
