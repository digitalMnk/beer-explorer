import React from 'react';
const API_URL = 'http://localhost:3001';

const StarRatingModal = ({ rating, beerId, getBeerRating }) => {

  const onSaveRating = (e) => {
    //e.preventDefault();
    fetch(`${API_URL}/ratings`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({stars: rating, beerId: beerId})
    })
    .then((res) => {
      console.log(res);
      console.log(res.body.message)
     })
    .then((res) => {
      getBeerRating()
      console.log('get beer rating')
    })
    .catch((res) => console.log(res))

  }

  return (
    <>
    <div className="modal fade" id="StarRatingModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Rate this beer!</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            You wanna give this beer {rating} stars?
          </div>
          <div className="modal-footer">
            <button onClick={() => console.log(rating)} type="button" key="close-btn" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button onClick={onSaveRating} type="button" key="save-btn" className="btn btn-primary" data-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default StarRatingModal;
