import React, { useState, useEffect } from 'react';
import { getBeerStyles, getBreweriesByBeer } from '../API';
import Item from './item';

const ListGroup = ({ showStyle }) => {
    const [items, setItems] = useState([{
      id: 'zcv',
      categoryId: 1,
      category: {
        id: 1,
        name: "British Origin Ales",
        createDate: "2012-03-21 20:06:45"
      },
      name: "Classic English-Style Pale Ale",
      shortName: "English Pale",
      description: "Classic English pale ales are golden to copper colored and display earthy, herbal English-variety hop character. Note that \"earthy, herbal English-variety hop character\" is the perceived end, but may be a result of the skillful use of hops of other national origins. Medium to high hop bitterness, flavor, and aroma should be evident. This medium-bodied pale ale has low to medium malt flavor and aroma. Low caramel character is allowable. Fruity-ester flavors and aromas are moderate to strong. Chill haze may be in evidence only at very cold temperatures. The absence of diacetyl is desirable, though, diacetyl (butterscotch character) is acceptable and characteristic when at very low levels.",
      ibuMin: "20",
      ibuMax: "40",
      abvMin: "4.5",
      abvMax: "5.5",
      srmMin: "5",
      srmMax: "5",
      ogMin: "1.04",
      fgMin: "1.008",
      fgMax: "1.016",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:18:23"
  }]);

  const getItems = async () => {
    const data = await getBeerStyles();
    setItems(data.data);
  }

  useEffect(() => {
    getItems();
  }, []);

  const listItems = items.map((item, i) => (
    <li key={item.id} id={item.id} className="list-group">
      <Item styleName={item.name}
            category={item.category.name}
            description={item.description}
            ibuMin={item.ibuMin}
            ibuMax={item.ibuMax}
            abvMin={item.abvMin}
            abvMax={item.abvMax}
            id={item.id}
            />
    </li>
  ));


  return (
    <ul>{listItems}</ul>
  )
}

export default ListGroup;
