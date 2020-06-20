import React from 'react';

function showGvl() {
  const mapGvl = document.querySelector('#mapGvl');
  const mapCola = document.querySelector('#mapCola');
  const mapIconCola = document.querySelector('#mapIconCola');
  const mapIconGvl = document.querySelector('#mapIconGvl');
  const circleIconCola = document.querySelector('#circleIconCola');
  const circleIconGvl = document.querySelector('#circleIconGvl');

  if (mapGvl.classList.contains('d-none')) {
    mapGvl.classList.remove('d-none');
    mapCola.classList.add('d-none');
  }

  if (mapIconCola.classList.contains('fa-inverse')) {
    mapIconCola.classList.remove('fa-inverse');
    mapIconGvl.classList.add('fa-inverse');
    circleIconCola.setAttribute("style", "color: #EDF0F4");
    circleIconGvl.setAttribute("style", "color: #3B4754");
  }
}

function showCola() {
  const mapGvl = document.querySelector('#mapGvl');
  const mapCola = document.querySelector('#mapCola');
  const mapIconCola = document.querySelector('#mapIconCola');
  const mapIconGvl = document.querySelector('#mapIconGvl');
  const circleIconCola = document.querySelector('#circleIconCola');
  const circleIconGvl = document.querySelector('#circleIconGvl');

  if (mapCola.classList.contains('d-none')) {
    mapCola.classList.remove('d-none');
    mapGvl.classList.add('d-none');
  }

  if (mapIconGvl.classList.contains('fa-inverse')) {
    mapIconGvl.classList.remove('fa-inverse');
    mapIconCola.classList.add('fa-inverse');
    circleIconGvl.setAttribute("style", "color: #EDF0F4");
    circleIconCola.setAttribute("style", "color: #3B4754");
  }
}

function Locations() {
  return (
    <React.Fragment>
      <div id="locations" className="container-fluid">
        <div className="row mb-0">
          <div className="col-md-6 text-center">
            <div className="row">
              <div className="col">
                <h2 className="text-center mt-4 mb-4 my-lg-5">Locations</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <p className="font-weight-bold mt-lg-3 mb-2">Greenville, SC</p>
                <span className="fa-stack fa-2x my-1">
                  <i id="circleIconGvl" className="fa fa-circle fa-stack-2x contact-icon"></i>
                  <i id="mapIconGvl" className="fa fa-map-marker fa-sm fa-stack-1x fa-inverse"></i>
                </span>
                <a id="addressGvl" href="javascript:void(0)" onClick={showGvl}> 5 Market Point Dr</a>
                <br />
                <span className="fa-stack fa-2x mb-1">
                  <i className="fa fa-circle fa-stack-2x contact-icon"></i>
                  <i className="fa fa-envelope-o fa-sm fa-stack-1x"></i>
                </span>
                <a id="emailGvl" href="mailto:quarrygvl@gym.com"> QuarryGvl@gym.com</a>
                <br />
                <span className="fa-stack fa-2x mb-1">
                  <i className="fa fa-circle fa-stack-2x contact-icon"></i>
                  <i className="fa fa-phone fa-sm fa-stack-1x"></i>
                </span>
                <a id="phoneGvl" href="tel:10000000000"> (000) 000-0000</a>
              </div>

              <div className="col-lg-6 mb-3">
                <p className="font-weight-bold mt-4 mt-lg-3 mb-2">Columbia, SC</p>
                <span className="fa-stack fa-2x my-1">
                  <i id="circleIconCola" className="fa fa-circle fa-stack-2x contact-icon"></i>
                  <i id="mapIconCola" className="fa fa-map-marker fa-sm fa-stack-1x"></i>
                </span>
                <a id="addressCola" href="javascript:void(0)" onClick={showCola}> 925 Huger St</a>
                <br />
                <span className="fa-stack fa-2x mb-1">
                  <i className="fa fa-circle fa-stack-2x contact-icon"></i>
                  <i className="fa fa-envelope-o fa-sm fa-stack-1x"></i>
                </span>
                <a id="emailCola" href="mailto:quarrycola@gym.com"> QuarryCola@gym.com</a>
                <br />
                <span className="fa-stack fa-2x mb-1">
                  <i className="fa fa-circle fa-stack-2x contact-icon"></i>
                  <i className="fa fa-phone fa-sm fa-stack-1x"></i>
                </span>
                <a id="phoneCola" href="tel:10000000000"> (000) 000-0000</a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <iframe id="mapGvl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.2692334547196!2d-82.3015095763976!3d34.824322681502835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885828ccf4191373%3A0xa69ae49c99757cb0!2s5%20Market%20Point%20Dr%2C%20Greenville%2C%20SC%2029607!5e0!3m2!1sen!2sus!4v1588719235892!5m2!1sen!2sus"
              width="100%" height="450" frameBorder="0" style={{ border: 0 }} aria-hidden="false"
              tabIndex={0}></iframe>

            <iframe id="mapCola" className="d-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9290320150462!2d-81.04651014858091!3d33.99435658052667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb306f24bb31%3A0x9681ff88fca83688!2s925%20Huger%20St%2C%20Columbia%2C%20SC%2029201!5e0!3m2!1sen!2sus!4v1588892055250!5m2!1sen!2sus"
              width="600" height="450" frameBorder="0" style={{ border: 0 }} aria-hidden="false"
              tabIndex={0}></iframe>
          </div>
        </div>
      </div>

      <hr className="mt-0" />
    </React.Fragment>
  );
}

export default Locations;