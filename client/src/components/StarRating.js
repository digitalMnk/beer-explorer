import React, {useState} from 'react';
import StarRatingModal from './StarRatingModal';

const StarRating = ({ rating = 0, message = null, beerId, getBeerRating }) => {
  const stars = Array(5).fill(0);
  const [inputVal, setInputVal] = useState(0);
  // let classes;
  const handleRatingClick = (e) => {
    setInputVal(e.target.dataset.value);
    console.log(e.target.dataset.value);
  }

  return (
    <div className="star-rating">
      <h4 className="rating-message">Rating: {rating || message}</h4>
      <StarRatingModal rating={inputVal} beerId={beerId} getBeerRating={getBeerRating}/>
      <div className="rate">
      {stars.map((star, i) => (
        <button onClick={(e) => handleRatingClick(e)} key={i} data-value={i + 1} type="button" className="btn fas fa-star" data-toggle="modal" data-target="#StarRatingModal">
        </button>
      ))
      }
      </div>
    </div>
  )
}

export default StarRating;
