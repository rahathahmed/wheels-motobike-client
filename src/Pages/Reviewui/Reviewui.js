import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const Reviewui = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=> {
         fetch("http://localhost:5000/review")
           .then((res) => res.json())
           .then((data) => setReviews(data));
    },[])
    return (
      <div className="p-5" style={{ background: "rgb(238, 238, 238)" }}>
        <h2> Customer Review</h2>
        <div className="row">
          {reviews.map((review) => (
            <div className="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{review.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{review.works} </h6>
                  <p class="card-text">{review.feedback} </p>
                  <Rating
                    initialRating={review.rating}
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    readonly
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Reviewui;


