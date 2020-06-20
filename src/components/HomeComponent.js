import React from 'react';
import Banner from './Banner';
import GymFeatures from './GymFeatures';
import Locations from './Locations';
import SubscribeForm from './SubscribeForm';

function Home(props) {
  return (
    <React.Fragment>
      <Banner />
      <GymFeatures features={props.features} />
      <Locations />
      <SubscribeForm />
    </React.Fragment>
  );
}

export default Home;