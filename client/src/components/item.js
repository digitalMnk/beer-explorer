import React, { useState } from 'react';
import BeerStyleCard from './BeerStyleCard';

const Item = ({ style }) => {
  const [active, setActive] = useState(false);

   let activeClass;
 if (active) {
   activeClass = 'card-btn btn list-group-item list-group-item-action col-md-6 bg-info text-white';
 } else {
   activeClass = 'card-btn btn list-group-item list-group-item-action col-md-6';
 }
  return (
    <div className="row beer-card">
        <button className={activeClass} onClick ={() => setActive(!active)}>
          {style.name}
        </button>
      {active && <BeerStyleCard
                      style={style}
                      active={active}
                      />
      }
    </div>
  )
}

export default Item;
