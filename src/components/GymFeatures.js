import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

function RenderFeature({ feature }) {
  return (
    <Card>
      <CardImg width="100%" src={feature.image} alt={feature.name} />
      <CardBody>
        <CardTitle>{feature.name}</CardTitle>
        <CardText>{feature.text}</CardText>
      </CardBody>
    </Card>
  );
}

function GymFeatures(props) {
  const featureCards = props.features.map(feature => {
    return (
      <div key={feature.id} className="col-md-4">
        <RenderFeature feature={feature} />
      </div>
    );
  });

  return (
    <React.Fragment>
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
          {featureCards}
        </div>
      </div>

      <hr class="mb-0" />
    </React.Fragment>
  );
}

export default GymFeatures;