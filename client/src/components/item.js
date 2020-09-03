import React, { useState, useEffect } from 'react';
import BeerStyleCard from './BeerStyleCard';


const Item = ({ id, styleName, category, description, ibuMin, ibuMax, abvMin, abvMax }) => {
  const [active, setActive] = useState(false);

   let activeClass;
 if (active) {
   activeClass = 'btn list-group-item list-group-item-action col-6 bg-info text-white';
 } else {
   activeClass = 'btn list-group-item list-group-item-action col-6';
 }
  return (
    <div className="row">
      <button id={id} className={activeClass} onClick ={() => setActive(!active)}><h5>{styleName}</h5></button>
      <div>{active && <BeerStyleCard
                      styleName={styleName}
                      category={category}
                      description={description}
                      ibuMin={ibuMin}
                      ibuMax={ibuMax}
                      abvMin={abvMin}
                      abvMax={abvMax}
                      />
      }</div>
    </div>
  )
}

export default Item;
