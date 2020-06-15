import React from 'react';

function GymFeatures() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col text-center">
          <h2>About the Gym</h2>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          Info snippet about gym...marketing jargon! Woo!
      </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 ">
          <img className="d-flex img-thumbnail" src="..\assets\images\indoor-climbing-2.jpg" alt="Indoor climbing image" />
          <h5 className="text-center my-3">The Facility</h5>
          <p className="text-center">The Quarry has varied climbing surfaces to suit everyone. From bouldering, to top rope
          and lead climbing, with lessons available for each.</p>
        </div>

        <div className="col-md-4 ">
          <img className="d-flex img-thumbnail" src="img/outdoor-climbing-1.jpg" alt="Outdoor climbing image" />
          <h5 className="text-center my-3">Outdoor Trips</h5>
          <p className="text-center">We offer organized group outdoor climbing trips, mostly local, but occational longer
            range trips if there is enough interest. A great supportive way to get introduced to outdoor climbing for the
          first time!</p>
        </div>

        <div className="col-md-4">
          <img className="d-flex img-thumbnail" src="img/teambuilding.jpg" alt="Indoor climbing image" />
          <h5 className="text-center my-3">Events/Parties</h5>
          <p className="text-center">Our gym is a great place for your next team building event or birthday party. Climbing is
          the perfect fun activity for people of all ages and all levels of fitness!</p>
        </div>
      </div>
    </div>
  );
}

export default GymFeatures;