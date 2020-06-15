import React from 'react';
import Banner from './Banner';
import GymFeatures from './GymFeatures';

function Home(props) {
  return (
    <React.Fragment>
      <Banner />
      <GymFeatures />
    </React.Fragment>
  );
}

export default Home;