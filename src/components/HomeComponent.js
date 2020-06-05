import React from 'react';

function Home(props) {
  return (
    <div className="container-fluid bg">
      <div className="row py-2">
        <div className="col text-center">
          <h1>The Quarry</h1>
        </div>
      </div>
      <div className="row py-2">
        <div className="col-md-2 offset-md-4 text-center my-1 mt-md-1">
          <a className="btn btn-primary">Hours</a>
        </div>
        <div className="col-md-2 text-center mt-3 mt-md-1">
          <a id="locationButton" className="btn btn-primary" href="#locations">Location</a>
        </div>
      </div>
    </div>
  );
}

export default Home;