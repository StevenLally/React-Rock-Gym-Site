import React from 'react';

function Footer(props) {
  return (
    <React.Fragment>
      <hr />
      <div className="container">
        <div className="row my-3">
          <div className="col text-center">
            <a href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
            <a href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
            <a href="http://facebook.com/"><i className="fa fa-facebook"></i></a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;