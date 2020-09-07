import React from 'react';
import Item from './Item';

const ListGroup = ({ styles }) => {
  const listItems = styles.map((item, i) => (
    <React.Fragment key={item.id}>
      <Item style={item}
            />
    </React.Fragment>
  ));


  return (
    <div className="list-group">{listItems}</div>
  )
}

export default ListGroup;
